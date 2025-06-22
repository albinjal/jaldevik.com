export function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200; // Average reading speed
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);

  return `${minutes} min read`;
}

export function extractTextFromMDX(mdxContent: string): string {
  // Remove frontmatter
  const withoutFrontmatter = mdxContent.replace(/^---[\S\s]*?---/, '');

  // Remove JSX/HTML tags
  const withoutTags = withoutFrontmatter.replaceAll(/<[^>]*>/g, '');

  // Remove markdown syntax
  const withoutMarkdown = withoutTags
    .replaceAll(/#{1,6}\s/g, '') // Headers
    .replaceAll(/\*\*(.*?)\*\*/g, '$1') // Bold
    .replaceAll(/\*(.*?)\*/g, '$1') // Italic
    .replaceAll(/`(.*?)`/g, '$1') // Inline code
    .replaceAll(/\[(.*?)]\(.*?\)/g, '$1') // Links
    .replaceAll(/!\[(.*?)]\(.*?\)/g, '$1') // Images
    .replaceAll(/```[\S\s]*?```/g, '') // Code blocks
    .replaceAll(/`([^`]+)`/g, '$1') // Inline code
    .replaceAll(/^\s*[*+-]\s/gm, '') // List items
    .replaceAll(/^\s*\d+\.\s/gm, '') // Numbered lists
    .replaceAll(/^\s*>\s/gm, '') // Blockquotes
    .replaceAll('---', '') // Horizontal rules
    .replaceAll(/\n{3,}/g, '\n\n'); // Multiple newlines

  return withoutMarkdown.trim();
}

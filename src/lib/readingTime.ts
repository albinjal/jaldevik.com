export function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200; // Average reading speed
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);

  return `${minutes} min read`;
}

export function extractTextFromMDX(mdxContent: string): string {
  // Remove frontmatter
  const withoutFrontmatter = mdxContent.replace(/^---[\s\S]*?---/, '');

  // Remove JSX/HTML tags
  const withoutTags = withoutFrontmatter.replace(/<[^>]*>/g, '');

  // Remove markdown syntax
  const withoutMarkdown = withoutTags
    .replace(/#{1,6}\s/g, '') // Headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Bold
    .replace(/\*(.*?)\*/g, '$1') // Italic
    .replace(/`(.*?)`/g, '$1') // Inline code
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Links
    .replace(/!\[(.*?)\]\(.*?\)/g, '$1') // Images
    .replace(/```[\s\S]*?```/g, '') // Code blocks
    .replace(/`([^`]+)`/g, '$1') // Inline code
    .replace(/^\s*[-\*\+]\s/gm, '') // List items
    .replace(/^\s*\d+\.\s/gm, '') // Numbered lists
    .replace(/^\s*>\s/gm, '') // Blockquotes
    .replace(/---/g, '') // Horizontal rules
    .replace(/\n{3,}/g, '\n\n'); // Multiple newlines

  return withoutMarkdown.trim();
}

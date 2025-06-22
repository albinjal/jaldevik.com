export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border/40 bg-background/80 supports-[backdrop-filter]:bg-background/60 relative z-10 w-full border-t backdrop-blur-md">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-6 text-center">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Albin Jaldevik. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

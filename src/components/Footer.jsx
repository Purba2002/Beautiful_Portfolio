import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Purba. All rights reserved.
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://github.com/Purba2002"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your-email@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};
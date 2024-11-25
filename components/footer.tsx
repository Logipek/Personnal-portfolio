import Link from "next/link";
import { Lock } from "lucide-react";
import { Button } from "./ui/button";

const footerLinks = {
  company: [
    { name: "À propos", href: "/about" },
    { name: "Projets", href: "/projects" },
    { name: "Stack", href: "/stack" },
  ],
  resources: [
    {
      name: "Documentation",
      href: "https://github.com/Logipek/Personnal-portfolio/blob/main/README.md",
    },
    { name: "Blog", href: "/projects" },
    { name: "Status", href: "https://status.hugo-damion.fr" },
  ],
  legal: [
    { name: "Politique de confidentialité", href: "/pc" },
    { name: "Mentions légales", href: "/ml" },
    { name: "CGU", href: "/cgu" },
  ],
  social: [
    { name: "GitHub", href: "https://github.com/Logipek" },
    { name: "LinkedIn", href: "https://linkedin.com/in/hugo-damion" },
    { name: "Twitter", href: "https://twitter.com/hugo-damion" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-background/50 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold gradient-text">
              Hugo.
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Développeur Full Stack passionné par la création
              d&apos;expériences web innovantes.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Raccourci </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Ressources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Légal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary/10 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hugo Damion. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

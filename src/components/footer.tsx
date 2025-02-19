import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Clients", href: "#clients" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
  { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ERAYA</h3>
            <p className="text-muted-foreground">
              Engineering Excellence,<br />
              Manufacturing Precision,<br />
              Talent Innovation
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ERAYA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
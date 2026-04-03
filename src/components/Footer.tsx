import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company */}
          <div>
            <img src="/images/logo-v2.png" alt="LA.SE Innenausbau" className="mb-4 h-12 w-auto" />
            <p className="text-sm text-primary-foreground/70">
              Ihr Partner für professionellen Innenausbau in Gera und Umgebung.
              Qualität, Zuverlässigkeit und Handwerkskunst.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-display text-xl">Kontakt</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                Cubaer Straße 7, 07548 Gera
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+491749801534" className="hover:text-accent">0174-9801534</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:lase.innenausbau@gmail.com" className="hover:text-accent">lase.innenausbau@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 font-display text-xl">Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/leistungen" className="hover:text-accent">Leistungen</Link></li>
              <li><Link to="/referenzen" className="hover:text-accent">Referenzen</Link></li>
              <li><Link to="/kontakt" className="hover:text-accent">Kontakt</Link></li>
              <li><Link to="/impressum" className="hover:text-accent">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-accent">Datenschutzerklärung</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} LA.SE Innenausbau – Lars Seidler. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

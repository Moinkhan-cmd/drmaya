import { footer, navigation } from "@/lib/content";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl mb-4">{footer.credentials}</h3>
            <p className="font-body text-background/70 max-w-md">
              {footer.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-background/70 mt-0.5 shrink-0" />
                <span className="font-body text-sm text-background/70">
                  {footer.contact.address}
                  <br />
                  {footer.contact.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-background/70 shrink-0" />
                <a
                  href={`tel:${footer.contact.phone}`}
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  {footer.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-background/70 shrink-0" />
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  {footer.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Hours</h4>
            <p className="font-body text-sm text-background/70 mb-1">
              {footer.hours.weekdays}
            </p>
            <p className="font-body text-sm text-background/70 mb-6">
              {footer.hours.weekend}
            </p>

            <h4 className="font-display text-lg mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-xs text-background/50">
              {footer.copyright}
            </p>
            <p className="font-body text-xs text-background/50 text-center md:text-right max-w-md">
              {footer.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

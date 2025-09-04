import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Mobile Devices", href: "#" },
        { name: "Smart Watches", href: "#" },
        { name: "AI Speakers", href: "#" },
        { name: "Accessories", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Contact Support", href: "#" },
        { name: "Community", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Investors", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-background-dark text-foreground-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Lumi<span className="text-brand-blue">Labs</span>
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  Pioneering the future of connected living through innovative IoT devices that enhance your everyday experience.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-muted-foreground">
                  <Mail className="h-5 w-5 mr-3 text-brand-blue" />
                  hello@lumilabs.com
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="h-5 w-5 mr-3 text-brand-blue" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-5 w-5 mr-3 text-brand-blue" />
                  San Francisco, CA
                </div>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="dark-ghost"
                    size="icon"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-4">Stay Updated</h4>
                <p className="text-muted-foreground mb-6">
                  Get the latest news about our products and innovations delivered to your inbox.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-card-dark border border-muted rounded-lg text-foreground-light placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
                <Button variant="hero" size="lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-muted">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h5 className="font-bold text-foreground-light mb-4">{section.title}</h5>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-brand-blue transition-smooth"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-muted flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Lumi Labs. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-brand-blue text-sm transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-brand-blue text-sm transition-smooth">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-brand-blue text-sm transition-smooth">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
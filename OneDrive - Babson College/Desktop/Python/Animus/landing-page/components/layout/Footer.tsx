import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const footerSections = {
    product: {
      title: 'Product',
      links: ['Features', 'Pricing', 'Integrations', 'Roadmap', 'Changelog'],
    },
    company: {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Press Kit', 'Contact'],
    },
    resources: {
      title: 'Resources',
      links: ['Help Center', 'API Docs', 'Canvas Guide', 'Community', 'Status'],
    },
    legal: {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Security', 'GDPR', 'Cookies'],
    },
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Animus
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Your command center for academic success
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-indigo-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © 2024 Animus. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

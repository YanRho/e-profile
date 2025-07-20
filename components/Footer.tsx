"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-[#09090b] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#442450] to-[#07a7a7] bg-clip-text text-transparent mb-4">
              Bryan Rhoelle Bergenholtz
            </h3>
            <p className="text-gray-400">
                
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Skills", "Projects", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() =>
                    document
                      .getElementById(link.toLowerCase())
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-gray-400 hover:text-[#442450] smooth-transition"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2">
              <a
                href="mailto:brbergenholtz.19@outlook.com"
                className="flex items-center gap-2 text-gray-400 hover:text-[#442450] smooth-transition"
              >
                <Mail size={16} />
                brbergenholtz.19@outlook.com
              </a>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://github.com/Yanrho"
                  className="text-gray-400 hover:text-[#442450] smooth-transition"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/bryanbergenholtz"
                  className="text-gray-400 hover:text-[#442450] smooth-transition"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Bryan Rhoelle Bergenholtz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

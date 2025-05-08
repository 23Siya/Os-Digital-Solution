
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import icons

function Footer() {
  return (
    <footer className="bg-[rgba(19,19,19,0.8)] text-gray-200 py-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Socials</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center space-x-2">
                <FaGithub className="text-xl" />
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center justify-center space-x-2">
                <FaLinkedin className="text-xl" />
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center justify-center space-x-2">
                <FaTwitter className="text-xl" />
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="hover:text-blue-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:text-blue-500">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="hover:text-blue-500">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/help-center" className="hover:text-blue-500">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/contact-support" className="hover:text-blue-500">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-blue-500">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-sm mt-6">
          © {new Date().getFullYear()} Matsysol<span className="text-blue-500">.dev</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
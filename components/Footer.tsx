import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ]

  const contactInfo = [
    { icon: Mail, text: "info@europak.com" },
    { icon: Phone, text: "+44-7403751956" },
  ]

  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">EuroPak Educational Consultant</h3>
            <p className="text-gray-600 mb-4">Your gateway to educational opportunities in Europe</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">
                Our Services
              </Link>
              {/* <Link href="/partners" className="text-gray-600 hover:text-primary transition-colors">
                Our Partners
              </Link> */}
              <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contact Information</h4>
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center mb-2">
                <info.icon size={18} className="text-primary mr-2" />
                <p className="text-gray-600">{info.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; 2023 EuroPak Educational Consultant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


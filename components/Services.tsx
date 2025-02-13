import Link from "next/link"
import { motion } from "framer-motion"
import { GraduationCap, Plane, Award, Globe, MessageSquare } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "University Selection",
      description: "Find the perfect university that aligns with your academic goals and career aspirations.",
      icon: GraduationCap,
    },
    {
      title: "Visa Assistance",
      description: "Navigate the complex visa application process with our expert guidance and support.",
      icon: Plane,
    },
    {
      title: "Scholarship Guidance",
      description: "Discover and apply for scholarships to make your European education more affordable.",
      icon: Award,
    },
    {
      title: "Pre-Departure Orientation",
      description: "Prepare for your new life in Europe with comprehensive pre-departure support and advice.",
      icon: Globe,
    },
    {
      title: "Language Support",
      description: "Improve your language skills and prepare for proficiency tests required by European universities.",
      icon: MessageSquare,
    },
  ]

  return (
    <div className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-center mb-4">
                <service.icon className="text-primary w-8 h-8 mr-3" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href="/services"
                className="text-primary hover:text-primary-light transition-colors inline-flex items-center"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <svg className="absolute bottom-0 left-0 right-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  )
}


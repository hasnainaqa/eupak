import Image from "next/image"
import { motion } from "framer-motion"

export default function Partners() {
  const partners = [
    { name: "University of Cambridge", logo: "/placeholder.svg" },
    { name: "École Polytechnique", logo: "/placeholder.svg" },
    { name: "Technical University of Munich", logo: "/placeholder.svg" },
    { name: "University of Amsterdam", logo: "/placeholder.svg" },
    { name: "KU Leuven", logo: "/placeholder.svg" },
    { name: "Uppsala University", logo: "/placeholder.svg" },
  ]

  return (
    <div className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  layout="fill"
                  objectFit="contain"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="text-sm font-semibold text-center text-gray-600">{partner.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
      <svg
        className="absolute top-0 left-0 right-0 transform rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f9fafb"
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  )
}


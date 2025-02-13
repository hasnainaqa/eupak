import Image from "next/image"
import { motion } from "framer-motion"

export default function FeaturedUniversities() {
  const universities = [
    { name: "University of Cambridge", logo: "/placeholder.svg" },
    { name: "ETH Zurich", logo: "/placeholder.svg" },
    { name: "Technical University of Munich", logo: "/placeholder.svg" },
    { name: "KTH Royal Institute of Technology", logo: "/placeholder.svg" },
    { name: "University of Copenhagen", logo: "/placeholder.svg" },
    { name: "University of Helsinki", logo: "/placeholder.svg" },
  ]

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Universities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {universities.map((university, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={university.logo || "/placeholder.svg"}
                  alt={university.name}
                  layout="fill"
                  objectFit="contain"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="text-sm font-semibold text-center text-gray-600">{university.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}


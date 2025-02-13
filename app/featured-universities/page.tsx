"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function FeaturedUniversities() {
  const [searchTerm, setSearchTerm] = useState("")

  const universities = [
    { name: "University of Cambridge", logo: "/placeholder.svg", region: "UK" },
    { name: "University of Oxford", logo: "/placeholder.svg", region: "UK" },
    { name: "Imperial College London", logo: "/placeholder.svg", region: "UK" },
    { name: "ETH Zurich", logo: "/placeholder.svg", region: "Central Europe" },
    { name: "Technical University of Munich", logo: "/placeholder.svg", region: "Central Europe" },
    { name: "KU Leuven", logo: "/placeholder.svg", region: "Central Europe" },
    { name: "KTH Royal Institute of Technology", logo: "/placeholder.svg", region: "Scandinavia" },
    { name: "University of Copenhagen", logo: "/placeholder.svg", region: "Scandinavia" },
    { name: "University of Helsinki", logo: "/placeholder.svg", region: "Scandinavia" },
  ]

  const filteredUniversities = universities.filter((university) =>
    university.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const regions = ["All", "UK", "Central Europe", "Scandinavia"]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center text-primary">Featured Universities</h1>

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search universities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <Tabs defaultValue="All">
        <TabsList className="mb-8">
          {regions.map((region) => (
            <TabsTrigger key={region} value={region}>
              {region}
            </TabsTrigger>
          ))}
        </TabsList>
        {regions.map((region) => (
          <TabsContent key={region} value={region}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredUniversities
                .filter((uni) => region === "All" || uni.region === region)
                .map((university, index) => (
                  <motion.div
                    key={university.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="relative h-40">
                        <Image
                          src={university.logo || "/placeholder.svg"}
                          alt={university.name}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 transform hover:scale-110"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-center">{university.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-center text-gray-600">{university.region}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}


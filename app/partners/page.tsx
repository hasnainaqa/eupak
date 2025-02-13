import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center text-primary">Our Partners</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-12">
        At EuroPak Educational Consultant, we take pride in our extensive network of partnerships with prestigious
        educational institutions across Europe. These collaborations allow us to provide our students with access to a
        wide range of high-quality educational opportunities.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
          <Card key={index} className="flex flex-col items-center justify-center p-6">
            <CardHeader>
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={200}
                height={200}
                className="mb-4"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-center">{partner.name}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Expanding Horizons</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Our partnerships extend beyond these institutions to include many more universities and colleges across
            Europe. We continuously work on expanding our network to offer our students the best and most diverse
            educational options.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}


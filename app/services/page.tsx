import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, FileText, Pen, Plane, Award, BookOpen, DollarSign } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "University Admissions",
      description:
        "Expert guidance for admissions to top universities in the UK, Sweden, Germany, Switzerland, and Finland for undergraduate, masters, and PhD programs.",
      icon: GraduationCap,
      color: "bg-blue-500",
    },
    {
      title: "Offer Letter Assistance",
      description: "Personalized support to help you secure offer letters from your desired universities.",
      icon: FileText,
      color: "bg-green-500",
    },
    {
      title: "Research Proposal Writing",
      description:
        "Professional assistance in crafting compelling research proposals for master's and PhD applications.",
      icon: Pen,
      color: "bg-yellow-500",
    },
    {
      title: "Visa Guidance & Pre-Departure Support",
      description:
        "Comprehensive visa application assistance and pre-departure briefings to ensure a smooth transition.",
      icon: Plane,
      color: "bg-purple-500",
    },
    {
      title: "Scholarship Assistance",
      description: "Expert advice on available scholarships and guidance on application processes.",
      icon: Award,
      color: "bg-red-500",
    },
    {
      title: "Language Proficiency Test Prep",
      description: "Tailored preparation courses for IELTS, PTE, and TOEFL to help you achieve the required scores.",
      icon: BookOpen,
      color: "bg-indigo-500",
    },
    {
      title: "Financial Statement Support",
      description:
        "Assistance in preparing and verifying financial statements required for visa applications and university admissions.",
      icon: DollarSign,
      color: "bg-teal-500",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center text-primary">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className={`icon-bg ${service.color} self-start`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}


"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar } from "@/components/ui/calendar"
import { CheckCircle, CalendarIcon } from "lucide-react"

export default function AdmissionProcess() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const steps = [
    {
      title: "Inquiry",
      description: "Contact us to discuss your academic goals and preferences.",
      image: "/Images/Inquiry.webp",
    },
    {
      title: "Application",
      description: "We assist you in preparing and submitting your university applications.",
      image: "/Images/Application.webp",
    },
    {
      title: "Offer Letter",
      description: "Receive and review offer letters from universities.",
      image: "/Images/Offer-letter.webp",
    },
    {
      title: "Visa Application",
      description: "We guide you through the visa application process.",
      image: "/Images/Visa-application.jpg",
    },
    {
      title: "Travel Preparation",
      description: "Get ready for your journey with our pre-departure support.",
      image: "/Images/travel.jpg",
    },
  ]

  const documents = [
    "Academic transcripts and certificates",
    "Passport copy",
    "CV/Resume",
    "Statement of Purpose",
    "Reference letters",
    "Proof of English language proficiency (IELTS/TOEFL/PTE)",
    "Portfolio (if applicable)",
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center text-primary">Admission Process</h1>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Step-by-Step Guide</h2>
        <div className="relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-center mb-8"
            >
              <div className="md:w-1/2 mb-4 md:mb-0">
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                        {index + 1}
                      </span>
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{step.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-primary hidden md:block"></div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Required Documents Checklist</h2>
        <Accordion type="single" collapsible className="w-full">
          {documents.map((document, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>
                <div className="flex items-center">
                  <CheckCircle className="text-primary mr-2" />
                  <span>{document}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  Make sure to prepare this document well in advance. If you need any assistance or have questions about
                  the requirements, our team is here to help.
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Application Deadlines</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarIcon className="mr-2" />
              Important Dates to Remember
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <p className="mb-4">
                  Application deadlines vary by university and program. Generally, they fall into these categories:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Fall Semester (September start): January to March</li>
                  <li>Spring Semester (January start): September to November</li>
                  <li>Summer Semester (select programs): March to May</li>
                </ul>
                <p className="mt-4">
                  We recommend starting your application process at least 6-8 months before your intended start date to
                  ensure ample time for preparation and visa processing.
                </p>
              </div>
              <div className="md:w-1/2">
                <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border shadow" />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}


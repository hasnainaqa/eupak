"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Globe, Award, BookOpen, Users, CheckCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  const services = [
    {
      title: "University Selection",
      description: "Find your perfect match",
      icon: GraduationCap,
      color: "bg-blue-500",
    },
    { title: "Visa Assistance", description: "Smooth application process", icon: Globe, color: "bg-green-500" },
    { title: "Scholarship Guidance", description: "Unlock funding opportunities", icon: Award, color: "bg-yellow-500" },
    { title: "Course Counseling", description: "Expert academic advice", icon: BookOpen, color: "bg-red-500" },
    { title: "Pre-Departure Support", description: "Prepare for your journey", icon: Users, color: "bg-purple-500" },
  ]

  const benefits = [
    "Access to top European universities",
    "Personalized guidance throughout the process",
    "Increased chances of scholarship opportunities",
    "Comprehensive visa application support",
    "Cultural adaptation and pre-departure orientation",
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-20">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Your Trusted Pathway to European Education</h1>
            <p className="text-xl mb-8 text-gray-600">
              Expert guidance for Pakistani students aspiring to study in Europe. Transform your future with world-class
              education.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Get Started</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <Image
              src="/Images/Homeimage.jpeg"
              alt="Students in Europe"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
        <div className="bento-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bento-item">
                <CardHeader>
                  <div className={`icon-bg ${service.color}`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose EuroPak?</h2>
        <Tabs defaultValue="expert-guidance" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="expert-guidance">Expert Guidance</TabsTrigger>
            <TabsTrigger value="comprehensive-support">Comprehensive Support</TabsTrigger>
            <TabsTrigger value="strong-partnerships">Strong Partnerships</TabsTrigger>
            <TabsTrigger value="success-track-record">Success Track Record</TabsTrigger>
          </TabsList>
          <TabsContent value="expert-guidance">
            <Card>
              <CardHeader>
                <CardTitle>Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our team of experienced consultants provides personalized advice to help you make informed decisions
                  about your education and future career.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="comprehensive-support">
            <Card>
              <CardHeader>
                <CardTitle>Comprehensive Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  From university selection to visa application and pre-departure orientation, we offer end-to-end
                  support for your educational journey.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="strong-partnerships">
            <Card>
              <CardHeader>
                <CardTitle>Strong Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We have established relationships with top European universities, ensuring you have access to the best
                  educational opportunities.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="success-track-record">
            <Card>
              <CardHeader>
                <CardTitle>Success Track Record</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our proven track record of successful placements speaks to our commitment to helping students achieve
                  their academic goals.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Choosing EuroPak</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center"
            >
              <CheckCircle className="text-primary mr-2" />
              <span>{benefit}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Start Your European Education Journey?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-6">
              Contact us today and take the first step towards a brighter future. Our expert consultants are here to
              guide you every step of the way.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  )
}


import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  

  const achievements = [
    "95% visa success rate",
    "1000+ students placed in top European universities",
    "Partnerships with 50+ prestigious institutions",
    "Award-winning consultancy services",
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">About Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            At EUPak Education Consultant, we empower students by providing seamless access to top universities in the
            UK, Central Europe, and Scandinavia. Our mission is to simplify the admission and visa process through
            expert guidance, personalized support, and ethical practices, ensuring students achieve their global
            academic and career goals with confidence.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg mb-4">
            We envision a future where international education is accessible to all, enabling students to excel in
            diverse cultural and professional landscapes. Through strong university partnerships and innovative
            consulting, we strive to be the leading gateway to world-class education and global success.
          </p>
        </div>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-2xl">Company Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            EUPak Education Consultant is a premier education consultancy dedicated to guiding students toward academic
            success in the UK, Central Europe, and Scandinavian countries. We specialize in university admissions, visa
            processing, and research proposal assistance for undergraduate, master's, and PhD programs.
          </p>
          <p className="text-lg mb-4">
            With a commitment to excellence, we provide personalized guidance to help students secure offer letters from
            top universities, craft compelling research proposals, and navigate the visa application process with ease.
            Our team of experts ensures a smooth transition for students by offering scholarship advice, pre-departure
            briefings, and career counseling.
          </p>
          <p className="text-lg">
            At EUPak Education Consultant, we empower students with the right resources and insights to achieve their
            academic dreams in some of the world's most prestigious institutions. Our extensive network, industry
            expertise, and student-centered approach make us a trusted partner in higher education abroad.
          </p>
        </CardContent>
      </Card>


      <h2 className="text-3xl font-bold mb-8 text-center">Our Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {achievements.map((achievement, index) => (
          <Card key={index}>
            <CardContent className="text-center py-4">
              <p className="text-lg font-semibold">{achievement}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}


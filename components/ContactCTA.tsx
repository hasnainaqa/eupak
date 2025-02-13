import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactCTA() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Start Your European Education Journey?</CardTitle>
            <CardDescription>
              Take the first step towards a brighter future with EUPak Education Consultant.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-6">
              Our expert consultants are here to guide you every step of the way, from university selection to visa
              application and beyond. Don't miss out on the opportunity to study at top European institutions.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch Today</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}


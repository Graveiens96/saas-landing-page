import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Clock,
  Code2,
  Globe,
  Heart,
  Shield,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Simplifying Data for Everyone
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                At StreamLine, we believe in the power of data to transform
                businesses. Our mission is to make data analytics accessible,
                intuitive, and actionable for teams of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Story
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                From a small startup to an industry leader, our journey has been
                defined by innovation and customer success.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">2018: The Beginning</h3>
              <p className="text-muted-foreground">
                StreamLine was founded by a team of data scientists and
                engineers who saw the need for more accessible analytics tools.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">2020: Rapid Growth</h3>
              <p className="text-muted-foreground">
                We expanded our team and product offerings, reaching our first
                1,000 customers and securing Series A funding.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">2023: Global Impact</h3>
              <p className="text-muted-foreground">
                Today, StreamLine serves over 10,000 businesses worldwide, with
                offices in New York, London, and Singapore.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative h-[300px] w-full max-w-3xl overflow-hidden rounded-xl md:h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="StreamLine team working together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Core Values
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                These principles guide everything we do at StreamLine, from
                product development to customer support.
              </p>
            </div>
          </div>
          <div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Heart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold">Customer First</h3>
                <p className="text-muted-foreground mt-2">
                  We prioritize our customers' needs in every decision we make.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Code2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-muted-foreground mt-2">
                  We constantly push boundaries to create better solutions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold">Integrity</h3>
                <p className="text-muted-foreground mt-2">
                  We operate with transparency and honesty in all our
                  interactions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold">Collaboration</h3>
                <p className="text-muted-foreground mt-2">
                  We believe great things happen when diverse minds work
                  together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Meet Our Leadership
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                The talented individuals driving StreamLine's vision and
                success.
              </p>
            </div>
          </div>
          <div className="grid gap-8 pt-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Sarah Johnson"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                <p className="text-muted-foreground">CEO & Co-Founder</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Michael Chen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Michael Chen</h3>
                <p className="text-muted-foreground">CTO & Co-Founder</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Elena Rodriguez"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Elena Rodriguez</h3>
                <p className="text-muted-foreground">Chief Product Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Our Journey
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Whether you're looking to transform your business with data or
                join our growing team, we'd love to connect with you.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { contactFormSchema, type ContactFormValues } from "@/lib/zod-schemas"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })

    form.reset()
    setIsSubmitting(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Get in Touch
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Have questions or need help? We're here for you. Reach out to our team and we'll get back to you as
                  soon as possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="w-full py-10 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">Contact Information</h2>
                  <p className="text-muted-foreground">
                    Our team is ready to assist you with any questions or concerns you may have.
                  </p>
                </div>
                <div className="grid gap-4">
                  <Card>
                    <CardContent className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6">
                      <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                      <div>
                        <CardTitle className="text-base sm:text-xl">Email</CardTitle>
                        <CardDescription className="text-sm sm:text-base">
                          <a href="mailto:info@streamline.com" className="hover:underline">
                            info@streamline.com
                          </a>
                        </CardDescription>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6">
                      <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                      <div>
                        <CardTitle className="text-base sm:text-xl">Phone</CardTitle>
                        <CardDescription className="text-sm sm:text-base">
                          <a href="tel:+1-555-123-4567" className="hover:underline">
                            +1 (555) 123-4567
                          </a>
                        </CardDescription>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6">
                      <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                      <div>
                        <CardTitle className="text-base sm:text-xl">Office</CardTitle>
                        <CardDescription className="text-sm sm:text-base">
                          123 Data Street, San Francisco, CA 94107
                        </CardDescription>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold">Connect With Us</h3>
                  <div className="flex flex-wrap space-x-3 sm:space-x-4">
                    <Link
                      href="#"
                      className="rounded-full bg-muted p-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                      href="#"
                      className="rounded-full bg-muted p-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                      href="#"
                      className="rounded-full bg-muted p-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                      href="#"
                      className="rounded-full bg-muted p-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">Github</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <Card>
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-xl sm:text-2xl">Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-1 after:content-['*'] after:text-red-500">
                                Name
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-1 after:content-['*'] after:text-red-500">
                                Email
                              </FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="Your email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-1 after:content-['*'] after:text-red-500">
                                Subject
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="Subject" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-1 after:content-['*'] after:text-red-500">
                                Message
                              </FormLabel>
                              <FormControl>
                                <Textarea placeholder="Your message" rows={5} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? "Sending..." : "Send Message"}
                          {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section - Using an image instead of placeholder text */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Visit Our Office</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We're located in the heart of San Francisco's tech district.
                </p>
              </div>
            </div>
            <div className="mt-8 h-[400px] w-full overflow-hidden rounded-lg bg-muted relative">
              <div className="absolute inset-0 bg-muted-foreground/10 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=1000&text=Map+of+San+Francisco"
                  alt="Map of our San Francisco office location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Find quick answers to common questions.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2">
              {[
                {
                  question: "What are your support hours?",
                  answer:
                    "Our support team is available Monday through Friday from 9 AM to 6 PM Pacific Time. Enterprise customers have access to 24/7 support.",
                },
                {
                  question: "How quickly can I expect a response?",
                  answer:
                    "We aim to respond to all inquiries within 24 hours during business days. Enterprise customers receive priority support with faster response times.",
                },
                {
                  question: "Do you offer on-site training?",
                  answer:
                    "Yes, we offer on-site training for Enterprise customers. Please contact our sales team for more information and pricing.",
                },
                {
                  question: "Can I schedule a demo?",
                  answer:
                    "You can schedule a personalized demo with one of our product specialists by clicking the 'Request Demo' button on our website.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


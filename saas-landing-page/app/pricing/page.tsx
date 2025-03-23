import Link from "next/link"
import { ArrowRight, BarChart2, Check, Facebook, Github, Heart, Instagram, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <BarChart2 className="h-6 w-6" />
            <span>StreamLine</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/pricing" className="text-sm font-medium underline underline-offset-4">
              Pricing
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="ml-4 lg:ml-6 flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Simple, Transparent Pricing
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Choose the plan that's right for your business. All plans include a 14-day free trial.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-primary" />
                <span>No credit card required</span>
                <Separator orientation="vertical" className="h-4" />
                <Check className="h-4 w-4 text-primary" />
                <span>14-day free trial</span>
                <Separator orientation="vertical" className="h-4" />
                <Check className="h-4 w-4 text-primary" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Starter",
                  price: "$49",
                  description: "Perfect for small businesses and startups.",
                  features: [
                    "Up to 5 users",
                    "5 data sources",
                    "Basic analytics",
                    "Daily data refresh",
                    "Email support",
                    "1 GB storage",
                    "Standard dashboards",
                    "CSV exports",
                  ],
                  cta: "Get Started",
                  popular: false,
                },
                {
                  name: "Professional",
                  price: "$99",
                  description: "Ideal for growing teams and businesses.",
                  features: [
                    "Up to 20 users",
                    "Unlimited data sources",
                    "Advanced analytics",
                    "Hourly data refresh",
                    "Priority support",
                    "10 GB storage",
                    "Custom dashboards",
                    "API access",
                    "Excel & PDF exports",
                  ],
                  cta: "Get Started",
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  description: "For large organizations with complex needs.",
                  features: [
                    "Unlimited users",
                    "Unlimited data sources",
                    "Advanced analytics",
                    "Real-time data",
                    "24/7 dedicated support",
                    "Unlimited storage",
                    "Custom integrations",
                    "On-premise deployment option",
                    "SSO & advanced security",
                    "Dedicated account manager",
                  ],
                  cta: "Contact Sales",
                  popular: false,
                },
              ].map((plan, index) => (
                <Card key={index} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                  <CardHeader>
                    {plan.popular && <Badge className="w-fit mb-2">Most Popular</Badge>}
                    <CardTitle>{plan.name}</CardTitle>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2 text-sm">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Compare Features</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A detailed comparison of what's included in each plan.
                </p>
              </div>
            </div>
            <div className="mt-12 overflow-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-4 px-4 text-left font-medium">Feature</th>
                    <th className="py-4 px-4 text-center font-medium">Starter</th>
                    <th className="py-4 px-4 text-center font-medium">Professional</th>
                    <th className="py-4 px-4 text-center font-medium">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Users", starter: "Up to 5", professional: "Up to 20", enterprise: "Unlimited" },
                    { feature: "Data Sources", starter: "5", professional: "Unlimited", enterprise: "Unlimited" },
                    { feature: "Data Refresh", starter: "Daily", professional: "Hourly", enterprise: "Real-time" },
                    { feature: "Storage", starter: "1 GB", professional: "10 GB", enterprise: "Unlimited" },
                    { feature: "Support", starter: "Email", professional: "Priority", enterprise: "24/7 Dedicated" },
                    { feature: "Custom Dashboards", starter: "✕", professional: "✓", enterprise: "✓" },
                    { feature: "API Access", starter: "✕", professional: "✓", enterprise: "✓" },
                    { feature: "Advanced Security", starter: "✕", professional: "✕", enterprise: "✓" },
                    { feature: "SSO", starter: "✕", professional: "✕", enterprise: "✓" },
                    { feature: "Custom Integrations", starter: "✕", professional: "✕", enterprise: "✓" },
                  ].map((row, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-4 px-4 font-medium">{row.feature}</td>
                      <td className="py-4 px-4 text-center">{row.starter}</td>
                      <td className="py-4 px-4 text-center">{row.professional}</td>
                      <td className="py-4 px-4 text-center">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Find answers to common questions about our pricing and plans.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How does the 14-day free trial work?",
                    answer:
                      "You can sign up for any plan and use all its features for 14 days without being charged. No credit card is required to start your trial. At the end of your trial, you can choose to subscribe or your account will be automatically downgraded to a limited free version.",
                  },
                  {
                    question: "Can I change plans later?",
                    answer:
                      "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference for the remainder of your billing cycle. When downgrading, the change will take effect at the start of your next billing cycle.",
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer:
                      "We accept all major credit cards (Visa, Mastercard, American Express) as well as PayPal. For Enterprise plans, we also offer invoicing and bank transfers.",
                  },
                  {
                    question: "Is there a discount for annual billing?",
                    answer:
                      "Yes, you can save 20% by choosing annual billing instead of monthly billing on any of our plans.",
                  },
                  {
                    question: "What happens to my data if I cancel?",
                    answer:
                      "Your data remains stored in our system for 30 days after cancellation, giving you time to export it if needed. After 30 days, it will be permanently deleted from our servers.",
                  },
                  {
                    question: "Do you offer discounts for nonprofits or educational institutions?",
                    answer:
                      "Yes, we offer special pricing for qualified nonprofits, educational institutions, and startups. Please contact our sales team for more information.",
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Still Have Questions?</h2>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Our team is here to help you find the perfect plan for your business.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg" variant="secondary">
                    Contact Sales
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    Schedule a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                <BarChart2 className="h-6 w-6" />
                <span>StreamLine</span>
              </Link>
              <p className="text-sm text-muted-foreground">Simplifying data analytics for businesses worldwide.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect</h3>
              <div className="flex space-x-4">
                <Link href="https://twitter.com/streamline" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="https://linkedin.com/company/streamline"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="https://facebook.com/streamline" className="text-muted-foreground hover:text-foreground">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://instagram.com/streamline" className="text-muted-foreground hover:text-foreground">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://github.com/streamline" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} StreamLine, Inc. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Made with <Heart className="inline-block h-4 w-4 text-red-500" /> in San Francisco, CA
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}


import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart2, Check, Code2, Globe, Shield, Star, Users, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-8 md:py-12 lg:py-24 xl:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="inline-flex mb-2">New Features Available</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Transform Your Data Into Actionable Insights
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  StreamLine helps businesses of all sizes visualize, analyze, and leverage their data to make better
                  decisions, faster.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="gap-1.5">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Request Demo
                  </Button>
                </Link>
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
            <div className="relative flex items-center justify-center px-2 sm:px-4">
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl sm:h-[350px] lg:h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="StreamLine Dashboard Preview"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] rounded-lg bg-primary/10 backdrop-blur-sm border border-primary/20 p-3 sm:p-4 shadow-lg">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    <span className="text-xs sm:text-sm font-medium">Real-time data</span>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold">+27%</p>
                  <p className="text-xs text-muted-foreground">Increase in insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="w-full py-12 md:py-16 border-y bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-xl font-medium tracking-tight">Trusted by innovative companies worldwide</h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 grayscale opacity-70">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-center">
                  <Image
                    src={`/placeholder.svg?height=40&width=120&text=LOGO ${i}`}
                    alt={`Company ${i} logo`}
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-10 md:py-16 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
            <div className="space-y-2 max-w-[85vw] sm:max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powerful Features
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground sm:text-lg md:text-xl">
                Everything you need to understand, visualize, and act on your data.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 pt-4 sm:pt-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <BarChart2 className="h-10 w-10 text-primary" />,
                title: "Advanced Analytics",
                description:
                  "Transform complex data into clear, actionable insights with our powerful analytics engine.",
              },
              {
                icon: <Zap className="h-10 w-10 text-primary" />,
                title: "Real-time Dashboards",
                description:
                  "Monitor your key metrics in real-time with customizable dashboards that update automatically.",
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Team Collaboration",
                description: "Share insights and work together seamlessly with built-in collaboration tools.",
              },
              {
                icon: <Globe className="h-10 w-10 text-primary" />,
                title: "Multi-source Integration",
                description: "Connect to all your data sources in one place with our extensive integration library.",
              },
              {
                icon: <Shield className="h-10 w-10 text-primary" />,
                title: "Enterprise Security",
                description:
                  "Rest easy with bank-level security and compliance with major data protection regulations.",
              },
              {
                icon: <Code2 className="h-10 w-10 text-primary" />,
                title: "Developer API",
                description: "Build custom solutions with our comprehensive API and developer tools.",
              },
            ].map((feature, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground mt-2">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How StreamLine Works</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A simple three-step process to transform your data into actionable insights.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {[
              {
                step: "01",
                title: "Connect Your Data",
                description: "Easily connect StreamLine to your existing data sources with our one-click integrations.",
              },
              {
                step: "02",
                title: "Visualize & Analyze",
                description: "Create custom dashboards and reports to visualize your data in meaningful ways.",
              },
              {
                step: "03",
                title: "Take Action",
                description:
                  "Make data-driven decisions with confidence using our actionable insights and recommendations.",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Don't just take our word for it. Here's what our customers have to say about StreamLine.
              </p>
            </div>
          </div>
          <div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "StreamLine has completely transformed how we analyze our customer data. We've seen a 30% increase in conversion rates since implementing their platform.",
                author: "Sarah Johnson",
                role: "Marketing Director, TechCorp",
                rating: 5,
              },
              {
                quote:
                  "The real-time dashboards have been a game-changer for our team. We can now respond to market changes instantly instead of waiting for weekly reports.",
                author: "Michael Chen",
                role: "Data Analyst, GrowthIQ",
                rating: 5,
              },
              {
                quote:
                  "As a small business, we never thought we could afford enterprise-level analytics. StreamLine made it not only affordable but incredibly easy to use.",
                author: "Elena Rodriguez",
                role: "CEO, Boutique Retail",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardHeader>
                  <div className="flex space-x-1 mb-2">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                  </div>
                  <CardDescription className="text-base font-medium text-foreground">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center space-x-4">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full bg-muted">
                      <Image
                        src={`/placeholder.svg?height=40&width=40&text=${testimonial.author.charAt(0)}`}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Choose the plan that's right for your business. All plans include a 14-day free trial.
              </p>
            </div>
          </div>
          <div className="grid gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "$49",
                description: "Perfect for small businesses and startups.",
                features: ["Up to 5 users", "5 data sources", "Basic analytics", "Daily data refresh", "Email support"],
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
                  "Custom dashboards",
                  "API access",
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
                  "Custom integrations",
                  "On-premise deployment option",
                  "SSO & advanced security",
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
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Need a custom plan?{" "}
              <Link href="/contact" className="font-medium text-primary hover:underline">
                Contact our sales team
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Data?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Join thousands of businesses that use StreamLine to make better decisions with their data.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Schedule a Demo
                </Button>
              </Link>
            </div>
            <p className="text-sm">No credit card required. 14-day free trial.</p>
          </div>
        </div>
      </section>
    </>
  )
}


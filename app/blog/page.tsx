import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  BarChart2,
  Calendar,
  Facebook,
  Github,
  Heart,
  Instagram,
  Linkedin,
  Search,
  Twitter,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

// Mock blog post data
const blogPosts = [
  {
    id: 1,
    title: "10 Ways to Leverage Data Analytics for Business Growth",
    excerpt: "Discover how data analytics can drive business growth and help you make better decisions.",
    date: "March 15, 2023",
    author: "Sarah Johnson",
    category: "Data Analytics",
    image: "/placeholder.svg?height=200&width=400&text=Data+Analytics",
    slug: "10-ways-to-leverage-data-analytics",
  },
  {
    id: 2,
    title: "The Future of Business Intelligence: Trends to Watch",
    excerpt: "Stay ahead of the curve with these emerging trends in business intelligence and data visualization.",
    date: "February 28, 2023",
    author: "Michael Chen",
    category: "Business Intelligence",
    image: "/placeholder.svg?height=200&width=400&text=BI+Trends",
    slug: "future-of-business-intelligence",
  },
  {
    id: 3,
    title: "How to Build a Data-Driven Culture in Your Organization",
    excerpt: "Learn the steps to foster a data-driven culture that empowers teams and drives innovation.",
    date: "February 10, 2023",
    author: "Elena Rodriguez",
    category: "Data Culture",
    image: "/placeholder.svg?height=200&width=400&text=Data+Culture",
    slug: "build-data-driven-culture",
  },
  {
    id: 4,
    title: "Real-time Analytics: Why It Matters and How to Implement It",
    excerpt: "Explore the benefits of real-time analytics and learn how to implement it in your business.",
    date: "January 25, 2023",
    author: "David Kim",
    category: "Real-time Analytics",
    image: "/placeholder.svg?height=200&width=400&text=Real-time+Analytics",
    slug: "real-time-analytics-implementation",
  },
  {
    id: 5,
    title: "Data Visualization Best Practices for Clear Communication",
    excerpt: "Master the art of data visualization with these best practices for clear and effective communication.",
    date: "January 12, 2023",
    author: "Priya Patel",
    category: "Data Visualization",
    image: "/placeholder.svg?height=200&width=400&text=Data+Visualization",
    slug: "data-visualization-best-practices",
  },
  {
    id: 6,
    title: "Securing Your Data: Best Practices for Data Protection",
    excerpt: "Learn how to protect your valuable data assets with these security best practices.",
    date: "December 28, 2022",
    author: "James Wilson",
    category: "Data Security",
    image: "/placeholder.svg?height=200&width=400&text=Data+Security",
    slug: "data-protection-best-practices",
  },
]

export default function BlogPage() {
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
            <Link href="/pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link href="/blog" className="text-sm font-medium underline underline-offset-4">
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
                  StreamLine Blog
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Insights, tips, and best practices for data analytics and business intelligence.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search articles..." className="w-full bg-background pl-8" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Post</h2>
                <p className="text-muted-foreground">Our latest and most insightful article.</p>
              </div>
              <Card className="w-full overflow-hidden">
                <div className="md:grid md:grid-cols-2">
                  <div className="relative h-60 w-full md:h-full">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Featured+Post"
                      alt="Featured post"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-6">
                    <div className="space-y-4">
                      <Badge className="w-fit">{blogPosts[0].category}</Badge>
                      <CardTitle className="text-2xl font-bold">{blogPosts[0].title}</CardTitle>
                      <CardDescription className="text-base">{blogPosts[0].excerpt}</CardDescription>
                    </div>
                    <div className="mt-6 flex flex-col space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>{blogPosts[0].author}</span>
                        <Separator orientation="vertical" className="h-4" />
                        <Calendar className="h-4 w-4" />
                        <span>{blogPosts[0].date}</span>
                      </div>
                      <Link href={`/blog/${blogPosts[0].slug}`}>
                        <Button variant="outline" className="w-full sm:w-auto">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Latest Articles</h2>
                <p className="text-muted-foreground">
                  Explore our collection of articles on data analytics and business intelligence.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {blogPosts.slice(1).map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Badge className="w-fit">{post.category}</Badge>
                      </div>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex flex-col items-start space-y-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                        <Separator orientation="vertical" className="h-4" />
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="outline" size="sm">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="mt-8 flex w-full justify-center">
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" disabled>
                    <ArrowRight className="h-4 w-4 rotate-180" />
                    <span className="sr-only">Previous page</span>
                  </Button>
                  <Button variant="outline" size="sm" className="font-medium">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
                    <ArrowRight className="h-4 w-4" />
                    <span className="sr-only">Next page</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Categories</h2>
                <p className="text-muted-foreground">
                  Browse articles by topic to find exactly what you're looking for.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[
                  "Data Analytics",
                  "Business Intelligence",
                  "Data Visualization",
                  "Data Security",
                  "Machine Learning",
                  "Data Culture",
                  "Real-time Analytics",
                  "Data Integration",
                ].map((category, index) => (
                  <Link key={index} href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Card className="h-full transition-colors hover:bg-muted/50">
                      <CardHeader>
                        <CardTitle>{category}</CardTitle>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Updated</h2>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Subscribe to our newsletter to receive the latest insights and articles directly in your inbox.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-lg flex-1 bg-primary-foreground text-foreground"
                  />
                  <Button type="submit" variant="secondary">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs">
                  By subscribing, you agree to our{" "}
                  <Link href="/privacy" className="underline underline-offset-2">
                    Privacy Policy
                  </Link>
                  .
                </p>
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


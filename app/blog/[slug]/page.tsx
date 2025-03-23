import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  ArrowRight,
  BarChart2,
  Calendar,
  Clock,
  Facebook,
  Github,
  Heart,
  Instagram,
  Linkedin,
  Share2,
  Twitter,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

// Mock blog post data
const blogPosts = [
  {
    id: 1,
    title: "10 Ways to Leverage Data Analytics for Business Growth",
    content: `
      <p>In today's data-driven world, businesses that effectively leverage analytics gain a significant competitive advantage. This article explores ten powerful ways to use data analytics to drive business growth and make better decisions.</p>
      
      <h2>1. Understand Your Customers Better</h2>
      <p>Data analytics allows you to gain deeper insights into customer behavior, preferences, and needs. By analyzing customer data from various touchpoints, you can create detailed customer profiles and segments, enabling more personalized marketing and product development.</p>
      
      <h2>2. Optimize Marketing Campaigns</h2>
      <p>With data analytics, you can measure the performance of your marketing campaigns in real-time and make data-driven adjustments. This leads to better ROI on marketing spend and more effective campaigns overall.</p>
      
      <h2>3. Improve Operational Efficiency</h2>
      <p>By analyzing operational data, businesses can identify bottlenecks, inefficiencies, and areas for improvement. This can lead to streamlined processes, reduced costs, and improved productivity.</p>
      
      <h2>4. Enhance Product Development</h2>
      <p>Data analytics can provide valuable insights into how customers use your products, what features they value most, and what improvements they desire. This information is invaluable for product development and innovation.</p>
      
      <h2>5. Predict Future Trends</h2>
      <p>Predictive analytics allows businesses to forecast future trends, customer behavior, and market changes. This foresight enables proactive decision-making and strategic planning.</p>
      
      <h2>6. Reduce Risk</h2>
      <p>Data analytics can help identify potential risks and vulnerabilities in your business operations, allowing you to mitigate them before they become major issues.</p>
      
      <h2>7. Personalize Customer Experiences</h2>
      <p>By analyzing customer data, businesses can create highly personalized experiences across all touchpoints, leading to increased customer satisfaction and loyalty.</p>
      
      <h2>8. Optimize Pricing Strategies</h2>
      <p>Data analytics can help businesses determine optimal pricing strategies based on market demand, competitor pricing, and customer willingness to pay.</p>
      
      <h2>9. Improve Decision-Making</h2>
      <p>With access to accurate, real-time data and insights, business leaders can make more informed decisions quickly, reducing guesswork and increasing confidence.</p>
      
      <h2>10. Drive Innovation</h2>
      <p>Data analytics can uncover new opportunities, market gaps, and innovative ideas that might otherwise remain hidden, fueling business growth and competitive advantage.</p>
      
      <h2>Conclusion</h2>
      <p>Implementing data analytics in your business strategy is no longer optional—it's essential for growth and competitiveness in today's market. By leveraging these ten approaches, businesses of all sizes can harness the power of their data to drive meaningful growth and success.</p>
    `,
    date: "March 15, 2023",
    author: "Sarah Johnson",
    authorTitle: "Data Analytics Director",
    authorBio:
      "Sarah has over 10 years of experience in data analytics and business intelligence. She specializes in helping businesses leverage their data for strategic growth.",
    authorImage: "/placeholder.svg?height=100&width=100&text=SJ",
    category: "Data Analytics",
    image: "/placeholder.svg?height=400&width=800&text=Data+Analytics",
    slug: "10-ways-to-leverage-data-analytics",
    readTime: "8 min read",
  },
]

// Mock related posts
const relatedPosts = [
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
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the post based on the slug
  const post = blogPosts.find((post) => post.slug === params.slug) || blogPosts[0]

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
        {/* Blog Post Header */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Link href="/blog" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Back to Blog
                </Link>
              </div>
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="w-full py-8">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Post Content */}
        <section className="w-full py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div
                className="prose prose-lg max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share Links */}
              <div className="mt-12 flex items-center gap-4">
                <span className="font-medium">Share this article:</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Share on Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Share on Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">Share on LinkedIn</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Copy link</span>
                  </Button>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12">
                <Separator className="my-8" />
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full">
                    <Image
                      src={post.authorImage || "/placeholder.svg"}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{post.author}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{post.authorTitle}</p>
                    <p>{post.authorBio}</p>
                  </div>
                </div>
                <Separator className="my-8" />
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-3xl font-bold tracking-tighter mb-8">Related Articles</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((post) => (
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


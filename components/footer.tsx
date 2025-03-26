import Link from "next/link";
import {
  BarChart2,
  Facebook,
  Github,
  Heart,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Information */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl"
            >
              <BarChart2 className="h-6 w-6" />
              <span>StreamLine</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Simplifying data analytics for businesses worldwide. Our platform
              helps you transform complex data into actionable insights.
            </p>
          </div>

          {/* Main Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Pages</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} StreamLine, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>in India</span>
            <span
              className="inline-block w-5 h-3.5 bg-[#FF9933] relative overflow-hidden border border-gray-200"
              aria-label="Indian flag"
            >
              <span className="absolute inset-0 flex flex-col">
                <span className="flex-1 bg-[#FF9933]"></span>
                <span className="flex-1 bg-white flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#000080]"></span>
                </span>
                <span className="flex-1 bg-[#138808]"></span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

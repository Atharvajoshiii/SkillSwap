"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {Icons }from "@/components/icons";


export function Footer() {
  return (
    <footer className="border-t bg-background py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <Icons.logo className="h-8 w-8 text-primary" />
            <span className="text-sm font-semibold text-muted-foreground">
              © {new Date().getFullYear()} My Company. All rights reserved.
            </span>
          </div>

          {/* Middle Section */}
          <nav className="flex flex-wrap items-center justify-center space-x-4 text-sm">
            <Link href="/about" className={cn("hover:text-primary")}>
              About Us
            </Link>
            <Link href="/services" className={cn("hover:text-primary")}>
              Services
            </Link>
            <Link href="/contact" className={cn("hover:text-primary")}>
              Contact
            </Link>
            <Link href="/privacy" className={cn("hover:text-primary")}>
              Privacy Policy
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("hover:text-primary")}
            >
              <Icons.twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("hover:text-primary")}
            >
              <Icons.facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("hover:text-primary")}
            >
              <Icons.github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

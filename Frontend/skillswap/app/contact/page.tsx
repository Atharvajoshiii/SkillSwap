// app/contact/page.js (or pages/contact.js if not using the app directory)

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { FloatingNavDemo } from "@/components/NavbarDemo";
import { Footer } from "@/components/Footer";

export default function Contact() {
  return (
    <div className="relative min-h-screen">
      {/* Sticky Navbar */}
      <div className="sticky top-0 bg-white z-50 shadow-md">
        <FloatingNavDemo />
      </div>

      {/* Contact Form Section */}
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-4">Contact SkillSwap</h1>
          <p className="text-center text-gray-600 mb-6">
            Have a question or need help? Reach out to the SkillSwap team—we're here to assist you with your skill-sharing journey!
          </p>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Input id="name" type="text" placeholder="Enter your name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <Input id="subject" type="text" placeholder="Enter your subject" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                className="resize-none"
              />
            </div>
            <Button type="submit" className="w-full">
              Send Your Message
            </Button>
          </form>
        </div>
      </div>

      {/* Beta Access Section */}
      <div className="bg-black text-white py-8 px-6 rounded-lg shadow-md mx-4 mt-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Join SkillSwap Beta</h2>
          <p className="text-lg mb-6">
            Be among the first to experience the power of skill-sharing and collaboration on SkillSwap.
          </p>
          <div className="flex justify-center space-x-4 mb-6">
            <span className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>Instant Access</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>Connect Globally</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>Expand Your Skills</span>
            </span>
          </div>
          <Button size="lg" className="bg-white text-black px-6 py-2 rounded-lg shadow">
            Notify Me
          </Button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

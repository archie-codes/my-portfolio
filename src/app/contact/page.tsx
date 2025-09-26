"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Mail, Github, Facebook } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Message sent! (Demo only)");
    }, 1500);
  };

  return (
    <section className="py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight  mb-2">Get In Touch</h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          Interested in working together or just want to say hi? Fill out the form below or reach me
          through my socials.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto ">
        {/* Contact Form */}
        <Card className="backdrop-blur-md bg-white/5 border border-white/10 text-gray-300">
          <CardHeader>
            <CardTitle>Send me a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Textarea placeholder="Your Message" rows={5} required />
              <Button type="submit" className="w-full" disabled={loading} variant="secondary">
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Other Ways to Connect */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Other ways to reach me</h2>
            <p className="text-gray-300">
              Prefer email or social media? Feel free to connect with me directly.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Link
              href="mailto:bauzonarchie@gmail.com"
              className="flex items-center gap-3 text-blue-600 hover:underline"
            >
              <Mail className="w-5 h-5" /> bauzonarchie@gmail.com
            </Link>
            <Link
              href="https://github.com/archie-codes"
              target="_blank"
              className="flex items-center gap-3 text-blue-600 hover:underline"
            >
              <Github className="w-5 h-5" /> github.com/archie-codes
            </Link>
            <Link
              href="https://www.facebook.com/archie.bauzon"
              target="_blank"
              className="flex items-center gap-3 text-blue-600 hover:underline"
            >
              <Facebook className="w-5 h-5" /> facebook.com/archie.bauzon
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

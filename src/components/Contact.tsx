"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Mail, Github, Facebook, Send } from "lucide-react";

export function Contact({ id }: { id?: string }) {
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
    <section id={id} className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Interested in working together or just want to say hi? Fill out the
            form below or reach me through my socials.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          {/* Contact Information Side */}
          <div className="space-y-8">
            <div className="grid gap-6">
              <Card className="border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <Link
                      href="mailto:bauzonarchie@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      bauzonarchie@gmail.com
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Github size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">GitHub</h3>
                    <Link
                      href="https://github.com/archie-codes"
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      github.com/archie-codes
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Facebook size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Facebook</h3>
                    <Link
                      href="https://www.facebook.com/archie.bauzon"
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      facebook.com/archie.bauzon
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form Side */}
          <Card className="border-border bg-card shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-foreground">
                Send me a message
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                I usually respond within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="bg-background resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11"
                  disabled={loading}
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

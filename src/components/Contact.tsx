"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Mail, Facebook, Send, Phone } from "lucide-react";
import { toast } from "sonner";

export function Contact({ id }: { id?: string }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    setLoading(true);

    // 1. Save the form reference IMMEDIATELY before doing anything else
    const form = event.currentTarget;

    const formData = new FormData(form);
    formData.append("access_key", "a871e90a-6805-4d45-a96a-627eda2104dd");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        toast.success("Message sent!", { position: "top-right" });

        // 2. Use the saved reference to reset the form
        form.reset();
      } else {
        console.error("Web3Forms API Error:", data);
        setResult("Error");
        toast.error(data.message || "Error! Message not sent.", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setResult("Error");
      toast.error("Network error.", { position: "top-right" });
    } finally {
      setLoading(false);
    }
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
              <Card className="shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-green-500/10 via-card to-emerald-500/10 border-green-500/20 hover:border-green-500/50 hover:shadow-green-500/10">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="p-3 bg-green-500/10 rounded-xl text-green-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <Link
                      href="tel:+639077284845"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +63 907 728 4845
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-rose-500/10 via-card to-red-500/10 border-rose-500/20 hover:border-rose-500/50 hover:shadow-rose-500/10">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="p-3 bg-rose-500/10 rounded-xl text-rose-500">
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

              <Card className="shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-blue-500/10 via-card to-indigo-500/10 border-blue-500/20 hover:border-blue-500/50 hover:shadow-blue-500/10">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
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
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-card to-background shadow-lg shadow-primary/5">
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
                    name="name"
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
                    name="email"
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
                    name="message"
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

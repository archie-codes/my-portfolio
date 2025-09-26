import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { link } from "fs";

const posts = [
  {
    title: "Archie TV Channel",
    description: "I love playing MLBB. I have some recorded video's while playing this awesome game.",
    image: "/pictures/blog-pictures/picture-1.jpg",
    // tags: ["Next.js", "Frontend"],
    link: "https://www.youtube.com/@archie-tv",
  },
  {
    title: "CreekBoys Page",
    description: "I made this fan page to post inspiration quotes but sometimes, I'm posting some joke quotes.",
    image: "/pictures/blog-pictures/picture-2.jpg",
    // tags: ["Tailwind", "Design"],
    link: "https://www.facebook.com/creekboysvlog",
  },
];

export default function BlogPage() {
  return (
    <section className="py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-3">
          Blog
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
        Aside from coding, I also share my passion for gaming and sharing inspirational quotes on my youtube gaming content and facebook page.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-xl hover:-translate-y-1 transition border  border-white/10 bg-white/5 backdrop-blur-md" 
          >
            {/* Cover Image */}
            <div className="relative w-full h-44">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <CardHeader>
              <CardTitle className="text-lg text-gray-300 font-semibold tracking-tight">
                {post.title}
              </CardTitle>
              {/* <CardDescription className="text-gray-400 text-sm">
                {post.date}
              </CardDescription> */}
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {post.description}
              </p>
              {/* <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div> */}
            </CardContent>

            {/* Footer */}
            <CardFooter>
              <Button asChild variant="outline" size="sm">
                <Link href={post.link}>Visit Page →</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="hover:shadow-lg transition-transform hover:-translate-y-1">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}

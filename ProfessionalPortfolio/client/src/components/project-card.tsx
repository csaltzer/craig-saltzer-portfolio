import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, LucideIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  link: string;
  period: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  icon: Icon,
  tags,
  link,
  period,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden group">
        <div className="relative p-6 flex justify-center items-center bg-muted/50">
          <Icon className="w-12 h-12 text-primary/80" />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 right-2 p-2 bg-background/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{period}</p>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const posts = [
  {
    title: "Neues Projekt: Dachgeschossausbau abgeschlossen",
    date: "15. Februar 2026",
    category: "Projekte",
    excerpt: "Unser neuestes Projekt – ein komplett ausgebautes Dachgeschoss in Gera-Untermhaus – wurde termingerecht fertiggestellt.",
  },
  {
    title: "Tipps zur Fußbodenpflege",
    date: "1. Februar 2026",
    category: "Ratgeber",
    excerpt: "So bleibt Ihr neuer Boden lange schön: Die besten Pflegetipps für Parkett, Laminat und Vinyl.",
  },
  {
    title: "Trend 2026: Naturtöne im Innenausbau",
    date: "20. Januar 2026",
    category: "Trends",
    excerpt: "Erdtöne, Holzoptik und natürliche Materialien liegen im Trend. Erfahren Sie, wie Sie diese Stile umsetzen können.",
  },
];

const Blog = () => {
  return (
    <>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container">
          <h1 className="font-display text-5xl sm:text-6xl">Blog & Neuigkeiten</h1>
          <p className="mt-4 max-w-xl text-primary-foreground/70">
            Aktuelles aus der Welt des Innenausbaus.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-4xl space-y-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="border-none shadow-md transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-3 text-sm text-muted-foreground">
                    <Badge className="bg-accent/10 text-accent hover:bg-accent/20">{post.category}</Badge>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl">{post.title}</h2>
                  <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;

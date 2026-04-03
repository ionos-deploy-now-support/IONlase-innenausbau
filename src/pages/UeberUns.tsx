import { motion } from "framer-motion";
import { Award, Users, Heart, Target } from "lucide-react";

const values = [
{ icon: Award, title: "Qualität", desc: "Jedes Detail zählt – wir arbeiten sorgfältig und mit hochwertigen Materialien." },
{ icon: Users, title: "Kundennähe", desc: "Persönliche Beratung und individuelle Lösungen für jeden Kunden." },
{ icon: Heart, title: "Leidenschaft", desc: "Handwerk mit Herzblut – wir lieben, was wir tun." },
{ icon: Target, title: "Zuverlässigkeit", desc: "Termine und Absprachen werden eingehalten – garantiert." }];


const UeberUns = () => {
  return (
    <>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container">
          <h1 className="font-display text-5xl sm:text-6xl">Über uns</h1>
          <p className="mt-4 max-w-xl text-primary-foreground/70">
            Lernen Sie den Menschen hinter LA.SE Innenausbau kennen.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center">
            
            <h2 className="font-display text-4xl">Lars Seidler</h2>
            <p className="mt-1 text-accent font-medium">Inhaber </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Als gelernter Fußbodenleger und erfahrener Allrounder im Innenausbau stehe ich für echtes Handwerk mit Leidenschaft. Mit LA.SE Innenausbau habe ich mir den Traum erfüllt, Qualität, Präzision und Vielseitigkeit unter einem Dach zu vereinen.

Ob Boden, Wand oder Decke – ich begleite jedes Projekt von der ersten Idee bis zur fertigen Umsetzung. Durch meine langjährige Erfahrung im Handwerk weiß ich, worauf es ankommt: saubere Arbeit, ehrliche Beratung und Liebe zum Detail.

Mein Anspruch ist klar: Jedes Zuhause, an dem ich arbeite, soll so perfekt werden, als wäre es mein eigenes.



            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center">
                
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>);

};

export default UeberUns;
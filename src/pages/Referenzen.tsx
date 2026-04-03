import { motion } from "framer-motion";
import { Construction, HardHat, Clock } from "lucide-react";

const Referenzen = () => {
  return (
    <>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container">
          <h1 className="font-display text-5xl sm:text-6xl">Unsere Referenzen</h1>
          <p className="mt-4 max-w-xl text-primary-foreground/70">
            Einblicke in unsere abgeschlossenen Projekte – Qualität, die überzeugt.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
              <Construction className="h-10 w-10 text-accent" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl">
              Seite im Aufbau
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Wir arbeiten aktuell daran, unsere Referenzen hier für Sie zusammenzustellen.
              Schrittweise werden Projektbilder, Beschreibungen und Details ergänzt.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-12 grid max-w-xl gap-6 sm:grid-cols-2"
          >
            <div className="flex items-start gap-4 rounded-xl border border-accent/20 bg-accent/5 p-5">
              <HardHat className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
              <div>
                <h3 className="font-display text-lg">Projekte werden ergänzt</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Neue Referenzen werden laufend hinzugefügt, sobald Projekte abgeschlossen sind.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-accent/20 bg-accent/5 p-5">
              <Clock className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
              <div>
                <h3 className="font-display text-lg">Demnächst verfügbar</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Schauen Sie bald wieder vorbei – es lohnt sich!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Referenzen;

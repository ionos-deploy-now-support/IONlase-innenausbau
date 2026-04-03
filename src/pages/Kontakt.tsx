import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const leistungsOptionen = [
  "Fußbodenverlegung",
  "Decken abhängen",
  "Trockenbau",
  "Sonstiges / Andere Leistung",
];

const Kontakt = () => {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      toast.error("Bitte wählen Sie mindestens eine Leistung aus.");
      return;
    }
    setSending(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.get("name") as string,
          email: formData.get("email") as string,
          phone: formData.get("phone") as string,
          services: selectedServices,
          ort: formData.get("ort") as string,
          flaeche: formData.get("flaeche") as string,
          zeitraum: formData.get("zeitraum") as string,
          message: formData.get("message") as string,
        },
      });
      if (error) throw error;
      setSent(true);
    } catch (err) {
      console.error(err);
      toast.error("Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container">
          <h1 className="font-display text-5xl sm:text-6xl">Anfrage stellen</h1>
          <p className="mt-4 max-w-xl text-primary-foreground/70">
            Beschreiben Sie Ihr Vorhaben – wir prüfen, ob eine Umsetzung durch unser Unternehmen möglich ist und melden uns zeitnah bei Ihnen.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {sent ? (
                <div className="flex flex-col items-center justify-center rounded-xl bg-secondary p-12 text-center">
                  <CheckCircle className="mb-4 h-12 w-12 text-accent" />
                  <h2 className="font-display text-3xl">Vielen Dank!</h2>
                  <p className="mt-2 text-muted-foreground">
                    Ihre Anfrage wurde gesendet. Wir prüfen Ihr Vorhaben und melden uns in Kürze bei Ihnen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" required placeholder="Ihr Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input id="phone" type="tel" placeholder="Ihre Telefonnummer" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input id="email" type="email" required placeholder="ihre@email.de" />
                  </div>

                  {/* Service selection */}
                  <div className="space-y-2">
                    <Label>Gewünschte Leistung(en) *</Label>
                    <div className="flex flex-wrap gap-2">
                      {leistungsOptionen.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleService(opt)}
                          className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                            selectedServices.includes(opt)
                              ? "border-accent bg-accent text-accent-foreground"
                              : "border-border bg-secondary text-foreground hover:border-accent/50"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="ort">Ort / Stadtteil</Label>
                      <Input id="ort" placeholder="z.B. Gera-Untermhaus" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="flaeche">Ungefähre Fläche (m²)</Label>
                      <Input id="flaeche" type="text" placeholder="z.B. 50" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="zeitraum">Gewünschter Zeitraum</Label>
                    <Input id="zeitraum" placeholder="z.B. ab März 2026, flexibel" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Projektbeschreibung *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Beschreiben Sie Ihr Vorhaben möglichst genau: Was soll gemacht werden? Gibt es Besonderheiten?"
                    />
                  </div>

                  <p className="text-xs text-muted-foreground">
                    * Pflichtfelder. Ihre Anfrage ist unverbindlich. Wir prüfen, ob eine Umsetzung durch unser Unternehmen möglich ist.
                  </p>

                  <Button type="submit" disabled={sending} className="bg-accent text-accent-foreground hover:bg-accent/90">
                    {sending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                    {sending ? "Wird gesendet…" : "Anfrage absenden"}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="border-none bg-secondary">
                <CardContent className="p-6 space-y-4">
                  <h2 className="font-display text-2xl">Kontaktdaten</h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-accent" />
                      <span>Cubaer Straße 7, 07548 Gera</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-accent" />
                      <a href="tel:+491749801534" className="hover:text-accent">0174-9801534</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-accent" />
                      <a href="mailto:lase.innenausbau@gmail.com" className="hover:text-accent">lase.innenausbau@gmail.com</a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none bg-secondary">
                <CardContent className="p-6 space-y-3">
                  <h2 className="font-display text-2xl">So geht's weiter</h2>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Sie senden uns Ihre Anfrage über das Formular.</li>
                    <li>Wir prüfen Ihr Vorhaben und melden uns bei Ihnen.</li>
                    <li>Bei Interesse vereinbaren wir einen Vor-Ort-Termin.</li>
                    <li>Sie erhalten ein unverbindliches Angebot.</li>
                  </ol>
                </CardContent>
              </Card>

              {/* Google Maps Embed */}
              <div className="overflow-hidden rounded-xl">
                <iframe
                  title="Standort LA.SE Innenausbau Gera"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.5!2d12.0797!3d50.8797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a3b3c0a0a0a0a0%3A0x0!2sCubaer+Stra%C3%9Fe+7%2C+07548+Gera!5e0!3m2!1sde!2sde!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kontakt;

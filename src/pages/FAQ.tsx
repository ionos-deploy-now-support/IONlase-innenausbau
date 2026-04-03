import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Welche Leistungen bieten Sie an?",
    a: "Unsere Kernleistungen in Gera umfassen Fußbodenverlegung, Decken abhängen, Trockenbau sowie den Einbau von Innentüren und Fenstern. Darüber hinaus prüfen wir gerne, ob wir auch weitere Innenausbau-Projekte für Sie umsetzen können – fragen Sie uns einfach an.",
  },
  {
    q: "In welchem Gebiet sind Sie tätig?",
    a: "Unser Hauptgebiet ist Gera und Umgebung in Thüringen – dazu zählen auch Greiz, Zeulenroda, Altenburg und die gesamte Region Ostthüringen. Je nach Projektgröße sind wir auch überregional verfügbar.",
  },
  {
    q: "Wie läuft eine Zusammenarbeit ab?",
    a: "Nach Ihrer Kontaktaufnahme vereinbaren wir einen Vor-Ort-Termin in Gera oder Umgebung, erstellen ein unverbindliches Angebot und starten nach Auftragserteilung zeitnah mit der Ausführung.",
  },
  {
    q: "Erstellen Sie kostenlose Kostenvoranschläge?",
    a: "Ja, wir erstellen Ihnen gerne einen unverbindlichen Kostenvoranschlag nach einer Besichtigung vor Ort in Gera und Umgebung.",
  },
  {
    q: "Wie lange dauert ein typisches Projekt?",
    a: "Die Dauer hängt vom Umfang ab. Ein einzelnes Zimmer ist oft in 1-3 Tagen fertig, größere Projekte in Gera besprechen wir im Detail beim Vor-Ort-Termin.",
  },
  {
    q: "Arbeiten Sie auch am Wochenende?",
    a: "In Ausnahmefällen und nach Absprache sind auch Wochenendarbeiten in Gera und Umgebung möglich. Sprechen Sie uns einfach an.",
  },
  {
    q: "Welche Materialien verwenden Sie?",
    a: "Wir verwenden ausschließlich hochwertige Markenprodukte. Gerne beraten wir Sie bei der Materialauswahl passend zu Ihrem Budget und Stil.",
  },
  {
    q: "Kann ich auch Leistungen anfragen, die nicht auf der Website stehen?",
    a: "Selbstverständlich! Senden Sie uns einfach Ihre Anfrage über das Kontaktformular. Wir prüfen, ob eine Umsetzung durch unser Unternehmen in Gera möglich ist und melden uns bei Ihnen.",
  },
];

const FAQ = () => {
  return (
    <>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container">
          <h1 className="font-display text-5xl sm:text-6xl">Häufige Fragen</h1>
          <p className="mt-4 max-w-xl text-primary-foreground/70">
            Antworten auf die wichtigsten Fragen rund um unsere Leistungen.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border bg-card px-6">
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default FAQ;

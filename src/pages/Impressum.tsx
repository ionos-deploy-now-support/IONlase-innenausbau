const Impressum = () => {
  return (
    <>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container">
          <h1 className="font-display text-5xl">Impressum</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-3xl prose prose-neutral">
          <h2 className="font-display text-2xl">Angaben gemäß § 5 TMG</h2>
          <p>
            Lars Seidler<br />
            LA.SE Innenausbau<br />
            Cubaer Straße 7<br />
            07548 Gera
          </p>

          <h2 className="font-display text-2xl mt-8">Kontakt</h2>
          <p>
            Telefon: 0174-9801534<br />
            E-Mail: lase.innenausbau@gmail.com
          </p>

          <h2 className="font-display text-2xl mt-8">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            [wird nachgetragen]
          </p>

          <h2 className="font-display text-2xl mt-8">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Lars Seidler<br />
            Cubaer Straße 7<br />
            07548 Gera
          </p>

          <h2 className="font-display text-2xl mt-8">Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2 className="font-display text-2xl mt-8">Haftung für Inhalte</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <h2 className="font-display text-2xl mt-8">Haftung für Links</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h2 className="font-display text-2xl mt-8">Urheberrecht</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </section>
    </>
  );
};

export default Impressum;

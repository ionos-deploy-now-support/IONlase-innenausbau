const Datenschutz = () => {
  return (
    <>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container">
          <h1 className="font-display text-5xl">Datenschutzerklärung</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-3xl prose prose-neutral">
          <h2 className="font-display text-2xl">1. Datenschutz auf einen Blick</h2>
          <h3 className="font-display text-xl mt-4">Allgemeine Hinweise</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>

          <h2 className="font-display text-2xl mt-8">2. Verantwortliche Stelle</h2>
          <p className="text-sm">
            Lars Seidler<br />
            LA.SE Innenausbau<br />
            Cubaer Straße 7<br />
            07548 Gera<br />
            Telefon: 0174-9801534<br />
            E-Mail: lase.innenausbau@gmail.com
          </p>

          <h2 className="font-display text-2xl mt-8">3. Datenerfassung auf dieser Website</h2>
          <h3 className="font-display text-xl mt-4">Cookies</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die Ihr Webbrowser
            auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher zu gestalten.
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
            einzeln über deren Annahme entscheiden können.
          </p>

          <h3 className="font-display text-xl mt-4">Kontaktformular</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
            und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
            Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
          </p>

          <h2 className="font-display text-2xl mt-8">4. Hosting</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden,
            werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
            Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe
            und sonstige Daten, die über eine Website generiert werden, handeln.
          </p>

          <h2 className="font-display text-2xl mt-8">5. Ihre Rechte</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
            gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
            Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
            können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Hierzu sowie zu weiteren Fragen zum
            Thema Datenschutz können Sie sich jederzeit an uns wenden.
          </p>

          <h2 className="font-display text-2xl mt-8">6. Google Maps</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Diese Seite nutzt über eine Einbettung den Kartendienst Google Maps. Anbieter ist die Google Ireland
            Limited, Gordon House, Barrow Street, Dublin 4, Irland. Beim Laden der Karte werden Daten an Google
            übermittelt. Mehr Informationen finden Sie in der Datenschutzerklärung von Google:{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              https://policies.google.com/privacy
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Datenschutz;

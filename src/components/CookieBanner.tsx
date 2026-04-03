import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card p-4 shadow-lg">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          Diese Website verwendet Cookies, um Ihnen die bestmögliche Nutzung zu ermöglichen.{" "}
          <Link to="/datenschutz" className="text-accent underline">Mehr erfahren</Link>
        </p>
        <Button onClick={accept} className="bg-accent text-accent-foreground hover:bg-accent/90 shrink-0">
          Akzeptieren
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;

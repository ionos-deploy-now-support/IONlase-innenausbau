import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Construction } from "lucide-react";

const Admin = () => {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-secondary py-20">
      <Card className="w-full max-w-md border-none shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
            <Lock className="h-8 w-8" />
          </div>
          <CardTitle className="font-display text-3xl">Admin Panel</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="admin-email">E-Mail</Label>
            <Input id="admin-email" type="email" placeholder="admin@lase-innenausbau.de" disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="admin-password">Passwort</Label>
            <Input id="admin-password" type="password" placeholder="••••••••" disabled />
          </div>
          <Button className="w-full bg-accent text-accent-foreground" disabled>
            Anmelden
          </Button>

          <div className="mt-6 rounded-lg bg-accent/5 border border-accent/20 p-4 text-center">
            <Construction className="mx-auto mb-2 h-6 w-6 text-accent" />
            <p className="text-sm font-medium">Coming Soon</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Das Admin Panel für die Verwaltung Ihrer Referenzen wird in Kürze verfügbar sein.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Admin;

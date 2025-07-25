// src/components/layout/SiteFooter.tsx
import Link from 'next/link';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const version = "0.9.9.5"; // Download-Zähler + Copyright-Informationen

  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm leading-loose text-muted-foreground">
            © 2025{currentYear > 2025 ? `-${currentYear}` : ''} Marcel Bünger für den KSV Einbeck. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs">
            <Link href="/impressum" className="text-muted-foreground hover:text-primary underline">
              Impressum
            </Link>
            <Link href="/nutzungsbedingungen" className="text-muted-foreground hover:text-primary underline">
              Nutzungsbedingungen
            </Link>
            <Link href="/copyright" className="text-muted-foreground hover:text-primary underline">
              Copyright
            </Link>
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-right">
          Version {version} <span className="text-xs bg-primary/10 text-primary px-1 py-0.5 rounded">Beta</span>
        </p>
      </div>
    </footer>
  );
}
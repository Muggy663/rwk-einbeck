import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Smartphone, Shield, Zap, Wifi } from 'lucide-react';

export default function AppPage() {
  return (
    <div className="container py-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">📱 RWK Einbeck App</h1>
        <p className="text-muted-foreground text-lg">
          Die offizielle Android-App für Rundenwettkämpfe
        </p>
      </div>

      {/* Download Card */}
      <Card className="mb-8 border-blue-200 bg-gradient-to-r from-blue-50 to-green-50">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl text-blue-900">
            <Smartphone className="h-6 w-6" />
            RWK Einbeck v0.9.9.4
          </CardTitle>
          <CardDescription className="text-blue-700">
            Kostenlose Android-App • Keine Werbung • Offline-fähig
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="mb-6">
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
              <a href="/documents/RWK-Einbeck-v0.9.9.4.apk" download>
                <Download className="h-5 w-5 mr-2" />
                APK herunterladen (6.1 MB)
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Android 5.0+ • Unterstützt 95% aller Geräte
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Installation Guide */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📋 Installation in 3 Schritten
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">APK herunterladen</h3>
              <p className="text-sm text-muted-foreground">
                Mit Chrome-Browser auf Android-Handy herunterladen
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-amber-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">Installation erlauben</h3>
              <p className="text-sm text-muted-foreground">
                Bei "Unbekannte App" → <strong>"Trotzdem installieren"</strong>
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-green-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">App starten</h3>
              <p className="text-sm text-muted-foreground">
                RWK-Icon antippen → Fertig! 🎉
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>❓ Häufige Fragen</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <details className="border rounded-lg p-4">
            <summary className="cursor-pointer font-medium">
              Warum "Unbekannte Quelle" oder "Unbekannte App"?
            </summary>
            <div className="mt-3 text-sm text-muted-foreground">
              <p>Das ist normal bei allen Apps außerhalb des Play Stores - auch bei bekannten Apps wie Chrome oder WhatsApp APKs.</p>
              <p className="mt-2"><strong>Die RWK App ist sicher:</strong></p>
              <ul className="list-disc ml-4 mt-1">
                <li>Offiziell vom RWK Einbeck</li>
                <li>Keine Schadsoftware</li>
                <li>Meldung erscheint nur einmal</li>
              </ul>
            </div>
          </details>

          <details className="border rounded-lg p-4">
            <summary className="cursor-pointer font-medium">
              Wie aktualisiere ich die App?
            </summary>
            <div className="mt-3 text-sm text-muted-foreground">
              <p><strong>Automatisch:</strong> 90% der Updates (neue Dokumente, Ergebnisse) sind sofort verfügbar.</p>
              <p><strong>Manuell:</strong> Bei neuen Features neue APK herunterladen und installieren.</p>
            </div>
          </details>

          <details className="border rounded-lg p-4">
            <summary className="cursor-pointer font-medium">
              Funktioniert die App offline?
            </summary>
            <div className="mt-3 text-sm text-muted-foreground">
              <p>Teilweise - bereits geladene Inhalte sind offline verfügbar. Für neue Daten wird Internet benötigt.</p>
            </div>
          </details>
        </CardContent>
      </Card>

      {/* iOS Explanation */}
      <Card className="mb-8 border-orange-200 bg-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-900">
            🍎 Warum keine iPhone-App?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-orange-800">
            <p>
              Eine native iPhone-App würde <strong>laufende Kosten</strong> verursachen, die für eine kostenlose Rundenwettkampf-App unwirtschaftlich sind:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Apple Developer Account:</strong> €90 pro Jahr (Pflicht für Installation auf fremden Geräten)</li>
              <li><strong>App Store Review:</strong> Komplizierter Genehmigungsprozess</li>
              <li><strong>Wartungsaufwand:</strong> Separate iOS-Entwicklung und Updates</li>
            </ul>
            <div className="bg-white rounded-lg p-4 mt-4">
              <h4 className="font-semibold text-orange-900 mb-2">📱 iPhone-Nutzer können trotzdem:</h4>
              <ul className="text-sm space-y-1">
                <li>✅ <strong>Web-App nutzen:</strong> Alle Funktionen im Safari-Browser</li>
                <li>✅ <strong>PWA installieren:</strong> "Zum Home-Bildschirm" hinzufügen</li>
                <li>✅ <strong>Vollständiger Zugriff:</strong> Dokumente, Ergebnisse, Tabellen</li>
              </ul>
            </div>
            <p className="text-sm">
              <strong>Fazit:</strong> Die Web-App funktioniert auf iPhone genauso gut - ohne zusätzliche Kosten für den RWK-Leiter.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle>✨ App-Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-blue-500" />
              <span>Schneller als Browser</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-green-500" />
              <span>Sicher & werbefrei</span>
            </div>
            <div className="flex items-center gap-3">
              <Wifi className="h-5 w-5 text-purple-500" />
              <span>Teilweise offline-fähig</span>
            </div>
            <div className="flex items-center gap-3">
              <Smartphone className="h-5 w-5 text-orange-500" />
              <span>Native Android-App</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
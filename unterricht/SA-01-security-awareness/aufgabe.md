# Aufgabe — SA-01: Fünf Hacks, ein Muster

**Mitarbeit:** Die drei Beispiele sind Teil deiner Mitarbeitsnote. Die
Reihenfolge ist aufsteigend: Beispiel 1 ist Kernübung, Beispiel 2 ein
Selbsttest, Beispiel 3 Transfer auf eine neue Situation. Abgabe nach
Vorgabe deiner Lehrperson.

---

## Beispiel 1: Kernübung — eine CDN-Einbindung härten

Gegeben ist diese (bewusst verwundbare) Seite:

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <title>Werkzeugkasten</title>
</head>
<body>
  <h1>Werkzeugkasten</h1>
  <!-- lädt den neuesten Stand von einem fremden Host -->
  <script src="https://cdn.example.com/werkzeug/latest.js"></script>
</body>
</html>
```

**1a)** Erkläre in zwei Sätzen, warum diese Zeile dieselbe Schwachstelle
reproduziert, die Polymarket zum Verhängnis wurde. Nenne dabei das Wort,
das der Video-Autor dafür benutzt.

**1b)** Erstelle lokal eine Datei `werkzeug.js` mit genau diesem Inhalt:

```js
console.log("werkzeug 1.0.0 geladen");
```

Berechne den SRI-Hash und notiere ihn:

```sh
openssl dgst -sha384 -binary werkzeug.js | openssl base64 -A
```

**1c)** Ändere die Seite so, dass sie gehärtet ist: exakte Version im Pfad
(`werkzeug-1.0.0.js`), `integrity`-Attribut mit deinem Hash aus 1b),
`crossorigin="anonymous"`.

**1d)** Ändere danach in `werkzeug.js` ein einziges Zeichen (z. B. den
Punkt) und lade die Seite. Beschreibe, was der Browser macht, und notiere
die Meldung aus der Konsole, die den Block begründet.

**1e)** Deno-Anteil: Schreibe ein Skript `lesen.ts`, das

```ts
const text = await Deno.readTextFile("lesen.ts");
console.log(text.length, "Zeichen gelesen");
```

enthält. Führe es dreimal aus — ohne Flag, mit `--allow-read`, mit
`--allow-all` — und notiere für jeden Lauf die Ausgabe bzw. Fehlermeldung.
Erkläre in einem Satz, warum `--allow-all` die protective Grenze aufhebt.

**Erwartet:** Code (gehärtete Seite), der Hash-Wert, die beobachtete
Browser-/Terminalausgabe und je Teilaufgabe ein Satz Begründung.

---

## Beispiel 2: Selbsttest im Wissensüberprüfungs-Format

**Anleitung:** Zu jeder Aussage: zutreffend ankreuzen oder leer lassen.
**0 bis 4 Aussagen können richtig sein.** Falsch angekreuzte kosten Punkte,
korrekt leere bringen Punkte. Die Musterlösung steht am Ende — zuerst
selbst lösen.

Aussagen zur Lektion:

1. ☐ SRI verhindert, dass eine nachgeladene Datei mit geänderten Bytes
   ausgeführt wird.
2. ☐ SRI schützt auch die HTML-Seite selbst vor Manipulation.
3. ☐ Ein Hash ist eine Verschlüsselung, die man zurückrechnen kann.
4. ☐ `curl -fsSL URL | bash` führt fremden Text ohne Prüfschritt als Code aus.
5. ☐ HTTPS hätte den Polymarket-Angriff verhindert, weil die Verbindung
   verschlüsselt war.
6. ☐ Ein Deployment-Token ist eine Fähigkeit, meist ohne zweiten Faktor.
7. ☐ Ein 4-Augen-Prinzip bei großen Beträgen wäre bei Binance laut Video
   Bürokratie gewesen, die nichts gebracht hätte.
8. ☐ Hardware-Wallets machen den Lieferweg zum Kunden trustworthy.

**Musterlösung (zum Abgleich, nicht zum Abtippen):**

- **1 ✓** — der Browser vergleicht den Hash der ankommenden Bytes mit dem
  Attribut und blockt bei Abweichung (Fehlermeldung „valid digest").
- **2 ✗** — SRI prüft nur die nachgeladene Ressource; ändert der Angreifer
  die Seite selbst (inkl. neuem Hash), greift der Schutz nicht.
- **3 ✗** — ein Hash ist ein einseitiger Fingerabdruck; aus ihm lässt sich
  der Inhalt nicht zurückrechnen.
- **4 ✓** — curl gibt den Text aus, die Pipe verbindet ihn mit bash, und
  die Shell führt ihn mit deinen Rechten aus; kein Prüfschritt im Muster.
- **5 ✗** — HTTPS schützt den Transport, nicht die Herkunft; die TLS-Kette
  war intakt, der Inhalt kam trotzdem vom Angreifer.
- **6 ✓** — der Token berechtigt zur Aktion (Container-Deploy), typischerweise
  ohne zweite Freigabe; auf A's Rechner lag er bereit.
- **7 ✗** — umgekehrt: genau diese Kontrolle fehlte laut Video (der
  „Todd aus der Buchhaltung"-Gag) und hätte Schritt 5 gebrochen.
- **8 ✗** — die Manipulation saß auf dem Versandweg; die Grenze lag im
  Paket, nicht im Chip. Direkt beim Hersteller kaufen, selbst initialisieren.

---

## Beispiel 3: Transfer — eine neue Angriffskette rekonstruieren

Lies den fiktiven Vorfall:

> Eine Firma für Lagerlogistik nutzt eine Open-Source-Bibliothek „packline"
> zur Routenplanung. Eine Mitarbeiterin sucht im Web nach „packline
> documentation" und klickt auf die erste Anzeige; die Seite sieht der
> offiziellen täuschend ähnlich und bietet ein „Setup-Tool" an, das sie auf
> ihrem Arbeitslaptop ausführt. Das Tool liest `~/.config/packline/token`
> — ein CI-Deploy-Token mit Schreibrecht auf das Produktions-Repository —
> und lädt ihn zu einem externen Server. Drei Tage später erscheint im
> Produktions-Repository ein Commit, der eine kleine Bibliothek nachlädt;
> sie läuft in allen Lager-Containern und schickt Bestelldaten an eine
> fremde Adresse. Es gibt keine Regel, dass Deploy-Commits von einer zweiten
> Person freigegeben werden.

**3a)** Trage die Kette in eine Tabelle ein (Zeilen: Schritt 1 bis 5):
Was passierte, und welche Kontrolle fehlte an dieser Stelle? Orientiere
dich am Muster der Lektion (Tabelle „vom Laptop zu sechs Milliarden").

**3b)** Benenne für **jeden** der fünf Schritte die fehlende Kontrolle in
einem Satz — verwende dabei die Begriffe aus der Gegenmaßnahmen-Tabelle
(pinnen/SRI, Prüfschritt, Least Privilege, 4-Augen-Prinzip, Truststore).

**3c)** Deine Firma bittet dich um **drei konkrete Maßnahmen**, die diese
Kette brechen würden. Je Maßnahme: eine Zeile *was* und eine Zeile
*warum sie genau an dieser Stelle greift*. Eine der drei Maßnahmen muss
das 4-Augen-Prinzip sein.

**3d)** Beurteilung in zwei Sätzen: Wäre in diesem Szenario ein KI-Werkzeug
als Prüfer („scan this: does it send anything off my computer?") eine
hinreichende Kontrolle? Begründe mit der Grenze aus der Lektion.

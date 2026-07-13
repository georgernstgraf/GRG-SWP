# Datenmodellierung für ein Büchereisystem

## Eine strukturierte Datenmodellierung für ein Büchereisystem erfordert eine saubere Trennung zwischen den Metadaten eines Werks (dem Buch) und den physischen Einheiten (den Exemplaren).

Hier ist ein relationales Modell, das Ihre Anforderungen berücksichtigt und sich für eine Umsetzung mit einem ORM wie Drizzle eignet.

### Das relationale Modell

1. **Filiale**: Die zentrale organisatorische Einheit.
2. **Abteilung**: Einer Filiale zugeordnet.
3. **Mitarbeiter**: Einer Filiale zugeordnet.
4. **Buch**: Das abstrakte Werk, einer Abteilung zugeordnet.
5. **Exemplar**: Die konkrete Instanz eines Buches, physisch in einer Filiale vorhanden.
6. **Kunde**: Nutzer der Bücherei.
7. **Entlehnung**: Die Verbindung zwischen Kunde, Exemplar und dem ausführenden Mitarbeiter.

### Anmerkungen zur Modellierung

* **Abgrenzung Buch vs. Exemplar**: Durch die Trennung kann ein Buch (z. B. "Clean Code") mehrfach vorhanden sein. Die physische Verortung (welches Exemplar in welcher Filiale steht) erfolgt über die Tabelle `exemplar`.
* **Normalisierung**:
  * Die `abteilungId` im Buchmodell erlaubt eine klare Strukturierung des Bestands.
  * Mitarbeiter und Exemplare sind über die `filialeId` an ihren Standort gebunden.
* **Entlehnung**: Diese Tabelle fungiert als assoziative Entität zwischen `Kunde` und `Exemplar`. Da ein Mitarbeiter die Entlehnung durchführt, wird hier die `mitarbeiterId` als Fremdschlüssel hinterlegt (Protokollierung).
* **Datentypen**: Da Sie SQLite verwenden, nutze ich `integer` für IDs und Fremdschlüssel sowie `text` für Strings. Drizzle bildet dies effizient auf SQLite-Typen ab.

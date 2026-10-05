// Unterrichts-Domäne UE 3: Interface als Vertrag — „was, nicht wie".
// Ein Vertrag über Handlung (vergleichbar sein), nicht über Herkunft (Kontosein).
export interface Comparable<T> {
  compareTo(other: T): number; // <0: dieses kleiner · 0: gleich · >0: größer
}

// Zweiter Vertrag: Fähigkeit, die auch andere Klassen haben können.
export interface Verzinsbar {
  jahresZins(): number; // z. B. 0.02 = 2 %
}

// Eine Klasse, mehrere Verträge — Abstammung (is-a) kommt in UE 4 dazu.
export class Sparkonto implements Comparable<Sparkonto>, Verzinsbar {
  private kontostand: number;
  private static readonly ZINS = 0.02;

  constructor(kontostand: number) {
    if (kontostand < 0) {
      throw new Error(`Kontostand darf nicht negativ sein (war ${kontostand})`);
    }
    this.kontostand = kontostand;
  }

  get saldo(): number {
    return this.kontostand;
  }

  // Vertrag 1 erfüllt: Vergleich nach Kontostand.
  compareTo(other: Sparkonto): number {
    return this.kontostand - other.kontostand;
  }

  // Vertrag 2 erfüllt: Sparzins.
  jahresZins(): number {
    return Sparkonto.ZINS;
  }
}

// Die Funktion kennt nur den Vertrag — jede erfüllende Klasse fliegt durch.
export function groesstes<T extends Comparable<T>>(liste: T[]): T | undefined {
  if (liste.length === 0) return undefined;
  let bestes = liste[0];
  for (const kandidat of liste) {
    if (kandidat.compareTo(bestes) > 0) bestes = kandidat;
  }
  return bestes;
}

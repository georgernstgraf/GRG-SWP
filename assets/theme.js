/* Hell/Dunkel-Umschalter für GRG-SWP-Lektionen.
   Default folgt dem Betriebssystem (prefers-color-scheme),
   die Wahl wird in localStorage ("swp-theme") gemerkt.
   Print bleibt über lesson.css immer hell. Kein CDN.

   Der Theme wird sofort gesetzt (vor dem ersten Paint); der Toggle-Button
   wird erst nach dem DOM-Aufbau verdrahtet, damit er auch dann funktioniert,
   wenn dieses Skript im <head> lädt, bevor der Button existiert. */
(function () {
  "use strict";

  var SPEICHER = "swp-theme";
  var wurzel = document.documentElement;

  function systemTheme() {
    if (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }

  function anwenden(theme) {
    wurzel.setAttribute("data-theme", theme);
    var knopf = document.getElementById("theme-toggle");
    if (knopf) {
      knopf.textContent = theme === "dark" ? "Hell" : "Dunkel";
      knopf.setAttribute("aria-pressed",
        theme === "dark" ? "true" : "false");
    }
  }

  var gespeichert = null;
  try { gespeichert = window.localStorage.getItem(SPEICHER); } catch (e) {}
  if (gespeichert === "dark" || gespeichert === "light") {
    anwenden(gespeichert);
  } else {
    anwenden(systemTheme());
  }

  function verdrahten() {
    var knopf = document.getElementById("theme-toggle");
    if (!knopf || knopf.getAttribute("data-verdrahtet") === "1") { return; }
    knopf.setAttribute("data-verdrahtet", "1");
    knopf.addEventListener("click", function () {
      var neu = wurzel.getAttribute("data-theme") === "dark"
        ? "light" : "dark";
      anwenden(neu);
      try { window.localStorage.setItem(SPEICHER, neu); } catch (e) {}
    });
    // Button-Beschriftung an den aktuellen Zustand angleichen.
    anwenden(wurzel.getAttribute("data-theme") || systemTheme());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", verdrahten);
  } else {
    verdrahten();
  }
})();

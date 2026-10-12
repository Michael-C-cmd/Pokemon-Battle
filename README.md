Pokémon Battle Simulator:

Ein rundenbasierter Pokémon-Kampf in Vanilla JavaScript – Pokémon und Attacken werden live von der PokeAPI geladen.


Features:


Live-Daten via REST-API (fetch), Kampf-KI für den Gegner

Robuste API-Anbindung: Promise.all für parallele Requests, AbortController für Timeouts, Retry-Logik mit exponentiellem Backoff

State-Management über das Reducer-Pattern (immutable, pure Funktionen)


Tech Stack:

JavaScript (ES6-Module, .mjs) · fetch/REST · HTML/CSS


Starten:

Dateien klonen und app.mjs im Browser bzw. über einen lokalen Server starten (ES-Module erfordern http, kein file://).


Struktur:


app.mjs:
Einstieg & Spielablauf


fetch.mjs:
API-Anbindung inkl. AbortController & Retry


fight.mjs:
Kampf-Logik (Reducer)


rndNum.mjs:
Zufalls-Helfer

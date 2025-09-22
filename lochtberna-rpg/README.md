# Sagen Lochtbernas (lochtberna-rpg)

Ein eigenes FoundryVTT-System für das Rollenspiel **Sagen Lochtbernas**.

## 📖 Beschreibung
Dieses System arbeitet mit:
- **Hexagonaler Bewegung**
- **W100-Probenmechanik** (Ergebnis muss unter dem getesteten Attribut/Talent liegen)
- Drei Attributsgruppen (Körper, Geist, Sozial)
- Talente, Waffentalente, Zauber und Fähigkeiten
- Erfahrungspunkte zum Steigern und Kaufen von Fertigkeiten

## 📂 Installation in FoundryVTT
1. Lade dieses Repository herunter oder klone es nach GitHub.
2. Kopiere die Manifest-URL der Datei `system.json` (z. B. von deinem GitHub-Repo).
3. Öffne FoundryVTT → *Systeme verwalten* → *System installieren über Manifest-URL*.
4. Trage die URL ein und installiere das System.

## 🧾 Features
- Charakterbogen mit Tabs für Attribute, Talente und Zauber/Fähigkeiten
- Unterstützung für Items (Waffen, Talente, Zauber, Fähigkeiten)
- Einfach erweiterbar durch eigene Packs

## ⚙️ Ordnerstruktur
```
lochtberna-rpg/
├── module/          # Hauptlogik (ActorSheet, ItemSheet, main.js)
├── templates/       # HTML-Templates für Character- und Item-Sheets
├── styles/          # CSS-Styles
├── lang/            # Sprachdateien
├── system.json      # Manifest-Datei
├── template.json    # Datenstruktur
```

## 🚀 Nächste Schritte
- Items (Waffenlisten, Talente, Zauber) hinzufügen
- Weitere Automatisierungen für Würfelwürfe implementieren
- Styles verfeinern

---
✍️ Erstellt von *User* mit Unterstützung von *ChatGPT*.

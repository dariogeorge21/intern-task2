# 🧪 Pokémon Stats Arena - Team Builder & Benchmark Tool

![Project Banner](https://img.shields.io/badge/Built%20With-React-blue?style=flat-square)  
**Live Demo:** [task2-intern-mmp.netlify.app](https://task2-intern-mmp.netlify.app/)

A sleek and powerful React application that lets users:
- 🔍 Search and filter Pokémon.
- 🧩 Build a benchmark team of up to 6 Pokémon.
- 📊 Compare cumulative stats like HP, Attack, Defense, etc.
- 💡 Toggle between Light and Dark themes.
- 💾 Persist selected team across sessions using `localStorage`.

---

## 🚀 Features

### 🎯 Arena Highlights:
- Randomly fetches 50 Pokémons from Gen 1 (Kanto).
- View detailed stats like HP, Speed, Attack, Defense, and Type.
- Add Pokémon to your **Benchmark Team** with a single click.

### 📊 Benchmark Stats:
- Real-time aggregation of team stats.
- Max limit of 6 Pokémon (as per classic rules).
- Duplicate prevention and visual card-based team display.

### 🌗 Theme Toggle:
- Switch between Dark and Light modes.
- Theme preference stored in `localStorage`.

### 🔍 Search & Filter:
- 🔎 Real-time search by Pokémon name.
- ⛏️ Filter by Pokémon Type using a dropdown.

### 💾 Persistence:
- Benchmark team is stored in `localStorage`.
- Auto-restores team after refresh or re-visit.

---

## 🛠️ Tech Stack

- **Frontend Framework**: React + TypeScript
- **API**: [PokéAPI](https://pokeapi.co/)
- **Styling**: Vanilla CSS
- **Hosting**: [Netlify](https://netlify.app)

---

## 📦 Getting Started

### 🔧 Installation

```bash
git clone https://github.com/your-username/pokemon-arena.git
cd pokemon-arena
npm install
npm run dev

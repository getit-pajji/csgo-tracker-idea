# 🔥 CS2 Howl Investment Tracker

A premium, Howl-themed web application for Counter-Strike 2 skin investments with **live market prices**, trade-up analysis, and portfolio tracking.

![CS2 Howl Tracker](https://img.shields.io/badge/CS2-Howl%20Tracker-e63946?style=for-the-badge&logo=steam&logoColor=white)
![Live API](https://img.shields.io/badge/API-Live%20Prices-00d4aa?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🎨 Design

Inspired by the legendary **M4A1-S | Howl** skin — red/orange flame aesthetics with dark backgrounds, fire particle effects, and a 3D spinning AK-47 Case Hardened loading screen.

- **Howl flame color scheme** — red/orange gradients throughout
- **3D loading screen** — spinning AK-47 Case Hardened with SVG art & fire particles
- **3D card effects** — perspective tilt on mouse hover
- **Glassmorphism** navigation with flame accents
- **Orbitron + Inter + JetBrains Mono** typography
- **Smooth animations** and micro-interactions
- **Fully responsive** — desktop, tablet, and mobile

## 🌐 Live API Integration

Prices are fetched from a **free, no-key-required API**:

```
https://prices.csgotrader.app/latest/prices_v6.json
```

- ✅ No API key needed
- ✅ CORS-enabled (works from browser)
- ✅ Auto-refreshes every 5 minutes
- ✅ Fallback to cached data if API is down
- ✅ Live status indicator in the navbar

## ✨ Features

### 📊 Dashboard
- Real-time stats with live market data
- Interactive price trend charts (Chart.js)
- Top investment picks with ROI analysis
- Best trade-up deals preview

### 💰 Investment Recommendations
- **24 curated skins** with live prices & 1-year ROI predictions
- Confidence scoring & trend analysis
- Advanced filtering (weapon, rarity, price range)
- 3D perspective card hover effects

### 🔄 Trade-Up Calculator
- **8 profitable contracts** (4 under $1, 4 under $5)
- Expected value & profit calculations
- Success rate percentages
- Input/output visualization

### 📈 Market Analysis
- Historical price charts
- ROI comparison bar charts
- Comprehensive data table with live prices
- Trend indicators

### 📁 Portfolio Tracker
- Track buy vs. current price (live)
- Real-time P&L calculations
- localStorage persistence
- Add/remove skins via modal

## 🚀 Getting Started

### Option 1: Open Directly
Simply open `index.html` in your browser. No build tools needed!

> ⚠️ For the live API to work, you may need to serve the file via a local server due to CORS policies in some browsers.

### Option 2: Local Server
```bash
# Python
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

Navigate to `http://localhost:8000`

### Option 3: GitHub Pages
1. Push to GitHub
2. Settings → Pages → Deploy from `main` → `/ (root)`
3. Live at `https://yourusername.github.io/csgo-tracker/`

## 📁 Project Structure

```
csgo-tracker/
├── index.html      # Main app with loading screen & Howl theme
├── styles.css      # Howl-themed CSS with 3D effects & animations
├── script.js       # App logic with live API integration
├── README.md       # This file
└── .gitignore      # Git ignore rules
```

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| HTML5 | Semantic structure with SVG art |
| CSS3 | Howl theme, 3D transforms, fire particles |
| Vanilla JS | Application logic (no frameworks) |
| Chart.js | Interactive data visualizations |
| csgotrader.app API | Live Steam Market prices |
| Google Fonts | Orbitron, Inter & JetBrains Mono |
| localStorage | Portfolio data persistence |

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Edge 90+
- ✅ Safari 14+

## ⚠️ Disclaimer

This tool is for **educational purposes only**. Skin prices are fetched from public APIs and predictions are based on historical analysis. This is not financial advice. Always do your own research.

## 📄 License

Open source under the [MIT License](LICENSE).

---

<p align="center">
  🔥 Made with fire for the CS2 community 🔥
</p>

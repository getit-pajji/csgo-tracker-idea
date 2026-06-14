/* ════════════════════════════════════════════════════════════════
   CS2 HOWL INVESTMENT TRACKER — Premium 3D Application
   Live API prices • 3D effects • Howl-themed • Portfolio tracking
   ════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ══════════════════════ SKIN DATABASE ══════════════════════
  const skinDatabase = [
    { id:'ak47-redline', weapon:'AK-47', name:'Redline', collection:'Phoenix Collection', rarity:'classified', condition:'Field-Tested', currentPrice:8.50, predictedPrice:13.20, historicalPrices:[6.50,7.00,7.20,7.80,7.50,8.00,7.90,8.20,8.50], volume:15000, confidence:85, roi:55.3, trend:'up', reason:'Classic skin with consistent demand. Limited supply from discontinued case.', emoji:'🔫', apiName:'AK-47 | Redline (Field-Tested)' },
    { id:'awp-asiimov', weapon:'AWP', name:'Asiimov', collection:'Phoenix Collection', rarity:'covert', condition:'Field-Tested', currentPrice:26.00, predictedPrice:38.00, historicalPrices:[19.00,20.50,21.00,22.50,23.00,24.00,24.50,25.20,26.00], volume:8500, confidence:88, roi:46.2, trend:'up', reason:'Iconic AWP skin. Strong collector demand keeps prices climbing.', emoji:'🎯', apiName:'AWP | Asiimov (Field-Tested)' },
    { id:'m4a4-asiimov', weapon:'M4A4', name:'Asiimov', collection:'Revolver Case Collection', rarity:'covert', condition:'Field-Tested', currentPrice:32.00, predictedPrice:45.00, historicalPrices:[24.00,25.50,26.50,28.00,29.00,30.00,30.50,31.20,32.00], volume:4200, confidence:82, roi:40.6, trend:'up', reason:'Premium M4A4 skin. High demand in competitive play.', emoji:'💥', apiName:'M4A4 | Asiimov (Field-Tested)' },
    { id:'usps-killconfirmed', weapon:'USP-S', name:'Kill Confirmed', collection:'Canals Collection', rarity:'covert', condition:'Field-Tested', currentPrice:18.50, predictedPrice:27.00, historicalPrices:[13.00,14.00,14.80,15.50,16.00,17.00,17.50,18.00,18.50], volume:3800, confidence:80, roi:45.9, trend:'up', reason:'Popular pistol skin with growing collector interest.', emoji:'🔹', apiName:'USP-S | Kill Confirmed (Field-Tested)' },
    { id:'glock-waterelemental', weapon:'Glock-18', name:'Water Elemental', collection:'Breakout Collection', rarity:'restricted', condition:'Field-Tested', currentPrice:3.80, predictedPrice:5.70, historicalPrices:[2.50,2.80,3.00,3.20,3.30,3.50,3.60,3.70,3.80], volume:22000, confidence:78, roi:50.0, trend:'up', reason:'Budget-friendly with high trade volume. Breakout case supply declining.', emoji:'⚡', apiName:'Glock-18 | Water Elemental (Field-Tested)' },
    { id:'ak47-frontsidemisty', weapon:'AK-47', name:'Frontside Misty', collection:'Revolver Case Collection', rarity:'classified', condition:'Field-Tested', currentPrice:4.50, predictedPrice:6.80, historicalPrices:[3.00,3.30,3.50,3.80,3.90,4.10,4.20,4.35,4.50], volume:18000, confidence:75, roi:51.1, trend:'up', reason:'Affordable AK skin with rising popularity.', emoji:'🔫', apiName:'AK-47 | Frontside Misty (Field-Tested)' },
    { id:'m4a1s-atomicalloy', weapon:'M4A1-S', name:'Atomic Alloy', collection:'Vanguard Collection', rarity:'classified', condition:'Minimal Wear', currentPrice:3.20, predictedPrice:5.00, historicalPrices:[2.00,2.20,2.40,2.60,2.70,2.85,2.95,3.10,3.20], volume:12000, confidence:72, roi:56.3, trend:'up', reason:'Clean design, Vanguard case discontinued. Supply shrinking.', emoji:'🔧', apiName:'M4A1-S | Atomic Alloy (Minimal Wear)' },
    { id:'awp-manowar', weapon:'AWP', name:"Man-o'-war", collection:'Chroma Collection', rarity:'classified', condition:'Minimal Wear', currentPrice:7.80, predictedPrice:11.50, historicalPrices:[5.50,5.90,6.20,6.50,6.80,7.10,7.30,7.55,7.80], volume:9800, confidence:79, roi:47.4, trend:'up', reason:'Unique bone design. Chroma case demand increasing.', emoji:'🎯', apiName:"AWP | Man-o'-war (Minimal Wear)" },
    { id:'deagle-conspiracy', weapon:'Desert Eagle', name:'Conspiracy', collection:'Breakout Collection', rarity:'classified', condition:'Factory New', currentPrice:3.00, predictedPrice:4.50, historicalPrices:[2.50,2.60,2.65,2.70,2.80,2.85,2.90,2.95,3.00], volume:25000, confidence:70, roi:50.0, trend:'stable', reason:'Illuminati-themed meme skin. Stable growth with high volume.', emoji:'🦅', apiName:'Desert Eagle | Conspiracy (Factory New)' },
    { id:'p250-muertos', weapon:'P250', name:'Muertos', collection:'Vanguard Collection', rarity:'restricted', condition:'Field-Tested', currentPrice:0.80, predictedPrice:1.30, historicalPrices:[0.45,0.50,0.55,0.60,0.62,0.68,0.72,0.76,0.80], volume:30000, confidence:65, roi:62.5, trend:'up', reason:'Day of the Dead theme. Sub-dollar gem with high ROI potential.', emoji:'💎', apiName:'P250 | Muertos (Field-Tested)' },
    { id:'ak47-neonrider', weapon:'AK-47', name:'Neon Rider', collection:'Clutch Collection', rarity:'covert', condition:'Minimal Wear', currentPrice:22.00, predictedPrice:30.00, historicalPrices:[16.00,17.00,18.00,19.00,19.50,20.00,20.80,21.40,22.00], volume:5500, confidence:83, roi:36.4, trend:'up', reason:'Cyberpunk aesthetic with neon colors. Premium AK.', emoji:'🔫', apiName:'AK-47 | Neon Rider (Minimal Wear)' },
    { id:'m4a4-neonoir', weapon:'M4A4', name:'Neo-Noir', collection:'Prisma Collection', rarity:'covert', condition:'Field-Tested', currentPrice:6.50, predictedPrice:9.80, historicalPrices:[4.20,4.60,4.90,5.20,5.50,5.80,6.00,6.25,6.50], volume:11000, confidence:76, roi:50.8, trend:'up', reason:'Noir comic art style. Prisma collection gaining traction.', emoji:'💥', apiName:'M4A4 | Neo-Noir (Field-Tested)' },
    { id:'awp-feverdream', weapon:'AWP', name:'Fever Dream', collection:'Spectrum Collection', rarity:'classified', condition:'Field-Tested', currentPrice:2.80, predictedPrice:4.20, historicalPrices:[2.20,2.30,2.35,2.45,2.55,2.60,2.65,2.72,2.80], volume:16000, confidence:68, roi:50.0, trend:'stable', reason:'Trippy psychedelic design. Budget AWP with steady growth.', emoji:'🎯', apiName:'AWP | Fever Dream (Field-Tested)' },
    { id:'usps-cortex', weapon:'USP-S', name:'Cortex', collection:'Prisma Collection', rarity:'classified', condition:'Field-Tested', currentPrice:5.50, predictedPrice:8.50, historicalPrices:[3.50,3.80,4.10,4.40,4.60,4.90,5.10,5.30,5.50], volume:14000, confidence:77, roi:54.5, trend:'up', reason:'Brain/anatomy design. Rising competitive scene favorite.', emoji:'🔹', apiName:'USP-S | Cortex (Field-Tested)' },
    { id:'glock-moonrise', weapon:'Glock-18', name:'Moonrise', collection:'Horizon Collection', rarity:'restricted', condition:'Factory New', currentPrice:1.50, predictedPrice:2.30, historicalPrices:[0.90,1.00,1.05,1.15,1.20,1.28,1.35,1.42,1.50], volume:28000, confidence:63, roi:53.3, trend:'up', reason:'Japanese moon artwork. Budget Glock with aesthetic appeal.', emoji:'⚡', apiName:'Glock-18 | Moonrise (Factory New)' },
    { id:'p90-asiimov', weapon:'P90', name:'Asiimov', collection:'Operation Vanguard Collection', rarity:'covert', condition:'Field-Tested', currentPrice:4.20, predictedPrice:6.00, historicalPrices:[3.20,3.35,3.45,3.60,3.70,3.85,3.95,4.08,4.20], volume:9000, confidence:71, roi:42.9, trend:'stable', reason:'Part of the Asiimov family. Vanguard skins becoming rare.', emoji:'🌀', apiName:'P90 | Asiimov (Field-Tested)' },
    { id:'famas-mechaindustries', weapon:'FAMAS', name:'Mecha Industries', collection:'Horizon Collection', rarity:'classified', condition:'Field-Tested', currentPrice:1.80, predictedPrice:2.90, historicalPrices:[1.10,1.20,1.30,1.40,1.48,1.55,1.62,1.71,1.80], volume:20000, confidence:69, roi:61.1, trend:'up', reason:'Mecha/robot theme. Affordable classified, high growth.', emoji:'⚙️', apiName:'FAMAS | Mecha Industries (Field-Tested)' },
    { id:'mac10-neonrider', weapon:'MAC-10', name:'Neon Rider', collection:'Clutch Collection', rarity:'classified', condition:'Factory New', currentPrice:3.50, predictedPrice:5.50, historicalPrices:[2.20,2.40,2.60,2.80,2.95,3.10,3.22,3.36,3.50], volume:17000, confidence:74, roi:57.1, trend:'up', reason:'Matching Neon Rider set. Clutch case prices rising.', emoji:'🔥', apiName:'MAC-10 | Neon Rider (Factory New)' },
    { id:'fiveseven-monkeybusiness', weapon:'Five-SeveN', name:'Monkey Business', collection:'Falchion Collection', rarity:'restricted', condition:'Minimal Wear', currentPrice:2.20, predictedPrice:3.40, historicalPrices:[1.40,1.55,1.65,1.78,1.85,1.95,2.02,2.11,2.20], volume:19000, confidence:66, roi:54.5, trend:'up', reason:'Fun banana camo. Falchion case supply dwindling.', emoji:'🎰', apiName:'Five-SeveN | Monkey Business (Minimal Wear)' },
    { id:'sg553-cyrex', weapon:'SG 553', name:'Cyrex', collection:'Spectrum Collection', rarity:'restricted', condition:'Factory New', currentPrice:1.20, predictedPrice:1.90, historicalPrices:[0.75,0.82,0.88,0.95,1.00,1.05,1.10,1.15,1.20], volume:24000, confidence:61, roi:58.3, trend:'stable', reason:'Clean sci-fi design. Spectrum case skins appreciating.', emoji:'🎯', apiName:'SG 553 | Cyrex (Factory New)' },
    { id:'mp9-hydra', weapon:'MP9', name:'Hydra', collection:'Wildfire Collection', rarity:'restricted', condition:'Factory New', currentPrice:0.60, predictedPrice:1.00, historicalPrices:[0.30,0.35,0.38,0.42,0.45,0.50,0.53,0.56,0.60], volume:35000, confidence:58, roi:66.7, trend:'up', reason:'Operation Wildfire exclusive. Sub-dollar with highest ROI.', emoji:'💨', apiName:'MP9 | Hydra (Factory New)' },
    { id:'nova-hyperbeast', weapon:'Nova', name:'Hyper Beast', collection:'Revolver Case Collection', rarity:'restricted', condition:'Field-Tested', currentPrice:0.35, predictedPrice:0.55, historicalPrices:[0.18,0.20,0.22,0.25,0.27,0.29,0.31,0.33,0.35], volume:40000, confidence:55, roi:57.1, trend:'stable', reason:'Hyper Beast series. Cheapest entry into the collection.', emoji:'🌟', apiName:'Nova | Hyper Beast (Field-Tested)' },
    { id:'galil-chatterbox', weapon:'Galil AR', name:'Chatterbox', collection:'Cobblestone Collection', rarity:'covert', condition:'Battle-Scarred', currentPrice:9.50, predictedPrice:15.00, historicalPrices:[6.00,6.50,7.00,7.50,7.80,8.20,8.60,9.00,9.50], volume:2500, confidence:73, roi:57.9, trend:'up', reason:'Cobblestone collection extremely rare. Souvenir packages no longer drop.', emoji:'🎲', apiName:'Galil AR | Chatterbox (Battle-Scarred)' },
    { id:'ssg08-bloodinwater', weapon:'SSG 08', name:'Blood in the Water', collection:'Huntsman Collection', rarity:'covert', condition:'Minimal Wear', currentPrice:12.00, predictedPrice:17.00, historicalPrices:[8.50,9.00,9.50,10.00,10.40,10.80,11.20,11.60,12.00], volume:6000, confidence:81, roi:41.7, trend:'up', reason:'Legendary shark design. Huntsman case is a classic collectible.', emoji:'🩸', apiName:'SSG 08 | Blood in the Water (Minimal Wear)' }
  ];

  // ══════════════════════ TRADE-UP DATABASE ══════════════════════
  const tradeupDatabase = [
    { id:'t1', name:'Budget Profit Maker', category:'under1', totalCost:0.80,
      inputs: [{name:'P250 | Boreal Forest',price:0.08},{name:'FAMAS | Colony',price:0.08},{name:'Galil AR | Sage Spray',price:0.08},{name:'MP7 | Forest DDPAT',price:0.08},{name:'Nova | Walnut',price:0.08},{name:'MAG-7 | Storm',price:0.08},{name:'SG 553 | Army Sheen',price:0.08},{name:'UMP-45 | Scorched',price:0.08},{name:'Sawed-Off | Snake Camo',price:0.08},{name:'PP-Bizon | Sand Dashed',price:0.08}],
      outputs: [{name:'AK-47 | Safari Mesh',price:1.50,chance:60},{name:'M4A4 | Urban DDPAT',price:2.20,chance:40}],
      expectedValue:1.78, expectedProfit:0.98, profitPercent:122.5, successRate:78 },
    { id:'t2', name:'Penny Flipper', category:'under1', totalCost:0.50,
      inputs: [{name:'MP9 | Sand Dashed',price:0.05},{name:'P90 | Sand Spray',price:0.05},{name:'PP-Bizon | Irradiated',price:0.05},{name:'MAG-7 | Sand Dune',price:0.05},{name:'Nova | Sand Dune',price:0.05},{name:'XM1014 | Grassland',price:0.05},{name:'G3SG1 | Safari Mesh',price:0.05},{name:'Negev | Army Sheen',price:0.05},{name:'M249 | Contrast Spray',price:0.05},{name:'Sawed-Off | Irradiated',price:0.05}],
      outputs: [{name:'FAMAS | Colony',price:0.90,chance:55},{name:'Galil AR | Sage Spray',price:1.30,chance:45}],
      expectedValue:1.08, expectedProfit:0.58, profitPercent:116.0, successRate:82 },
    { id:'t3', name:'Blue Gem Hunter', category:'under1', totalCost:0.90,
      inputs: [{name:'Tec-9 | Urban DDPAT',price:0.09},{name:'Dual Berettas | Colony',price:0.09},{name:'Five-SeveN | Forest Night',price:0.09},{name:'MP7 | Groundwater',price:0.09},{name:'MAC-10 | Indigo',price:0.09},{name:'P250 | Sand Dune',price:0.09},{name:'PP-Bizon | Carbon Fiber',price:0.09},{name:'UMP-45 | Carbon Fiber',price:0.09},{name:'Nova | Green Apple',price:0.09},{name:'MP9 | Setting Sun',price:0.09}],
      outputs: [{name:'Five-SeveN | Case Hardened',price:1.80,chance:50},{name:'MP7 | Forest DDPAT',price:1.20,chance:50}],
      expectedValue:1.50, expectedProfit:0.60, profitPercent:66.7, successRate:75 },
    { id:'t4', name:'Starter Special', category:'under1', totalCost:0.30,
      inputs: [{name:'P250 | Sand Dune',price:0.03},{name:'PP-Bizon | Sand Dashed',price:0.03},{name:'MAG-7 | Sand Dune',price:0.03},{name:'Nova | Walnut',price:0.03},{name:'Sawed-Off | Snake Camo',price:0.03},{name:'XM1014 | Blue Spruce',price:0.03},{name:'G3SG1 | Jungle Dashed',price:0.03},{name:'M249 | Gator Mesh',price:0.03},{name:'Negev | Army Sheen',price:0.03},{name:'MP9 | Storm',price:0.03}],
      outputs: [{name:'Nova | Predator',price:0.70,chance:65},{name:'MAG-7 | Storm',price:0.55,chance:35}],
      expectedValue:0.65, expectedProfit:0.35, profitPercent:116.7, successRate:85 },
    { id:'t5', name:'Purple Profit', category:'under5', totalCost:4.50,
      inputs: [{name:'Glock-18 | Steel Disruption',price:0.45},{name:'P250 | Valence',price:0.45},{name:'USP-S | Blueprint',price:0.45},{name:'Five-SeveN | Nightshade',price:0.45},{name:'MP7 | Armor Core',price:0.45},{name:'MAG-7 | Heat',price:0.45},{name:'Nova | Antique',price:0.45},{name:'UMP-45 | Primal Saber',price:0.45},{name:'Tec-9 | Re-Entry',price:0.45},{name:'PP-Bizon | Fuel Rod',price:0.45}],
      outputs: [{name:'M4A1-S | Nitro',price:12.00,chance:35},{name:'AK-47 | Emerald Pinstripe',price:8.50,chance:65}],
      expectedValue:9.73, expectedProfit:5.23, profitPercent:116.2, successRate:70 },
    { id:'t6', name:'Classified Climber', category:'under5', totalCost:3.80,
      inputs: [{name:'Desert Eagle | Corinthian',price:0.38},{name:'P2000 | Pulse',price:0.38},{name:'Tec-9 | Isaac',price:0.38},{name:'CZ75 | Tigris',price:0.38},{name:"MP9 | Pandora's Box",price:0.38},{name:'Five-SeveN | Fowl Play',price:0.38},{name:'Galil AR | Rocket Pop',price:0.38},{name:'FAMAS | Djinn',price:0.38},{name:'MAG-7 | Praetorian',price:0.38},{name:'Nova | Ranger',price:0.38}],
      outputs: [{name:'AWP | Corticera',price:7.50,chance:45},{name:'M4A4 | Griffin',price:5.80,chance:55}],
      expectedValue:6.57, expectedProfit:2.77, profitPercent:72.9, successRate:68 },
    { id:'t7', name:'Pink Dream', category:'under5', totalCost:4.20,
      inputs: [{name:'Glock-18 | Grinder',price:0.42},{name:'P250 | Supernova',price:0.42},{name:'CZ75 | Crimson Web',price:0.42},{name:'MP7 | Skulls',price:0.42},{name:'MAC-10 | Heat',price:0.42},{name:'Dual Berettas | Marina',price:0.42},{name:'UMP-45 | Labyrinth',price:0.42},{name:'Nova | Rising Skull',price:0.42},{name:'XM1014 | Bone Machine',price:0.42},{name:'Negev | Terrain',price:0.42}],
      outputs: [{name:'USP-S | Orion',price:15.00,chance:25},{name:'P2000 | Corticera',price:6.00,chance:75}],
      expectedValue:8.25, expectedProfit:4.05, profitPercent:96.4, successRate:72 },
    { id:'t8', name:'Mid-Tier Magic', category:'under5', totalCost:3.50,
      inputs: [{name:'Five-SeveN | Kami',price:0.35},{name:'P250 | Wingshot',price:0.35},{name:'Tec-9 | Sandstorm',price:0.35},{name:'Desert Eagle | Bronze Deco',price:0.35},{name:'Dual Berettas | Shred',price:0.35},{name:'MAC-10 | Tatter',price:0.35},{name:'MP9 | Dart',price:0.35},{name:'PP-Bizon | Antique',price:0.35},{name:'XM1014 | Teclu Burner',price:0.35},{name:'Sawed-Off | Highwayman',price:0.35}],
      outputs: [{name:'Glock-18 | Brass',price:8.00,chance:40},{name:'CZ75 | Victoria',price:5.50,chance:60}],
      expectedValue:6.50, expectedProfit:3.00, profitPercent:85.7, successRate:74 }
  ];

  // ══════════════════════ EMOJI MAP ══════════════════════
  const weaponEmojis = { 'AK-47':'🔫','AWP':'🎯','M4A4':'💥','M4A1-S':'🔧','USP-S':'🔹','Glock-18':'⚡','Desert Eagle':'🦅','P250':'💎','P90':'🌀','FAMAS':'⚙️','MAC-10':'🔥','Five-SeveN':'🎰','SG 553':'🎯','MP9':'💨','Nova':'🌟','Galil AR':'🎲','SSG 08':'🩸' };

  // ══════════════════════ STATE ══════════════════════
  let portfolio = [];
  let priceChart = null;
  let trendChart = null;
  let activeTradeupFilter = 'all';
  let apiStatus = 'connecting';
  let lastApiUpdate = null;

  // ══════════════════════ UTILITIES ══════════════════════
  const fmt = (n) => '$' + Number(n).toFixed(2);
  const fmtVol = (n) => n >= 1000 ? (n/1000).toFixed(1)+'K' : String(n);
  const fmtCap = (n) => n >= 1e6 ? '$'+(n/1e6).toFixed(1)+'M' : '$'+(n/1e3).toFixed(0)+'K';
  const rarityClass = (r) => 'rarity-' + r;
  const emoji = (w) => weaponEmojis[w] || '🔫';

  // ══════════════════════ LIVE API ══════════════════════
  async function fetchLivePrices() {
    try {
      setApiStatus('connecting');
      const res = await fetch('https://prices.csgotrader.app/latest/prices_v6.json');
      if (!res.ok) throw new Error('API ' + res.status);
      const data = await res.json();
      let count = 0;
      skinDatabase.forEach(s => {
        const d = data[s.apiName];
        if (d && d.steam) {
          const p = d.steam.last_24h || d.steam.last_7d || d.steam.last_30d;
          if (p && p > 0) {
            const old = s.currentPrice;
            s.currentPrice = Math.round(p * 100) / 100;
            s.roi = Math.round(((s.predictedPrice - s.currentPrice) / s.currentPrice) * 10000) / 100;
            if (s.currentPrice > old * 1.005) s.trend = 'up';
            else if (s.currentPrice < old * 0.995) s.trend = 'down';
            count++;
          }
        }
      });
      lastApiUpdate = new Date();
      setApiStatus('connected');
      console.log(`🔥 Updated ${count}/${skinDatabase.length} prices from live API`);
      refreshAll();
      flashPrices();
      return true;
    } catch (e) {
      console.warn('⚠️ API error, using cached:', e.message);
      setApiStatus('error');
      return false;
    }
  }

  function setApiStatus(status) {
    apiStatus = status;
    const el = document.getElementById('apiStatus');
    if (el) {
      el.className = 'api-status ' + status;
      const txt = el.querySelector('.api-text');
      if (txt) txt.textContent = status === 'connected' ? 'Live' : status === 'connecting' ? 'Updating...' : 'Cached';
    }
    const upd = document.getElementById('lastUpdate');
    if (upd && lastApiUpdate) upd.textContent = 'Updated: ' + lastApiUpdate.toLocaleTimeString();
  }

  function flashPrices() {
    document.querySelectorAll('.skin-current-price,.table-price,.stat-value').forEach(el => {
      el.classList.add('price-updated');
      setTimeout(() => el.classList.remove('price-updated'), 1000);
    });
  }

  function refreshAll() {
    renderDashboardStats();
    renderDashboardPreview();
    renderInvestmentCards();
    renderMarketTable();
    renderPortfolio();
  }

  // ══════════════════════ LOADING SCREEN ══════════════════════
  function initLoadingScreen() {
    const ls = document.getElementById('loadingScreen');
    if (!ls) return;
    document.body.style.overflow = 'hidden';
    const start = Date.now();
    fetchLivePrices().finally(() => {
      const wait = Math.max(0, 3200 - (Date.now() - start));
      setTimeout(() => {
        ls.classList.add('hidden');
        document.body.style.overflow = 'auto';
        // Entrance animations
        document.querySelectorAll('.stat-card').forEach((c, i) => {
          c.style.opacity = '0';
          c.style.transform = 'translateY(30px)';
          setTimeout(() => {
            c.style.transition = 'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)';
            c.style.opacity = '1';
            c.style.transform = 'translateY(0)';
          }, 300 + i * 120);
        });
      }, wait);
    });
  }

  // ══════════════════════ 3D CARD TILT ══════════════════════
  function init3DCards() {
    const grids = document.querySelectorAll('.investment-grid');
    grids.forEach(grid => {
      grid.addEventListener('mousemove', (e) => {
        const card = e.target.closest('.skin-card');
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rX = (y - 0.5) * -12;
        const rY = (x - 0.5) * 12;
        card.style.transform = `perspective(800px) translateY(-8px) rotateX(${rX}deg) rotateY(${rY}deg) scale(1.02)`;
        // Move glow with cursor
        const glow = card.querySelector('.skin-card-glow');
        if (glow) {
          glow.style.opacity = '1';
          glow.style.background = `radial-gradient(circle at ${x*100}% ${y*100}%, rgba(230,57,70,0.12), transparent 60%)`;
        }
      });
      grid.addEventListener('mouseleave', () => {
        grid.querySelectorAll('.skin-card').forEach(c => {
          c.style.transform = '';
          const g = c.querySelector('.skin-card-glow');
          if (g) g.style.opacity = '0';
        });
      });
    });
  }

  // ══════════════════════ NAVIGATION ══════════════════════
  function setupNav() {
    const links = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const toggle = document.getElementById('navToggle');
    const navC = document.getElementById('navLinks');

    links.forEach(link => {
      link.addEventListener('click', () => {
        const pg = link.dataset.page;
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        pages.forEach(p => { p.classList.remove('active'); if (p.dataset.page === pg) p.classList.add('active'); });
        if (navC) navC.classList.remove('open');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Re-init 3D cards after page switch
        setTimeout(init3DCards, 100);
      });
    });
    if (toggle && navC) toggle.addEventListener('click', () => navC.classList.toggle('open'));
  }
  window.navigateTo = (page) => { const l = document.querySelector(`.nav-link[data-page="${page}"]`); if (l) l.click(); };

  // ══════════════════════ DASHBOARD STATS ══════════════════════
  function renderDashboardStats() {
    const el = (id) => document.getElementById(id);
    const t = el('totalTracked'), a = el('avgRoi'), b = el('bestPick'), m = el('marketCap');
    if (t) t.textContent = skinDatabase.length;
    if (a) { const avg = skinDatabase.reduce((s,x) => s+x.roi, 0) / skinDatabase.length; a.textContent = avg.toFixed(1)+'%'; }
    if (b) { const best = skinDatabase.reduce((a,b) => a.roi>b.roi?a:b); b.textContent = best.weapon.split(' ')[0]+' '+best.name; b.style.fontSize = '1.1rem'; }
    if (m) { const cap = skinDatabase.reduce((s,x) => s + x.currentPrice * x.volume, 0); m.textContent = fmtCap(cap); }
  }

  // ══════════════════════ SKIN CARD HTML ══════════════════════
  function skinCardHTML(skin, i) {
    const roiCls = skin.roi >= 0 ? 'positive' : 'negative';
    const confCls = skin.confidence >= 75 ? 'high' : skin.confidence >= 50 ? 'medium' : 'low';
    return `
      <div class="skin-card animate-in" style="animation-delay:${i*0.06}s">
        <div class="skin-card-glow"></div>
        <div class="roi-badge ${roiCls}">${skin.roi>=0?'+':''}${skin.roi.toFixed(1)}%</div>
        <div class="skin-card-header">
          <span class="skin-weapon">${skin.weapon}</span>
          <span class="skin-rarity ${rarityClass(skin.rarity)}">${skin.rarity}</span>
        </div>
        <div class="skin-card-image">
          <span class="skin-emoji">${emoji(skin.weapon)}</span>
        </div>
        <div class="skin-card-body">
          <div class="skin-name">${skin.name}</div>
          <div class="skin-collection">${skin.collection} • ${skin.condition}</div>
          <div class="skin-price-row">
            <span class="skin-current-price">${fmt(skin.currentPrice)}</span>
            <span class="skin-predicted">→ ${fmt(skin.predictedPrice)}</span>
          </div>
          <div class="skin-metrics">
            <div class="metric"><div class="metric-value">${skin.roi.toFixed(1)}%</div><div class="metric-label">ROI</div></div>
            <div class="metric"><div class="metric-value">${fmtVol(skin.volume)}</div><div class="metric-label">Volume</div></div>
            <div class="metric"><div class="metric-value">${skin.confidence}%</div><div class="metric-label">Confidence</div></div>
          </div>
          <div class="skin-card-footer">
            <div class="confidence-bar"><div class="confidence-fill ${confCls}" style="width:${skin.confidence}%"></div></div>
            <span class="confidence-label">${skin.confidence}%</span>
          </div>
        </div>
      </div>`;
  }

  // ══════════════════════ RENDER INVESTMENTS ══════════════════════
  function renderInvestmentCards(skins, cid) {
    const c = document.getElementById(cid || 'investmentGrid');
    if (!c) return;
    const data = skins || getFiltered();
    if (!data.length) {
      c.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">🔍</div><div class="empty-title">No Skins Found</div><div class="empty-text">Try adjusting your filters.</div></div>';
      return;
    }
    c.innerHTML = data.map((s,i) => skinCardHTML(s,i)).join('');
    setTimeout(() => init3DCards(), 50);
  }

  // ══════════════════════ FILTERS ══════════════════════
  function getFiltered() {
    const v = (id) => document.getElementById(id)?.value || 'all';
    const search = (document.getElementById('searchInput')?.value || '').toLowerCase();
    let f = [...skinDatabase];
    if (search) f = f.filter(s => (s.weapon+' '+s.name).toLowerCase().includes(search));
    const w = v('weaponFilter'); if (w !== 'all') f = f.filter(s => s.weapon === w);
    const r = v('rarityFilter'); if (r !== 'all') f = f.filter(s => s.rarity === r);
    const p = v('priceFilter');
    if (p === 'under1') f = f.filter(s => s.currentPrice < 1);
    else if (p === 'under5') f = f.filter(s => s.currentPrice < 5);
    else if (p === 'under10') f = f.filter(s => s.currentPrice < 10);
    else if (p === 'under25') f = f.filter(s => s.currentPrice < 25);
    else if (p === 'over25') f = f.filter(s => s.currentPrice >= 25);
    const sort = v('sortFilter');
    if (sort === 'roi-desc') f.sort((a,b) => b.roi-a.roi);
    else if (sort === 'roi-asc') f.sort((a,b) => a.roi-b.roi);
    else if (sort === 'price-asc') f.sort((a,b) => a.currentPrice-b.currentPrice);
    else if (sort === 'price-desc') f.sort((a,b) => b.currentPrice-a.currentPrice);
    else if (sort === 'confidence-desc') f.sort((a,b) => b.confidence-a.confidence);
    else if (sort === 'volume-desc') f.sort((a,b) => b.volume-a.volume);
    return f;
  }

  function setupFilters() {
    ['weaponFilter','rarityFilter','priceFilter','sortFilter'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('change', () => renderInvestmentCards());
    });
    const si = document.getElementById('searchInput');
    if (si) {
      let t;
      si.addEventListener('input', () => {
        clearTimeout(t);
        t = setTimeout(() => {
          renderInvestmentCards();
          const dg = document.getElementById('dashboardGrid');
          if (dg) {
            const txt = si.value.toLowerCase();
            let top = [...skinDatabase].sort((a,b) => b.roi-a.roi).slice(0,6);
            if (txt) top = skinDatabase.filter(s => (s.weapon+' '+s.name).toLowerCase().includes(txt)).sort((a,b)=>b.roi-a.roi).slice(0,6);
            renderInvestmentCards(top, 'dashboardGrid');
          }
        }, 250);
      });
    }
  }

  // ══════════════════════ TRADE-UPS ══════════════════════
  function tradeupHTML(tu) {
    const costCls = tu.category === 'under1' ? 'under1' : 'under5';
    const inputs = tu.inputs.slice(0,10).map(i => `<div class="tradeup-input-item"><div class="item-price">${fmt(i.price)}</div><div class="item-name" title="${i.name}">${i.name.split(' | ')[1]||i.name}</div></div>`).join('');
    const best = tu.outputs.reduce((a,b) => a.price>b.price?a:b);
    return `
      <div class="tradeup-card animate-in">
        <div class="tradeup-card-header"><span class="tradeup-title">🔄 ${tu.name}</span><span class="tradeup-cost ${costCls}">Total: ${fmt(tu.totalCost)}</span></div>
        <div class="tradeup-card-body">
          <div class="tradeup-flow">
            <div class="tradeup-inputs">${inputs}</div>
            <div class="tradeup-arrow">→</div>
            <div class="tradeup-output"><div class="output-label">Expected Output</div><div class="output-name">${best.name}</div><div class="output-value">${fmt(tu.expectedValue)}</div></div>
          </div>
        </div>
        <div class="tradeup-card-footer">
          <div class="tradeup-profit">
            <div class="tradeup-stat"><div class="tradeup-stat-label">Cost</div><div class="tradeup-stat-value">${fmt(tu.totalCost)}</div></div>
            <div class="tradeup-stat"><div class="tradeup-stat-label">Profit</div><div class="tradeup-stat-value profit">+${fmt(tu.expectedProfit)}</div></div>
            <div class="tradeup-stat"><div class="tradeup-stat-label">ROI</div><div class="tradeup-stat-value profit">+${tu.profitPercent.toFixed(1)}%</div></div>
          </div>
          <span class="tradeup-chance">${tu.successRate}% Success</span>
        </div>
      </div>`;
  }

  function renderTradeups(cid) {
    const c = document.getElementById(cid || 'tradeupContainer');
    if (!c) return;
    let f = [...tradeupDatabase];
    if (activeTradeupFilter !== 'all') f = f.filter(t => t.category === activeTradeupFilter);
    f.sort((a,b) => b.profitPercent - a.profitPercent);
    c.innerHTML = f.map(t => tradeupHTML(t)).join('');
  }

  function setupTradeupFilters() {
    document.querySelectorAll('.tradeup-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tradeup-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeTradeupFilter = btn.dataset.filter;
        renderTradeups();
      });
    });
  }

  // ══════════════════════ MARKET TABLE ══════════════════════
  function renderMarketTable() {
    const tb = document.getElementById('marketTableBody');
    if (!tb) return;
    const sorted = [...skinDatabase].sort((a,b) => b.roi - a.roi);
    tb.innerHTML = sorted.map(s => {
      const ti = s.trend==='up'?'▲':s.trend==='down'?'▼':'◆';
      const tc = s.trend==='up'?'positive':s.trend==='down'?'negative':'';
      const ts = s.trend==='stable'?'color:var(--accent-gold)':'';
      return `<tr>
        <td class="table-skin-name">${emoji(s.weapon)} ${s.weapon} | ${s.name}</td>
        <td class="table-price">${fmt(s.currentPrice)}</td>
        <td class="table-price" style="color:var(--accent-green)">${fmt(s.predictedPrice)}</td>
        <td class="table-change positive">+${s.roi.toFixed(1)}%</td>
        <td>${fmtVol(s.volume)}</td>
        <td class="table-change ${tc}" style="${ts}">${ti} ${s.trend}</td>
        <td><span class="tag ${s.confidence>=75?'tag-green':s.confidence>=60?'tag-gold':'tag-red'}">${s.confidence}%</span></td>
      </tr>`;
    }).join('');
  }

  // ══════════════════════ CHARTS ══════════════════════
  function chartOpts() {
    return {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color:'#f0e8e8', font:{family:'Inter',size:11}, boxWidth:12, padding:16 } },
        tooltip: { backgroundColor:'#1e1525', titleColor:'#f0e8e8', bodyColor:'#8a7a7e', borderColor:'#3a2a35', borderWidth:1, padding:12, cornerRadius:8, titleFont:{family:'Inter',weight:'600'}, bodyFont:{family:'JetBrains Mono',size:12} }
      },
      scales: {
        x: { grid:{color:'rgba(42,26,37,0.6)',drawBorder:false}, ticks:{color:'#8a7a7e',font:{family:'Inter',size:11}} },
        y: { grid:{color:'rgba(42,26,37,0.6)',drawBorder:false}, ticks:{color:'#8a7a7e',font:{family:'JetBrains Mono',size:11}} }
      }
    };
  }

  function initPriceChart(months) {
    months = months || 9;
    const cv = document.getElementById('priceChart');
    if (!cv) return;
    if (priceChart) priceChart.destroy();
    const labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'].slice(9-months);
    const colors = ['#e63946','#00d4aa','#ff6b35','#4c8dff','#a855f7'];
    const top5 = [...skinDatabase].sort((a,b) => b.roi-a.roi).slice(0,5);
    const opts = chartOpts();
    opts.scales.y.ticks.callback = v => '$'+v.toFixed(2);
    priceChart = new Chart(cv.getContext('2d'), {
      type:'line',
      data: {
        labels,
        datasets: top5.map((s,i) => ({
          label: s.weapon+' | '+s.name,
          data: s.historicalPrices.slice(9-months),
          borderColor: colors[i], backgroundColor: colors[i]+'20',
          tension:0.4, pointRadius:3, pointHoverRadius:7,
          pointBackgroundColor: colors[i], borderWidth:2.5, fill:false
        }))
      },
      options: opts
    });
  }

  function initTrendChart() {
    const cv = document.getElementById('trendChart');
    if (!cv) return;
    if (trendChart) trendChart.destroy();
    const top10 = [...skinDatabase].sort((a,b) => b.roi-a.roi).slice(0,10);
    const opts = chartOpts();
    opts.scales.y.ticks.callback = v => v+'%';
    opts.plugins.legend.display = false;
    trendChart = new Chart(cv.getContext('2d'), {
      type:'bar',
      data: {
        labels: top10.map(s => s.weapon.split(' ')[0]+' '+s.name.substring(0,8)),
        datasets: [{ label:'ROI %', data:top10.map(s=>s.roi), backgroundColor:'rgba(230,57,70,0.5)', borderColor:'#e63946', borderWidth:1, borderRadius:6, maxBarThickness:50 }]
      },
      options: opts
    });
  }

  function setupChartTabs() {
    document.querySelectorAll('.chart-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const parent = tab.closest('.chart-container');
        if (parent) parent.querySelectorAll('.chart-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const p = tab.dataset.period;
        if (p === '9m') initPriceChart(9);
        else if (p === '6m') initPriceChart(6);
        else if (p === '3m') initPriceChart(3);
      });
    });
  }

  // ══════════════════════ PORTFOLIO ══════════════════════
  function loadPortfolio() {
    try { portfolio = JSON.parse(localStorage.getItem('cs2_portfolio')) || []; } catch { portfolio = []; }
    renderPortfolio();
    populateModal();
  }
  function savePortfolio() { localStorage.setItem('cs2_portfolio', JSON.stringify(portfolio)); }

  function renderPortfolio() {
    const tb = document.getElementById('portfolioTable');
    const empty = document.getElementById('portfolioEmpty');
    const totEl = document.getElementById('portfolioTotal');
    const profEl = document.getElementById('portfolioProfit');
    const itemsEl = document.getElementById('portfolioItems');
    const ppEl = document.getElementById('portfolioProfitPercent');
    const tcEl = document.getElementById('portfolioTotalChange');
    if (!tb) return;
    if (!portfolio.length) {
      tb.innerHTML = '';
      if (empty) empty.style.display = 'block';
      if (totEl) totEl.textContent = '$0.00';
      if (profEl) { profEl.textContent = '$0.00'; profEl.style.color = 'var(--accent-green)'; }
      if (itemsEl) itemsEl.textContent = '0';
      if (ppEl) ppEl.textContent = '—';
      if (tcEl) tcEl.textContent = 'Add skins to start';
      return;
    }
    if (empty) empty.style.display = 'none';
    let totVal = 0, totCost = 0;
    tb.innerHTML = portfolio.map((item, idx) => {
      const skin = skinDatabase.find(s => s.id === item.skinId);
      const cur = skin ? skin.currentPrice : item.buyPrice;
      const tv = cur * item.quantity;
      const tc = item.buyPrice * item.quantity;
      const pl = tv - tc;
      const plp = tc > 0 ? (pl/tc)*100 : 0;
      const cls = pl >= 0 ? 'positive' : 'negative';
      totVal += tv; totCost += tc;
      return `<tr>
        <td class="table-skin-name">${skin ? skin.weapon+' | '+skin.name : item.skinName}</td>
        <td>${item.quantity}</td>
        <td class="table-price">${fmt(item.buyPrice)}</td>
        <td class="table-price">${fmt(cur)}</td>
        <td class="table-change ${cls}">${pl>=0?'+':''}${fmt(pl)}</td>
        <td class="table-change ${cls}">${pl>=0?'+':''}${plp.toFixed(1)}%</td>
        <td><button class="btn-icon" onclick="removePortfolio(${idx})" title="Remove">✕</button></td>
      </tr>`;
    }).join('');
    const totalPL = totVal - totCost;
    const totalPLP = totCost > 0 ? (totalPL/totCost)*100 : 0;
    if (totEl) totEl.textContent = fmt(totVal);
    if (profEl) { profEl.textContent = (totalPL>=0?'+':'')+fmt(totalPL); profEl.style.color = totalPL>=0?'var(--accent-green)':'var(--accent-red)'; }
    if (itemsEl) itemsEl.textContent = portfolio.length;
    if (ppEl) { ppEl.textContent = (totalPL>=0?'+':'')+totalPLP.toFixed(1)+'%'; ppEl.className = 'portfolio-change '+(totalPL>=0?'positive':'negative'); }
    if (tcEl) { tcEl.textContent = 'Invested: '+fmt(totCost); tcEl.className = 'portfolio-change positive'; }
  }

  function populateModal() {
    const sel = document.getElementById('modalSkinSelect');
    if (sel) sel.innerHTML = skinDatabase.map(s => `<option value="${s.id}">${s.weapon} | ${s.name} (${s.condition}) — ${fmt(s.currentPrice)}</option>`).join('');
  }

  window.removePortfolio = (idx) => { portfolio.splice(idx, 1); savePortfolio(); renderPortfolio(); };

  function setupPortfolio() {
    const modal = document.getElementById('addSkinModal');
    const open = () => modal && modal.classList.add('active');
    const close = () => modal && modal.classList.remove('active');
    document.getElementById('addToPortfolioBtn')?.addEventListener('click', open);
    document.getElementById('modalClose')?.addEventListener('click', close);
    document.getElementById('modalCancelBtn')?.addEventListener('click', close);
    if (modal) modal.addEventListener('click', e => { if (e.target === modal) close(); });
    document.getElementById('addSkinForm')?.addEventListener('submit', e => {
      e.preventDefault();
      const sid = document.getElementById('modalSkinSelect')?.value;
      const qty = parseInt(document.getElementById('modalQuantity')?.value) || 1;
      const bp = parseFloat(document.getElementById('modalBuyPrice')?.value) || 0;
      if (sid && bp > 0) {
        const skin = skinDatabase.find(s => s.id === sid);
        portfolio.push({ skinId:sid, skinName:skin?skin.weapon+' | '+skin.name:sid, quantity:qty, buyPrice:bp });
        savePortfolio(); renderPortfolio(); close();
        e.target.reset();
      }
    });
  }

  // ══════════════════════ DASHBOARD PREVIEW ══════════════════════
  function renderDashboardPreview() {
    const top6 = [...skinDatabase].sort((a,b) => b.roi-a.roi).slice(0,6);
    renderInvestmentCards(top6, 'dashboardGrid');
    const dtc = document.getElementById('dashboardTradeups');
    if (dtc) {
      const top3 = [...tradeupDatabase].sort((a,b) => b.profitPercent-a.profitPercent).slice(0,3);
      dtc.innerHTML = top3.map(t => tradeupHTML(t)).join('');
    }
  }

  // ══════════════════════ SCROLL ANIMATIONS ══════════════════════
  function initScrollAnims() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.skin-card,.tradeup-card,.stat-card,.chart-container,.table-wrapper,.portfolio-card').forEach(el => obs.observe(el));
  }

  // ══════════════════════ INIT ══════════════════════
  setupNav();
  renderDashboardStats();
  renderDashboardPreview();
  renderInvestmentCards();
  renderTradeups();
  renderMarketTable();
  setupFilters();
  setupTradeupFilters();
  setupPortfolio();
  loadPortfolio();
  setTimeout(() => { initPriceChart(); initTrendChart(); setupChartTabs(); }, 150);
  init3DCards();
  initScrollAnims();
  initLoadingScreen();
  // Auto-refresh every 5 minutes
  setInterval(fetchLivePrices, 5 * 60 * 1000);
  console.log('🔥 CS2 Howl Investment Tracker loaded — ' + skinDatabase.length + ' skins, ' + tradeupDatabase.length + ' trade-ups');
});

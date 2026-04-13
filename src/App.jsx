import { useState, useEffect, useCallback } from "react";

/* ══════════════════════════════════════════════════════  IMAGES  ══ */
const IMG = {
  /* ── Hero: dramatic dark fine-dining table setting with candles ── */
  hero:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1800&q=90",
  /* ── Menu page hero: gorgeous plated dish close-up ── */
  heroDark:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1800&q=85",
  /* ── Chef hero: professional brigade in action ── */
  chefHero:"https://images.unsplash.com/photo-1606791405792-1004f1718d0c?w=1800&q=85",
  /* ── Experience hero: candlelit luxury table for two ── */
  expHero:"https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1800&q=85",
  /* ── Wine cellar: beautiful arched cellar ── */
  wineHero:"https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1800&q=85",
  /* ── Private dining: intimate event room ── */
  privDining:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1800&q=85",
  /* ── Interiors ── */
  interior1:"https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&q=85",
  interior2:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=85",
  interior3:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=85",
  interior4:"https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=85",
  lounge:"https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=85",
  chef1:"https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=700&q=85",
  chef2:"https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=600&q=85",
  chef3:"https://images.unsplash.com/photo-1583394293214-61c1d3183f82?w=600&q=85",
  chef4:"https://images.unsplash.com/photo-1600565193348-f74bd3960de1?w=600&q=85",
  kitchen:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=85",
  foie:"https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=600&q=80",
  burrata:"https://images.unsplash.com/photo-1631206753348-db44968fd440?w=600&q=80",
  scallops:"https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80",
  bisque:"https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
  tartare:"https://plus.unsplash.com/premium_photo-1661438359424-8f90385561c6?q=80&w=387",
  mushSoup:"https://images.unsplash.com/photo-1608855238293-a8853e7f7c98?w=600&q=80",
  wagyu:"https://plus.unsplash.com/premium_photo-1661438359424-8f90385561c6?q=80&w=387",
  duck:"https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=600&q=80",
  lobster:"https://images.unsplash.com/photo-1560717845-968823efbee1?w=600&q=80",
  lamb:"https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&q=80",
  seabass:"https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80",
  risotto:"https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80",
  fondant:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
  brulee:"https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&q=80",
  millefeuille:"https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
  souffle:"https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80",
  cheese:"https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&q=80",
  macaron:"https://images.unsplash.com/photo-1558326567-98ae2405596b?w=600&q=80",
  martini:"https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&q=80",
  negroni:"https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80",
  oldFash:"https://images.unsplash.com/photo-1762880343746-f9cbfeed9fe3?q=80&w=137",
  champagne:"https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
  espressoMar:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
  wineGlass:"https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80",
  p1:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
  p2:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&q=80",
  p3:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  p4:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
  p5:"https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
  p6:"https://images.unsplash.com/photo-1543353071-873f17a7a088?w=600&q=80",
  p7:"https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80",
  p8:"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80",
  p9:"https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
  p10:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
  p11:"https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
  p12:"https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80",
};

/* ══════════════════════════════════════════════════════  DATA  ══ */
const NAV_LINKS = ["Home","About","Menu","Experience","Chef","Portfolio","Contact"];
const parsePrice = s => parseInt(s.replace(/[₹,]/g,""),10);
const fmt = n => "₹" + n.toLocaleString("en-IN");

const MENU_DATA = {
  Starters:[
    {id:"s1",name:"Foie Gras Torchon",    desc:"Sauternes gelée, brioche toast, micro herbs",    price:"₹2,200",tag:"Chef's Signature",img:IMG.foie},
    {id:"s2",name:"Burrata Heirloom",     desc:"Aged balsamic, basil oil, fleur de sel",         price:"₹1,600",tag:"Vegetarian",      img:IMG.burrata},
    {id:"s3",name:"Seared Scallops",      desc:"Cauliflower velouté, crispy capers, truffle",    price:"₹2,800",tag:"Seasonal",        img:IMG.scallops},
    {id:"s4",name:"Lobster Bisque",       desc:"Cognac cream, chive oil, sourdough crouton",     price:"₹2,100",tag:"Most Loved",      img:IMG.bisque},
    {id:"s5",name:"Wagyu Beef Tartare",   desc:"Quail egg, dijon, cornichons, brioche crisps",   price:"₹3,200",tag:"New",             img:IMG.tartare},
    {id:"s6",name:"Wild Mushroom Velouté",desc:"Hazelnut oil, porcini foam, chervil leaves",     price:"₹1,450",tag:"Vegetarian",      img:IMG.mushSoup},
  ],
  Mains:[
    {id:"m1",name:"Wagyu Tenderloin A5",   desc:"Truffle jus, pomme Anna, white asparagus",       price:"₹8,500",tag:"Most Loved",      img:IMG.wagyu},
    {id:"m2",name:"Duck Breast Confit",    desc:"Cherry reduction, celeriac purée, wilted chard", price:"₹4,200",tag:"Chef's Pick",     img:IMG.duck},
    {id:"m3",name:"Butter-Poached Lobster",desc:"Champagne beurre blanc, saffron risotto",        price:"₹6,800",tag:"Signature",       img:IMG.lobster},
    {id:"m4",name:"Rack of Lamb",          desc:"Herb crust, lamb jus, Lyonnaise potatoes",       price:"₹5,600",tag:"",                img:IMG.lamb},
    {id:"m5",name:"Miso Glazed Sea Bass",  desc:"Dashi broth, pickled radish, yuzu foam",         price:"₹4,800",tag:"Seasonal",        img:IMG.seabass},
    {id:"m6",name:"Black Truffle Risotto", desc:"Aged parmesan, wild mushrooms, 24k gold leaf",   price:"₹3,600",tag:"Vegetarian",      img:IMG.risotto},
  ],
  Desserts:[
    {id:"d1",name:"Valrhona Fondant",      desc:"Salted caramel centre, vanilla bean ice cream",  price:"₹1,200",tag:"Signature",       img:IMG.fondant},
    {id:"d2",name:"Crème Brûlée",         desc:"Madagascar vanilla, seasonal berry compote",      price:"₹980",  tag:"Classic",         img:IMG.brulee},
    {id:"d3",name:"Mille-Feuille",         desc:"Pastry cream, raspberry coulis, 24k gold leaf",  price:"₹1,100",tag:"Chef's Pick",     img:IMG.millefeuille},
    {id:"d4",name:"Soufflé du Jour",       desc:"Ask your server — changes with the moon",        price:"₹1,350",tag:"",                img:IMG.souffle},
    {id:"d5",name:"Cheese Trolley",        desc:"9 artisan cheeses, quince, walnut, honey",       price:"₹1,800",tag:"",                img:IMG.cheese},
    {id:"d6",name:"Petit Fours",           desc:"Macarons, salted truffles, candied citrus",      price:"₹850",  tag:"",                img:IMG.macaron},
  ],
  Cocktails:[
    {id:"c1",name:"Aurum Martini",         desc:"Aged vodka, elderflower, yuzu, edible gold",     price:"₹1,200",tag:"Signature",       img:IMG.martini},
    {id:"c2",name:"Smoked Negroni",        desc:"Hendrick's, Campari, vermouth, rosewood smoke",  price:"₹1,050",tag:"",                img:IMG.negroni},
    {id:"c3",name:"Truffle Old Fashioned", desc:"Bourbon, truffle honey, Angostura, orange peel", price:"₹1,400",tag:"Bar Pick",        img:IMG.oldFash},
    {id:"c4",name:"Champagne Royale",      desc:"Veuve Clicquot, Chambord, fresh raspberry",      price:"₹1,800",tag:"Celebration",     img:IMG.champagne},
    {id:"c5",name:"Espresso Martini",      desc:"Ketel One, Kahlúa, single origin espresso",      price:"₹1,100",tag:"",                img:IMG.espressoMar},
    {id:"c6",name:"Sommelier's Pour",      desc:"Ask Lucien — a glass curated just for you",      price:"₹2,500",tag:"Premium",         img:IMG.wineGlass},
  ],
};
const ALL_ITEMS = Object.values(MENU_DATA).flat();

const TESTIMONIALS = [
  {name:"Priya Mehta",    role:"Food Critic, Condé Nast",  avatar:"PM", quote:"Aurum doesn't just serve food — it orchestrates an entire sensory performance. Transcendent every single time.",stars:5},
  {name:"James Whitfield",role:"CEO, Whitfield Group",      avatar:"JW", quote:"We've hosted board dinners at Aurum for three years. The consistency of excellence is simply unmatched anywhere.",stars:5},
  {name:"Aisha Kapoor",   role:"Travel Blogger, Vogue IN",  avatar:"AK", quote:"If I could only eat at one restaurant for the rest of my life, it would be Aurum. Bold claim — absolutely meant.",stars:5},
  {name:"Rohan Singhania", role:"Michelin Inspector (Ret.)", avatar:"RS", quote:"In 22 years of professional criticism, very few kitchens have left me speechless. Aurum does it on every visit.",stars:5},
];
const TIMELINE = [
  {year:"2008",title:"The Beginning",       desc:"Chef Laurent opens Aurum as a 30-seat bistro in South Mumbai with a single vision: honest luxury.",img:IMG.interior3},
  {year:"2012",title:"First Michelin Star", desc:"Four years of relentless refinement earns Aurum its first star — the first awarded in Maharashtra.",img:IMG.kitchen},
  {year:"2017",title:"The Grand Expansion", desc:"A full renovation transforms Aurum into a 120-seat temple of fine dining with a dedicated private event wing.",img:IMG.interior1},
  {year:"2022",title:"Third Star Awarded",  desc:"Aurum joins a rarefied group of three-star establishments in Asia, cementing its place in global culinary history.",img:IMG.interior4},
];
const CHEF_TEAM = [
  {name:"Chef Laurent Moreau",role:"Executive Chef & Founder",bio:"18 years across Paris, Tokyo & New York. Philosophy: food is emotion — plated.",img:IMG.chef1,awards:["3 Michelin Stars","James Beard Award 2021","Asia's Best Chef 2023"]},
  {name:"Chef Priya Sharma",  role:"Head Pastry Chef",         bio:"World Pastry Champion 2019. Creates edible architecture inspired by Indian geometry.",img:IMG.chef2,awards:["World Pastry Champion","Pastry Chef of the Year, Mumbai 2022"]},
  {name:"Chef Lucien Moreau", role:"Head Sommelier",           bio:"20 years curating rare cellars. Holds WSET Level 4 Diploma with Distinction.",img:IMG.chef3,awards:["Best Sommelier, Asia 2021","Wine Spectator Excellence"]},
  {name:"Chef Aria Kapoor",   role:"Sous Chef",                bio:"Trained at Noma Copenhagen. Specialist in fermentation, foraging, zero-waste.",img:IMG.chef4,awards:["Rising Star, Times Food Awards 2024"]},
];
const EXPERIENCES = [
  {title:"The Grand Tasting Menu",    desc:"An 8-course journey curated by Chef Laurent each season. Wine pairing by Lucien. Duration 3–4 hours.",price:"₹12,000 pp",img:IMG.heroDark,   icon:"🍽️",tag:"Most Popular"},
  {title:"Chef's Table Experience",   desc:"Seat at the pass. Watch the brigade in action. Course-by-course commentary from Chef Laurent himself.",price:"₹18,000 pp",img:IMG.kitchen,   icon:"👨‍🍳",tag:"Exclusive"},
  {title:"Private Wine Cellar Dinner",desc:"Dine inside our 800-label cellar. Lucien guides a 5-course meal paired with irreplaceable vintages.",  price:"₹22,000 pp",img:IMG.wineHero, icon:"🍷",tag:"Intimate"},
  {title:"The Sunrise Brunch",        desc:"Saturday & Sunday. Farm-fresh à la carte, live station, free-flowing Bollinger. 11AM–3PM.",             price:"₹6,500 pp", img:IMG.interior4,icon:"☀️",tag:"Weekend"},
  {title:"Private Events",            desc:"Exclusive rooms for 8–120 guests. Proposals, anniversaries, corporate galas — all bespoke.",             price:"From ₹3L",  img:IMG.privDining,icon:"🥂",tag:"Bespoke"},
  {title:"Luxury Catering",           desc:"Bring the Aurum kitchen to your venue. Michelin-starred quality, anywhere in Mumbai.",                   price:"On request",img:IMG.chef1,    icon:"🚐",tag:""},
];
const PORTFOLIO_ITEMS = [
  {category:"Food",    img:IMG.p1, title:"Wagyu Elegance"},{category:"Food",    img:IMG.p2, title:"Dessert Sculpture"},
  {category:"Interior",img:IMG.p3, title:"The Main Hall"},{category:"Food",    img:IMG.p4, title:"Garden Harvest Plating"},
  {category:"Events",  img:IMG.p5, title:"Private Gala Evening"},{category:"Events",  img:IMG.p6, title:"Candlelit Dinner"},
  {category:"Interior",img:IMG.p7, title:"Wine Cellar"},{category:"Food",    img:IMG.p8, title:"Seasonal Ingredients"},
  {category:"Events",  img:IMG.p9, title:"Corporate Dinner"},{category:"Interior",img:IMG.p10,title:"The Lounge Bar"},
  {category:"Food",    img:IMG.p11,title:"Seasonal Plating"},{category:"Food",    img:IMG.p12,title:"Mise en Place"},
];

/* ══════════════════════════════════════════════════════
   GLOBAL CSS — Redesigned with Playfair + Poppins
══════════════════════════════════════════════════════ */
const G = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Poppins:wght@300;400;500;600&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

:root{
  /* Premium Dark Palette */
  --bg:        #060607;
  --bg2:       #0F0C09;
  --bg3:       #0b5c36;
  --bg4:       #1E1912;
  --bg5:       #241F17;
  /* Gold Spectrum */
  --gold:      #C9A84C;
  --gold-lt:   #E8C97A;
  --gold-pale: #F5E6C0;
  --gold-dim:  rgba(201,168,76,0.15);
  --gold-glow: rgba(201,168,76,0.25);
  /* Text */
  --cream:     #F5EDD6;
  --cream2:    #EDE0C4;
  --muted:     #B0956A;
  --muted2:    #7A6548;
  --muted3:    #4A3D2A;
  /* Accent */
  --green:     #2ECC71;
  /* Fonts */
  --serif:     'Playfair Display', Georgia, serif;
  --sans:      'Poppins', sans-serif;
  /* Shadows */
  --shadow-card: 0 8px 32px rgba(87, 15, 15, 0.45), 0 2px 8px rgba(0,0,0,0.3);
  --shadow-hover: 0 20px 60px rgba(71, 13, 13, 0.6), 0 4px 16px rgba(201,168,76,0.15);
  --shadow-btn:  0 4px 20px rgba(201,168,76,0.35);
  /* Radius */
  --r-sm: 8px;
  --r-md: 14px;
  --r-lg: 20px;
  --r-xl: 28px;
}

html{scroll-behavior:smooth}

body{
  font-family:var(--sans);
  background:var(--bg);
  color:var(--cream);
  line-height:1.75;
  font-weight:300;
  overflow-x:hidden;
  -webkit-font-smoothing:antialiased;
}

::selection{background:var(--gold);color:var(--bg)}
::-webkit-scrollbar{width:5px}
::-webkit-scrollbar-track{background:var(--bg2)}
::-webkit-scrollbar-thumb{background:linear-gradient(to bottom,var(--gold),var(--muted2));border-radius:3px}

a{color:inherit;text-decoration:none}

/* ── ANIMATIONS ── */
.page-in{animation:pgIn .55s cubic-bezier(0.4,0,0.2,1) both}
@keyframes pgIn{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}

.rv{opacity:0;transform:translateY(32px);transition:opacity .8s cubic-bezier(0.4,0,0.2,1),transform .8s cubic-bezier(0.4,0,0.2,1)}
.rv.in{opacity:1;transform:none}
.rv.d1{transition-delay:.1s}.rv.d2{transition-delay:.2s}.rv.d3{transition-delay:.3s}
.rv.d4{transition-delay:.4s}.rv.d5{transition-delay:.5s}.rv.d6{transition-delay:.6s}

@keyframes hUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@keyframes fIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
@keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
@keyframes shimmer{0%{background-position:200% center}100%{background-position:-200% center}}
@keyframes cartPop{0%{transform:scale(1)}40%{transform:scale(1.4)}100%{transform:scale(1)}}
@keyframes slideIn{from{transform:translateX(110%)}to{transform:translateX(0)}}
@keyframes confetti{0%{transform:translateY(-10px) rotate(0deg);opacity:1}100%{transform:translateY(90px) rotate(720deg);opacity:0}}
@keyframes checkDraw{from{stroke-dashoffset:80}to{stroke-dashoffset:0}}
@keyframes ringPulse{0%{transform:scale(1);opacity:0.8}100%{transform:scale(2.2);opacity:0}}
@keyframes successPop{0%{transform:scale(0.8);opacity:0}65%{transform:scale(1.06)}100%{transform:scale(1);opacity:1}}
@keyframes slideUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@keyframes glow{0%,100%{box-shadow:0 0 20px rgba(201,168,76,0.2)}50%{box-shadow:0 0 40px rgba(201,168,76,0.45)}}
@keyframes borderDance{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}

/* ── SHARED ── */
.ic img{transition:transform .65s cubic-bezier(0.4,0,0.2,1),filter .65s ease}
.ic:hover img{transform:scale(1.08);filter:brightness(1.08)}

/* ── GOLD SHIMMER TEXT ── */
.gold-shimmer{
  background:linear-gradient(90deg,var(--gold),var(--gold-pale),var(--gold),#d4af37,var(--gold));
  background-size:200% auto;
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  background-clip:text;
  animation:shimmer 4s linear infinite;
}

/* ── MODAL ── */
.modal-bg{
  position:fixed;inset:0;
  background:rgba(5,4,2,0.94);
  backdrop-filter:blur(12px);
  z-index:600;
  display:flex;align-items:center;justify-content:center;
  padding:1.5rem;
  animation:fIn .28s ease;
}

/* ── CART DRAWER ── */
.cart-drawer{
  position:fixed;top:0;right:0;bottom:0;
  width:min(440px,100vw);
  background:linear-gradient(160deg,var(--bg3),var(--bg4));
  border-left:1px solid rgba(201,168,76,0.2);
  z-index:700;
  display:flex;flex-direction:column;
  animation:slideIn .38s cubic-bezier(0.4,0,0.2,1);
  box-shadow:-20px 0 60px rgba(0,0,0,0.6);
}
.cart-overlay{
  position:fixed;inset:0;
  background:rgba(0,0,0,0.65);
  backdrop-filter:blur(5px);
  z-index:699;
  animation:fIn .28s ease;
}

/* ── QTY / ADD BUTTONS ── */
.qty-btn{
  width:32px;height:32px;
  border:1px solid rgba(201,168,76,0.4);
  background:transparent;
  color:var(--gold);
  cursor:pointer;
  font-size:1.1rem;
  display:flex;align-items:center;justify-content:center;
  transition:all .25s;
  flex-shrink:0;
  border-radius:6px;
}
.qty-btn:hover{background:var(--gold);color:var(--bg);transform:scale(1.1);box-shadow:0 2px 12px rgba(201,168,76,0.4)}

.add-btn{
  display:flex;align-items:center;gap:6px;
  background:rgba(201,168,76,0.1);
  border:1px solid rgba(201,168,76,0.35);
  color:var(--gold);
  padding:0.45rem 1rem;
  font-family:var(--sans);
  font-size:0.62rem;
  letter-spacing:0.12em;
  text-transform:uppercase;
  font-weight:500;
  cursor:pointer;
  transition:all .25s;
  border-radius:6px;
}
.add-btn:hover{background:var(--gold);color:var(--bg);box-shadow:var(--shadow-btn);transform:translateY(-1px)}
.add-btn.in-cart{background:var(--gold);color:var(--bg);border-color:var(--gold);box-shadow:var(--shadow-btn)}

/* ── NAV LINK UNDERLINE ── */
.nav-link{position:relative;overflow:hidden}
.nav-link::after{
  content:'';position:absolute;bottom:-2px;left:0;width:0;height:1.5px;
  background:var(--gold);
  transition:width .35s cubic-bezier(0.4,0,0.2,1);
}
.nav-link:hover::after,.nav-link.active::after{width:100%}

/* ── CARD BASE ── */
.card{
  background:linear-gradient(145deg,var(--bg3),var(--bg4));
  border:1px solid rgba(201,168,76,0.12);
  border-radius:var(--r-md);
  overflow:hidden;
  transition:transform .35s cubic-bezier(0.4,0,0.2,1),box-shadow .35s ease,border-color .35s ease;
  box-shadow:var(--shadow-card);
}
.card:hover{
  transform:translateY(-8px) scale(1.01);
  box-shadow:var(--shadow-hover);
  border-color:rgba(201,168,76,0.4);
}

/* ── SECTION ── */
.section-alt{background:linear-gradient(180deg,var(--bg2),var(--bg3))}
.section-dark{background:var(--bg)}

/* ── DIVIDER ── */
.gold-line{height:1px;background:linear-gradient(to right,transparent,var(--gold),transparent);margin:2rem 0}

/* ── TAGS / BADGES ── */
.badge{
  display:inline-flex;align-items:center;
  font-family:var(--sans);font-size:0.55rem;font-weight:600;
  letter-spacing:0.15em;text-transform:uppercase;
  padding:0.2rem 0.7rem;border-radius:20px;
  background:var(--gold);color:var(--bg);
}

/* ── CONFETTI ── */
.confetti-piece{position:absolute;border-radius:3px;animation:confetti 1.8s ease forwards}

/* ── PRINT ── */
@media print{.no-print{display:none!important}}
`;

/* ══════════════════════════════════════════════════════
   SHARED COMPONENTS
══════════════════════════════════════════════════════ */
function GoldDivider({my="1.5rem"}){
  return(
    <div style={{display:"flex",alignItems:"center",gap:"1rem",margin:`${my} 0`}}>
      <div style={{flex:1,height:"1px",background:"linear-gradient(to right,transparent,rgba(201,168,76,0.5))"}}/>
      <div style={{width:8,height:8,border:"1.5px solid var(--gold)",transform:"rotate(45deg)",flexShrink:0}}/>
      <div style={{width:24,height:1,background:"var(--gold)"}}/>
      <div style={{width:8,height:8,border:"1.5px solid var(--gold)",transform:"rotate(45deg)",flexShrink:0}}/>
      <div style={{flex:1,height:"1px",background:"linear-gradient(to left,transparent,rgba(201,168,76,0.5))"}}/>
    </div>
  );
}

function SLabel({t,center}){
  return(
    <div style={{display:"flex",alignItems:"center",gap:"0.6rem",justifyContent:center?"center":"flex-start",marginBottom:"0.8rem"}}>
      <div style={{width:20,height:1,background:"var(--gold)"}}/>
      <p style={{fontFamily:"var(--sans)",fontSize:"0.62rem",letterSpacing:"0.35em",textTransform:"uppercase",color:"var(--gold)",fontWeight:500}}>{t}</p>
      <div style={{width:20,height:1,background:"var(--gold)"}}/>
    </div>
  );
}

function PrimaryBtn({children,onClick,href="#",size="md",fullWidth}){
  const [h,sH]=useState(false);
  const pad=size==="sm"?"0.55rem 1.3rem":size==="lg"?"1.1rem 2.8rem":"0.85rem 2rem";
  const fs=size==="sm"?"0.6rem":size==="lg"?"0.78rem":"0.68rem";
  return(
    <a href={href} onClick={onClick}
      style={{display:fullWidth?"block":"inline-block",textAlign:"center",fontFamily:"var(--sans)",fontSize:fs,fontWeight:600,letterSpacing:"0.15em",textTransform:"uppercase",cursor:"pointer",padding:pad,borderRadius:"50px",transition:"all .3s cubic-bezier(0.4,0,0.2,1)",border:"none",background:h?"linear-gradient(135deg,#E8C97A,#C9A84C)":"linear-gradient(135deg,#C9A84C,#B8943E)",color:"var(--bg)",boxShadow:h?"var(--shadow-hover), var(--shadow-btn)":"var(--shadow-btn)",transform:h?"translateY(-3px)":"none"}}
      onMouseEnter={()=>sH(true)} onMouseLeave={()=>sH(false)}>{children}</a>
  );
}

function OutlineBtn({children,onClick,href="#",size="md",fullWidth}){
  const [h,sH]=useState(false);
  const pad=size==="sm"?"0.55rem 1.3rem":size==="lg"?"1.1rem 2.8rem":"0.85rem 2rem";
  const fs=size==="sm"?"0.6rem":size==="lg"?"0.78rem":"0.68rem";
  return(
    <a href={href} onClick={onClick}
      style={{display:fullWidth?"block":"inline-block",textAlign:"center",fontFamily:"var(--sans)",fontSize:fs,fontWeight:500,letterSpacing:"0.15em",textTransform:"uppercase",cursor:"pointer",padding:pad,borderRadius:"50px",transition:"all .3s cubic-bezier(0.4,0,0.2,1)",border:`1.5px solid ${h?"var(--gold)":"rgba(201,168,76,0.5)"}`,background:h?"rgba(201,168,76,0.1)":"transparent",color:h?"var(--gold)":"var(--cream)",transform:h?"translateY(-3px)":"none",boxShadow:h?"0 8px 30px rgba(0,0,0,0.3)":"none"}}
      onMouseEnter={()=>sH(true)} onMouseLeave={()=>sH(false)}>{children}</a>
  );
}

function GhBtn({ch,onClick}){
  return <OutlineBtn onClick={onClick}>{ch}</OutlineBtn>;
}
function GBtn({ch,onClick,href="#",outline,sm,block}){
  if(outline) return <OutlineBtn onClick={onClick} href={href} size={sm?"sm":"md"} fullWidth={block}>{ch}</OutlineBtn>;
  return <PrimaryBtn onClick={onClick} href={href} size={sm?"sm":"md"} fullWidth={block}>{ch}</PrimaryBtn>;
}

function useReveal(){
  useEffect(()=>{
    const els=document.querySelectorAll(".rv");
    const io=new IntersectionObserver(en=>{en.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:0.07});
    els.forEach(el=>io.observe(el));
    return()=>io.disconnect();
  });
}

/* ══════════════════════════════════════════════════════
   ORDER CONFIRMED SCREEN
══════════════════════════════════════════════════════ */
function OrderConfirmedScreen({order,onClose,onViewOrders}){
  const [showConfetti,setShowConfetti]=useState(true);
  useEffect(()=>{setTimeout(()=>setShowConfetti(false),3500);},[]);
  const confettiColors=["#C9A84C","#E8C97A","#F5EDD6","#fff","#d4af37","#ffd700","#B8943E"];
  const confettiPieces=Array.from({length:32},(_,i)=>({id:i,color:confettiColors[i%confettiColors.length],left:`${3+(i*2.9)%94}%`,delay:`${(i*0.07)%1.3}s`,size:5+Math.floor(i%5)*3,rotate:i%2===0?"rotate(45deg)":"rotate(0deg)"}));
  const items=Object.values(order.cart);
  const subtotal=items.reduce((s,i)=>s+parsePrice(i.price)*i.qty,0);
  const tax=Math.round(subtotal*0.18);
  const total=subtotal+tax;
  const payLabel=order.form.payment==="card"?"Credit Card":order.form.payment==="upi"?"UPI / GPay":"Pay at Table";
  const steps=[{icon:"✓",label:"Order Received",sub:"Confirmed"},{icon:"👨‍🍳",label:"Kitchen Notified",sub:"In preparation"},{icon:"🍽️",label:"Table Reserved",sub:order.form.date+" · "+order.form.time},{icon:"📧",label:"Confirmation Sent",sub:"Check your email"}];
  return(
    <div style={{position:"fixed",inset:0,background:"linear-gradient(135deg,#0A0806 0%,#16120E 50%,#0A0806 100%)",zIndex:800,overflowY:"auto",display:"flex",flexDirection:"column",alignItems:"center",padding:"3rem 1.5rem 5rem"}}>
      {showConfetti&&<div style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:801,overflow:"hidden"}}>{confettiPieces.map(p=>(<div key={p.id} className="confetti-piece" style={{left:p.left,top:"-12px",background:p.color,width:p.size,height:p.size,animationDelay:p.delay,transform:p.rotate}}/>))}</div>}
      <div style={{maxWidth:720,width:"100%"}}>
        {/* Hero check */}
        <div style={{textAlign:"center",marginBottom:"3rem",animation:"successPop .7s ease both"}}>
          <div style={{position:"relative",display:"inline-block",marginBottom:"2rem"}}>
            <div style={{position:"absolute",inset:-16,borderRadius:"50%",border:"1px solid rgba(201,168,76,0.4)",animation:"ringPulse 2.2s ease infinite"}}/>
            <div style={{position:"absolute",inset:-8,borderRadius:"50%",border:"1px solid rgba(201,168,76,0.2)",animation:"ringPulse 2.2s ease .5s infinite"}}/>
            <div style={{width:100,height:100,borderRadius:"50%",background:"linear-gradient(135deg,rgba(201,168,76,0.25),rgba(201,168,76,0.06))",border:"2px solid var(--gold)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 40px rgba(201,168,76,0.3)",animation:"glow 3s ease infinite"}}>
              <svg width="44" height="44" viewBox="0 0 44 44"><polyline points="9,23 19,33 36,13" fill="none" stroke="#C9A84C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="80" strokeDashoffset="0" style={{animation:"checkDraw .65s ease .35s both"}}/></svg>
            </div>
          </div>
          <h1 style={{fontFamily:"var(--serif)",fontSize:"clamp(2.2rem,5vw,3.5rem)",fontWeight:700,marginBottom:"0.6rem"}} className="gold-shimmer">Order Confirmed!</h1>
          <div style={{display:"inline-flex",alignItems:"center",gap:"0.8rem",background:"rgba(201,168,76,0.08)",border:"1px solid rgba(201,168,76,0.25)",padding:"0.5rem 1.6rem",borderRadius:"50px",marginTop:"0.5rem"}}>
            <span style={{fontSize:"0.58rem",letterSpacing:"0.2em",color:"var(--muted)",textTransform:"uppercase"}}>Order ID</span>
            <span style={{fontFamily:"var(--sans)",fontSize:"0.88rem",color:"var(--gold)",fontWeight:600,letterSpacing:"0.12em"}}>{order.id}</span>
          </div>
          <p style={{fontFamily:"var(--sans)",fontSize:"1rem",color:"var(--muted)",marginTop:"1.5rem",lineHeight:1.7}}>
            Thank you, <strong style={{color:"var(--cream)",fontWeight:500}}>{order.form.name}</strong>. We look forward to welcoming you.
          </p>
        </div>
        {/* Status steps */}
        <div style={{background:"linear-gradient(145deg,var(--bg3),var(--bg4))",border:"1px solid rgba(201,168,76,0.2)",borderRadius:"var(--r-lg)",padding:"2rem",marginBottom:"2rem",boxShadow:"var(--shadow-card)",animation:"slideUp .6s ease .3s both"}}>
          <p style={{fontFamily:"var(--serif)",fontSize:"1.1rem",fontWeight:600,color:"var(--cream)",marginBottom:"1.8rem"}}>Order Status</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"0.5rem"}}>
            {steps.map((s,i)=>(
              <div key={s.label} style={{textAlign:"center",position:"relative"}}>
                {i<steps.length-1&&<div style={{position:"absolute",top:16,left:"62%",right:"-38%",height:"2px",background:"linear-gradient(to right,var(--gold),rgba(201,168,76,0.3))",zIndex:0,borderRadius:"2px"}}/>}
                <div style={{position:"relative",zIndex:1,width:34,height:34,borderRadius:"50%",background:"linear-gradient(135deg,var(--gold),#B8943E)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 0.7rem",fontSize:"0.85rem",color:"var(--bg)",boxShadow:"0 4px 16px rgba(201,168,76,0.4)"}}>{s.icon}</div>
                <p style={{fontSize:"0.65rem",fontWeight:500,color:"var(--cream)",marginBottom:"0.2rem"}}>{s.label}</p>
                <p style={{fontSize:"0.56rem",color:"var(--gold)",letterSpacing:"0.05em"}}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Receipt */}
        <div style={{background:"linear-gradient(145deg,var(--bg3),var(--bg4))",border:"1px solid rgba(201,168,76,0.2)",borderRadius:"var(--r-lg)",overflow:"hidden",marginBottom:"2rem",boxShadow:"var(--shadow-card)",animation:"slideUp .6s ease .5s both"}}>
          <div style={{background:"linear-gradient(135deg,rgba(201,168,76,0.18),rgba(201,168,76,0.04))",borderBottom:"1px solid rgba(201,168,76,0.2)",padding:"1.6rem 2rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>
              <p style={{fontFamily:"var(--serif)",fontSize:"1.7rem",fontWeight:700,color:"var(--gold)",letterSpacing:"0.15em"}}>AURUM<em style={{fontStyle:"italic",fontWeight:400,fontSize:"1.4rem",color:"var(--cream)"}}>.</em></p>
              <p style={{fontSize:"0.62rem",color:"var(--muted)",marginTop:3}}>12, Napean Sea Road · Mumbai 400 006</p>
            </div>
            <div style={{textAlign:"right"}}>
              <p style={{fontSize:"0.58rem",letterSpacing:"0.15em",color:"var(--muted2)",textTransform:"uppercase"}}>Receipt</p>
              <p style={{fontFamily:"var(--sans)",fontSize:"0.8rem",color:"var(--gold)",fontWeight:600,marginTop:3}}>{order.id}</p>
              <p style={{fontSize:"0.62rem",color:"var(--muted2)",marginTop:2}}>{order.placedAt}</p>
            </div>
          </div>
          <div style={{borderBottom:"2px dashed rgba(201,168,76,0.18)"}}/>
          <div style={{padding:"1.4rem 2rem",borderBottom:"1px solid rgba(201,168,76,0.1)",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1rem"}}>
            {[["Guest",order.form.name],["Date",order.form.date||"—"],["Time",order.form.time],["Guests",order.form.guests+" guests"],["Table",order.form.table||"TBD"],["Payment",payLabel]].map(([l,v])=>(
              <div key={l}><p style={{fontSize:"0.52rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--muted2)",marginBottom:3}}>{l}</p><p style={{fontSize:"0.82rem",color:"var(--cream)",fontWeight:400}}>{v}</p></div>
            ))}
          </div>
          <div style={{padding:"0 2rem"}}>
            <p style={{fontSize:"0.6rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--muted2)",padding:"1rem 0 0.7rem"}}>Items Ordered</p>
            {items.map(item=>(
              <div key={item.id} style={{display:"flex",alignItems:"center",gap:"1rem",padding:"0.7rem 0",borderTop:"1px solid rgba(201,168,76,0.07)"}}>
                <img src={item.img} alt={item.name} style={{width:44,height:44,objectFit:"cover",flexShrink:0,borderRadius:"8px",border:"1px solid rgba(201,168,76,0.2)"}}/>
                <div style={{flex:1}}>
                  <p style={{fontFamily:"var(--serif)",fontSize:"0.88rem",fontWeight:600,color:"var(--cream)",lineHeight:1.2}}>{item.name}</p>
                  <p style={{fontSize:"0.66rem",color:"var(--muted2)",marginTop:2}}>Qty {item.qty} × {item.price}</p>
                </div>
                <p style={{fontFamily:"var(--serif)",fontSize:"0.92rem",fontWeight:600,color:"var(--gold)",flexShrink:0}}>{fmt(parsePrice(item.price)*item.qty)}</p>
              </div>
            ))}
          </div>
          <div style={{borderTop:"2px dashed rgba(201,168,76,0.18)",margin:"0.8rem 0"}}/>
          <div style={{padding:"0 2rem 1.8rem",display:"grid",gap:"0.5rem"}}>
            {[["Subtotal",fmt(subtotal)],["GST 18%",fmt(tax)],["Service Charge","Included"]].map(([l,v])=>(
              <div key={l} style={{display:"flex",justifyContent:"space-between"}}>
                <span style={{fontSize:"0.78rem",color:"var(--muted)"}}>{l}</span><span style={{fontSize:"0.78rem",color:"var(--cream2)"}}>{v}</span>
              </div>
            ))}
            <div style={{display:"flex",justifyContent:"space-between",paddingTop:"0.8rem",marginTop:"0.3rem",borderTop:"1px solid rgba(201,168,76,0.25)"}}>
              <span style={{fontFamily:"var(--serif)",fontSize:"1.15rem",fontWeight:600,color:"var(--cream)"}}>Grand Total</span>
              <span style={{fontFamily:"var(--serif)",fontSize:"1.3rem",fontWeight:700,color:"var(--gold)"}}>{fmt(total)}</span>
            </div>
          </div>
          <div style={{background:"rgba(201,168,76,0.06)",borderTop:"1px solid rgba(201,168,76,0.15)",padding:"1rem 2rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <p style={{fontSize:"0.65rem",color:"var(--muted)",fontStyle:"italic",fontFamily:"var(--serif)"}}>Thank you for dining with Aurum.</p>
            <p style={{fontSize:"0.58rem",letterSpacing:"0.08em",color:"var(--muted2)"}}>reserve@aurum.in · +91 22 4001 9999</p>
          </div>
        </div>
        {/* Notes */}
        {order.form.notes&&(
          <div style={{background:"linear-gradient(145deg,var(--bg3),var(--bg4))",border:"1px solid rgba(201,168,76,0.18)",borderRadius:"var(--r-md)",padding:"1.2rem 1.6rem",marginBottom:"2rem",display:"flex",gap:"1rem",alignItems:"flex-start",animation:"slideUp .6s ease .7s both"}}>
            <span style={{fontSize:"1.2rem",flexShrink:0}}>📝</span>
            <div>
              <p style={{fontSize:"0.58rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--muted2)",marginBottom:"0.35rem"}}>Your Special Notes</p>
              <p style={{fontFamily:"var(--serif)",fontSize:"0.95rem",color:"var(--muted)",fontStyle:"italic"}}>{order.form.notes}</p>
            </div>
          </div>
        )}
        {/* What to expect */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1rem",marginBottom:"2.5rem",animation:"slideUp .6s ease .9s both"}}>
          {[{icon:"📍",title:"Find Us",body:"12, Napean Sea Road, Malabar Hill, Mumbai 400 006"},{icon:"🕗",title:"Arrive Early",body:"We recommend arriving 10 minutes before your reservation"},{icon:"👔",title:"Dress Code",body:"Smart casual to formal attire requested"}].map(c=>(
            <div key={c.title} style={{background:"linear-gradient(145deg,var(--bg3),var(--bg4))",border:"1px solid rgba(201,168,76,0.15)",borderRadius:"var(--r-md)",padding:"1.4rem 1.2rem",boxShadow:"var(--shadow-card)"}}>
              <div style={{fontSize:"1.5rem",marginBottom:"0.7rem"}}>{c.icon}</div>
              <p style={{fontFamily:"var(--serif)",fontSize:"0.95rem",fontWeight:600,color:"var(--cream)",marginBottom:"0.4rem"}}>{c.title}</p>
              <p style={{fontSize:"0.73rem",color:"var(--muted)",lineHeight:1.65}}>{c.body}</p>
            </div>
          ))}
        </div>
        {/* Actions */}
        <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",justifyContent:"center",animation:"slideUp .6s ease 1.1s both"}}>
          {[{icon:"🖨️",label:"Print Receipt",fn:()=>window.print()},{icon:"📋",label:"View All Orders",fn:onViewOrders}].map(btn=>(
            <button key={btn.label} onClick={btn.fn}
              style={{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.85rem 1.8rem",background:"linear-gradient(145deg,var(--bg3),var(--bg4))",border:"1px solid rgba(201,168,76,0.3)",borderRadius:"50px",color:"var(--gold)",fontFamily:"var(--sans)",fontSize:"0.62rem",letterSpacing:"0.15em",textTransform:"uppercase",fontWeight:500,cursor:"pointer",transition:"all .3s",boxShadow:"var(--shadow-card)"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--gold)";e.currentTarget.style.background="rgba(201,168,76,0.1)";e.currentTarget.style.transform="translateY(-2px)"}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(201,168,76,0.3)";e.currentTarget.style.background="linear-gradient(145deg,var(--bg3),var(--bg4))";e.currentTarget.style.transform=""}}>
              {btn.icon} {btn.label}
            </button>
          ))}
          <PrimaryBtn size="lg" onClick={onClose}>Back to Aurum ✨</PrimaryBtn>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   ORDER HISTORY PANEL
══════════════════════════════════════════════════════ */
function OrderHistoryPanel({orders,onClose}){
  const [selected,setSelected]=useState(null);
  return(
    <div className="modal-bg" onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{background:"linear-gradient(145deg,var(--bg3),var(--bg4))",border:"1px solid rgba(201,168,76,0.25)",borderRadius:"var(--r-xl)",width:"min(880px,96vw)",maxHeight:"88vh",overflow:"hidden",display:"flex",flexDirection:"column",boxShadow:"var(--shadow-hover)"}}>
        <div style={{padding:"1.8rem 2rem",borderBottom:"1px solid rgba(201,168,76,0.15)",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}}>
          <div>
            <p style={{fontFamily:"var(--serif)",fontSize:"1.5rem",fontWeight:700,color:"var(--cream)"}}>Order History</p>
            <p style={{fontSize:"0.65rem",color:"var(--muted)",marginTop:3,letterSpacing:"0.1em"}}>{orders.length} order{orders.length!==1?"s":""} placed</p>
          </div>
          <button onClick={onClose} style={{background:"rgba(201,168,76,0.1)",border:"1px solid rgba(201,168,76,0.3)",borderRadius:"50%",color:"var(--gold)",width:38,height:38,cursor:"pointer",fontSize:"1rem",transition:"all .25s"}}
            onMouseEnter={e=>{e.currentTarget.style.background="var(--gold)";e.currentTarget.style.color="var(--bg)"}}
            onMouseLeave={e=>{e.currentTarget.style.background="rgba(201,168,76,0.1)";e.currentTarget.style.color="var(--gold)"}}>✕</button>
        </div>
        <div style={{flex:1,overflowY:"auto",padding:"1.5rem 2rem"}}>
          {orders.length===0?(
            <div style={{textAlign:"center",padding:"4rem 0",opacity:0.5}}>
              <div style={{fontSize:"3rem",marginBottom:"1rem"}}>🍽️</div>
              <p style={{fontFamily:"var(--serif)",fontSize:"1.2rem",color:"var(--muted)"}}>No orders yet</p>
            </div>
          ):(
            orders.map((order)=>{
              const items=Object.values(order.cart);
              const total=items.reduce((s,i)=>s+parsePrice(i.price)*i.qty,0);
              const tax=Math.round(total*0.18);
              const isOpen=selected===order.id;
              return(
                <div key={order.id} style={{border:`1px solid ${isOpen?"rgba(201,168,76,0.5)":"rgba(201,168,76,0.15)"}`,borderRadius:"var(--r-md)",marginBottom:"1rem",overflow:"hidden",transition:"all .3s",boxShadow:isOpen?"var(--shadow-card)":"none"}}>
                  <div onClick={()=>setSelected(isOpen?null:order.id)} style={{padding:"1.3rem 1.6rem",display:"flex",alignItems:"center",gap:"1.5rem",cursor:"pointer",background:isOpen?"rgba(201,168,76,0.05)":"transparent",transition:"background .3s"}}>
                    <div style={{width:46,height:46,borderRadius:"50%",background:"linear-gradient(135deg,var(--gold),#B8943E)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"1.1rem",color:"var(--bg)",boxShadow:"0 4px 16px rgba(201,168,76,0.4)"}}>✓</div>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{display:"flex",alignItems:"center",gap:"0.8rem",flexWrap:"wrap"}}>
                        <p style={{fontFamily:"var(--sans)",fontSize:"0.72rem",fontWeight:600,color:"var(--gold)",letterSpacing:"0.1em"}}>{order.id}</p>
                        <span style={{fontSize:"0.56rem",background:"rgba(46,204,113,0.12)",color:"var(--green)",border:"1px solid rgba(46,204,113,0.3)",padding:"0.15rem 0.6rem",borderRadius:"20px",letterSpacing:"0.1em",textTransform:"uppercase",fontWeight:600}}>Confirmed</span>
                      </div>
                      <p style={{fontFamily:"var(--serif)",fontSize:"0.92rem",color:"var(--cream)",marginTop:"0.2rem",fontWeight:500}}>{order.form.name} · {order.form.date} at {order.form.time}</p>
                      <p style={{fontSize:"0.7rem",color:"var(--muted)",marginTop:2}}>{items.length} item{items.length!==1?"s":""} · {order.form.guests} guests</p>
                    </div>
                    <div style={{textAlign:"right",flexShrink:0}}>
                      <p style={{fontFamily:"var(--serif)",fontSize:"1.15rem",fontWeight:700,color:"var(--gold)"}}>{fmt(total+tax)}</p>
                      <p style={{fontSize:"0.62rem",color:"var(--muted)",marginTop:2}}>{order.placedAt}</p>
                    </div>
                    <div style={{color:"var(--gold)",fontSize:"0.8rem",flexShrink:0,transition:"transform .3s",transform:isOpen?"rotate(180deg)":"none"}}>▼</div>
                  </div>
                  {isOpen&&(
                    <div style={{borderTop:"1px solid rgba(201,168,76,0.1)",padding:"1.4rem 1.6rem",background:"rgba(201,168,76,0.02)",animation:"fIn .3s ease"}}>
                      <div style={{display:"flex",gap:"0.6rem",flexWrap:"wrap",marginBottom:"1rem"}}>
                        {items.map(it=>(
                          <div key={it.id} style={{position:"relative"}}>
                            <img src={it.img} alt={it.name} style={{width:56,height:56,objectFit:"cover",borderRadius:"8px",border:"1px solid rgba(201,168,76,0.2)"}}/>
                            <span style={{position:"absolute",top:-6,right:-6,width:18,height:18,borderRadius:"50%",background:"var(--gold)",color:"var(--bg)",fontSize:"0.55rem",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700}}>{it.qty}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(140px,1fr))",gap:"0.8rem",marginBottom:"1rem"}}>
                        {[["Table",order.form.table||"TBD"],["Payment",order.form.payment==="card"?"Credit Card":order.form.payment==="upi"?"UPI/GPay":"Pay at Table"],["Email",order.form.email],["Phone",order.form.phone]].map(([l,v])=>(
                          <div key={l}><p style={{fontSize:"0.53rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--muted2)",fontWeight:500}}>{l}</p><p style={{fontSize:"0.8rem",color:"var(--cream)",marginTop:2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{v}</p></div>
                        ))}
                      </div>
                      {order.form.notes&&<p style={{fontSize:"0.78rem",color:"var(--muted)",fontStyle:"italic",borderTop:"1px solid rgba(201,168,76,0.1)",paddingTop:"0.8rem"}}>📝 {order.form.notes}</p>}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   CART DRAWER
══════════════════════════════════════════════════════ */
function CartDrawer({cart,onClose,onAdd,onRemove,onClear,onOrder}){
  const items=Object.values(cart);
  const subtotal=items.reduce((s,i)=>s+parsePrice(i.price)*i.qty,0);
  const tax=Math.round(subtotal*0.18);
  const total=subtotal+tax;
  return(
    <>
      <div className="cart-overlay" onClick={onClose}/>
      <div className="cart-drawer">
        <div style={{padding:"1.6rem 1.8rem",borderBottom:"1px solid rgba(201,168,76,0.15)",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}}>
          <div>
            <p style={{fontFamily:"var(--serif)",fontSize:"1.5rem",fontWeight:700,color:"var(--cream)"}}>Your Order</p>
            <p style={{fontSize:"0.62rem",letterSpacing:"0.12em",color:"var(--muted)",marginTop:3}}>{items.length} {items.length===1?"item":"items"} selected</p>
          </div>
          <button onClick={onClose} style={{background:"rgba(201,168,76,0.1)",border:"1px solid rgba(201,168,76,0.3)",borderRadius:"50%",color:"var(--gold)",width:36,height:36,cursor:"pointer",fontSize:"0.9rem",transition:"all .25s"}}
            onMouseEnter={e=>{e.currentTarget.style.background="var(--gold)";e.currentTarget.style.color="var(--bg)"}}
            onMouseLeave={e=>{e.currentTarget.style.background="rgba(201,168,76,0.1)";e.currentTarget.style.color="var(--gold)"}}>✕</button>
        </div>
        <div style={{flex:1,overflowY:"auto",padding:"1rem 1.8rem"}}>
          {items.length===0?(
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:"1.2rem",opacity:0.55}}>
              <div style={{fontSize:"3.5rem"}}>🍽️</div>
              <p style={{fontFamily:"var(--serif)",fontSize:"1.15rem",color:"var(--muted)",fontWeight:600}}>Your table is empty</p>
              <p style={{fontSize:"0.78rem",color:"var(--muted2)",textAlign:"center",lineHeight:1.6}}>Browse our menu and add dishes to begin your order</p>
            </div>
          ):(
            items.map(item=>(
              <div key={item.id} style={{display:"flex",gap:"1rem",padding:"1rem 0",borderBottom:"1px solid rgba(201,168,76,0.08)",alignItems:"center"}}>
                <div style={{width:62,height:62,overflow:"hidden",flexShrink:0,borderRadius:"10px",border:"1px solid rgba(201,168,76,0.2)",boxShadow:"0 4px 12px rgba(0,0,0,0.3)"}}>
                  <img src={item.img} alt={item.name} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                </div>
                <div style={{flex:1,minWidth:0}}>
                  <p style={{fontFamily:"var(--serif)",fontSize:"0.92rem",fontWeight:600,color:"var(--cream)",lineHeight:1.2,marginBottom:"0.2rem",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.name}</p>
                  <p style={{fontSize:"0.7rem",color:"var(--gold)",fontWeight:500}}>{item.price} × {item.qty} = {fmt(parsePrice(item.price)*item.qty)}</p>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:7,flexShrink:0}}>
                  <button className="qty-btn" onClick={()=>onRemove(item.id)}>−</button>
                  <span style={{minWidth:22,textAlign:"center",fontSize:"0.92rem",color:"var(--cream)",fontWeight:600}}>{item.qty}</span>
                  <button className="qty-btn" onClick={()=>onAdd(item)}>+</button>
                </div>
              </div>
            ))
          )}
        </div>
        {items.length>0&&(
          <div style={{padding:"1.6rem 1.8rem",borderTop:"1px solid rgba(201,168,76,0.15)",flexShrink:0,background:"var(--bg2)"}}>
            <div style={{display:"flex",flexDirection:"column",gap:"0.5rem",marginBottom:"1.4rem"}}>
              {[["Subtotal",fmt(subtotal)],["GST 18%",fmt(tax)],["Service Charge","Included"]].map(([l,v])=>(
                <div key={l} style={{display:"flex",justifyContent:"space-between"}}>
                  <span style={{fontSize:"0.78rem",color:"var(--muted)"}}>{l}</span>
                  <span style={{fontSize:"0.78rem",color:"var(--cream2)"}}>{v}</span>
                </div>
              ))}
              <div style={{display:"flex",justifyContent:"space-between",paddingTop:"0.9rem",borderTop:"1px solid rgba(201,168,76,0.2)"}}>
                <span style={{fontFamily:"var(--serif)",fontSize:"1.1rem",fontWeight:600,color:"var(--cream)"}}>Total</span>
                <span style={{fontFamily:"var(--serif)",fontSize:"1.25rem",fontWeight:700,color:"var(--gold)"}}>{fmt(total)}</span>
              </div>
            </div>
            <PrimaryBtn fullWidth onClick={onOrder} size="md">Proceed to Checkout →</PrimaryBtn>
            <button onClick={onClear} style={{width:"100%",marginTop:"0.7rem",padding:"0.65rem",background:"transparent",color:"var(--muted2)",fontFamily:"var(--sans)",fontSize:"0.62rem",letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:500,border:"1px solid rgba(201,168,76,0.15)",borderRadius:"50px",cursor:"pointer",transition:"all .25s"}}
              onMouseEnter={e=>{e.target.style.borderColor="rgba(201,168,76,0.4)";e.target.style.color="var(--muted)"}}
              onMouseLeave={e=>{e.target.style.borderColor="rgba(201,168,76,0.15)";e.target.style.color="var(--muted2)"}}>Clear Order</button>
          </div>
        )}
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════════════
   CHECKOUT MODAL
══════════════════════════════════════════════════════ */
function CheckoutModal({cart,onClose,onPlaced}){
  const items=Object.values(cart);
  const subtotal=items.reduce((s,i)=>s+parsePrice(i.price)*i.qty,0);
  const tax=Math.round(subtotal*0.18);
  const total=subtotal+tax;
  const [step,setStep]=useState(1);
  const [form,setForm]=useState({name:"",email:"",phone:"",date:"",time:"19:00",guests:"2",table:"",notes:"",payment:"card"});
  const set=e=>setForm(f=>({...f,[e.target.name]:e.target.value}));
  const inp={width:"100%",background:"rgba(255,255,255,0.04)",border:"none",borderBottom:"1px solid rgba(201,168,76,0.22)",color:"var(--cream)",fontFamily:"var(--sans)",fontSize:"0.88rem",fontWeight:300,padding:"0.8rem 0",outline:"none",transition:"border-color .3s",colorScheme:"dark"};
  const lbl={fontSize:"0.58rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--muted2)",display:"block",marginBottom:"0.3rem",fontWeight:500};
  const payLabel=form.payment==="card"?"Credit Card":form.payment==="upi"?"UPI / GPay":"Pay at Table";
  useEffect(()=>{document.body.style.overflow="hidden";return()=>{document.body.style.overflow="";};},[]);
  return(
    <div className="modal-bg" onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{background:"linear-gradient(145deg,var(--bg3),var(--bg4))",border:"1px solid rgba(201,168,76,0.25)",borderRadius:"var(--r-xl)",width:"min(780px,96vw)",maxHeight:"90vh",overflow:"hidden",display:"flex",flexDirection:"column",boxShadow:"var(--shadow-hover)"}}>
        <div style={{padding:"1.6rem 2rem",borderBottom:"1px solid rgba(201,168,76,0.15)",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}}>
          <div>
            <p style={{fontFamily:"var(--serif)",fontSize:"1.5rem",fontWeight:700,color:"var(--cream)"}}>{step===1?"Dining Details":"Review Your Order"}</p>
            <div style={{display:"flex",gap:"0.5rem",marginTop:"0.5rem",alignItems:"center"}}>
              {[1,2].map(s=>(
                <div key={s} style={{display:"flex",alignItems:"center",gap:"0.4rem"}}>
                  <div style={{width:22,height:22,borderRadius:"50%",border:`1.5px solid ${s<=step?"var(--gold)":"rgba(201,168,76,0.2)"}`,background:s<step?"var(--gold)":s===step?"rgba(201,168,76,0.15)":"transparent",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.55rem",color:s<step?"var(--bg)":"var(--gold)",fontWeight:700,transition:"all .3s"}}>{s<step?"✓":s}</div>
                  {s<2&&<div style={{width:28,height:"1.5px",background:s<step?"var(--gold)":"rgba(201,168,76,0.2)",borderRadius:"2px",transition:"background .3s"}}/>}
                </div>
              ))}
            </div>
          </div>
          <button onClick={onClose} style={{background:"rgba(201,168,76,0.1)",border:"1px solid rgba(201,168,76,0.3)",borderRadius:"50%",color:"var(--gold)",width:38,height:38,cursor:"pointer",fontSize:"0.9rem",transition:"all .25s"}}
            onMouseEnter={e=>{e.currentTarget.style.background="var(--gold)";e.currentTarget.style.color="var(--bg)"}}
            onMouseLeave={e=>{e.currentTarget.style.background="rgba(201,168,76,0.1)";e.currentTarget.style.color="var(--gold)"}}>✕</button>
        </div>
        <div style={{flex:1,overflowY:"auto",padding:"2rem"}}>
          {step===1&&(
            <div style={{display:"grid",gap:"1.5rem"}}>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.2rem"}}>
                <div><label style={lbl}>Full Name *</label><input name="name" required value={form.name} onChange={set} placeholder="Priya Mehta" style={inp} onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="rgba(201,168,76,0.22)"}/></div>
                <div><label style={lbl}>Email *</label><input type="email" name="email" required value={form.email} onChange={set} placeholder="hello@aurum.in" style={inp} onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="rgba(201,168,76,0.22)"}/></div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.2rem"}}>
                <div><label style={lbl}>Phone *</label><input name="phone" required value={form.phone} onChange={set} placeholder="+91 98765 43210" style={inp} onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="rgba(201,168,76,0.22)"}/></div>
                <div><label style={lbl}>Guests</label><select name="guests" value={form.guests} onChange={set} style={{...inp,cursor:"pointer"}}>{["1","2","3","4","5","6","7","8"].map(n=><option key={n} style={{background:"var(--bg3)"}}>{n} {n==="1"?"Guest":"Guests"}</option>)}</select></div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1rem"}}>
                <div><label style={lbl}>Date *</label><input type="date" name="date" value={form.date} onChange={set} style={inp} onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="rgba(201,168,76,0.22)"}/></div>
                <div><label style={lbl}>Time</label><select name="time" value={form.time} onChange={set} style={{...inp,cursor:"pointer"}}>{["18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00"].map(t=><option key={t} style={{background:"var(--bg3)"}}>{t}</option>)}</select></div>
                <div><label style={lbl}>Table No.</label><input name="table" value={form.table} onChange={set} placeholder="e.g. T-7" style={inp} onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="rgba(201,168,76,0.22)"}/></div>
              </div>
              <div><label style={lbl}>Special Notes</label><textarea name="notes" rows={2} value={form.notes} onChange={set} placeholder="Dietary requirements, allergies, occasion…" style={{...inp,resize:"vertical",lineHeight:1.7}} onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="rgba(201,168,76,0.22)"}/></div>
              <div>
                <label style={{...lbl,marginBottom:"0.8rem",display:"block"}}>Payment Method</label>
                <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.8rem"}}>
                  {[["card","💳 Credit Card"],["upi","📱 UPI / GPay"],["cash","💵 Pay at Table"]].map(([v,l])=>(
                    <button key={v} onClick={()=>setForm(f=>({...f,payment:v}))}
                      style={{padding:"0.9rem",border:`1.5px solid ${form.payment===v?"var(--gold)":"rgba(201,168,76,0.2)"}`,background:form.payment===v?"rgba(201,168,76,0.12)":"rgba(255,255,255,0.02)",color:form.payment===v?"var(--gold)":"var(--muted)",fontFamily:"var(--sans)",fontSize:"0.68rem",fontWeight:500,cursor:"pointer",transition:"all .25s",borderRadius:"10px",boxShadow:form.payment===v?"0 0 0 1px rgba(201,168,76,0.3)":"none"}}>{l}</button>
                  ))}
                </div>
              </div>
            </div>
          )}
          {step===2&&(
            <div>
              <p style={{fontFamily:"var(--serif)",fontSize:"1.1rem",fontWeight:600,color:"var(--cream)",marginBottom:"1.2rem"}}>Order Summary</p>
              <div style={{border:"1px solid rgba(201,168,76,0.15)",borderRadius:"var(--r-md)",marginBottom:"1.5rem",overflow:"hidden"}}>
                {items.map((item,i)=>(
                  <div key={item.id} style={{display:"flex",gap:"1rem",padding:"1rem 1.4rem",borderBottom:i<items.length-1?"1px solid rgba(201,168,76,0.08)":"none",alignItems:"center"}}>
                    <img src={item.img} alt={item.name} style={{width:52,height:52,objectFit:"cover",flexShrink:0,borderRadius:"8px",border:"1px solid rgba(201,168,76,0.15)"}}/>
                    <div style={{flex:1}}><p style={{fontFamily:"var(--serif)",fontSize:"0.95rem",fontWeight:600,color:"var(--cream)"}}>{item.name}</p><p style={{fontSize:"0.7rem",color:"var(--muted)",marginTop:2}}>Qty: {item.qty}</p></div>
                    <p style={{fontFamily:"var(--serif)",fontSize:"0.95rem",fontWeight:600,color:"var(--gold)",flexShrink:0}}>{fmt(parsePrice(item.price)*item.qty)}</p>
                  </div>
                ))}
              </div>
              <div style={{border:"1px solid rgba(201,168,76,0.15)",borderRadius:"var(--r-md)",padding:"1.4rem",marginBottom:"1.5rem",display:"grid",gap:"0.55rem"}}>
                {[["Subtotal",fmt(subtotal)],["GST 18%",fmt(tax)]].map(([l,v])=>(
                  <div key={l} style={{display:"flex",justifyContent:"space-between"}}><span style={{fontSize:"0.82rem",color:"var(--muted)"}}>{l}</span><span style={{fontSize:"0.82rem",color:"var(--cream2)"}}>{v}</span></div>
                ))}
                <div style={{display:"flex",justifyContent:"space-between",paddingTop:"0.8rem",borderTop:"1px solid rgba(201,168,76,0.18)"}}>
                  <span style={{fontFamily:"var(--serif)",fontSize:"1.1rem",fontWeight:600,color:"var(--cream)"}}>Total</span>
                  <span style={{fontFamily:"var(--serif)",fontSize:"1.2rem",fontWeight:700,color:"var(--gold)"}}>{fmt(total)}</span>
                </div>
              </div>
              <p style={{fontFamily:"var(--serif)",fontSize:"1.1rem",fontWeight:600,color:"var(--cream)",marginBottom:"1rem"}}>Dining Details</p>
              <div style={{border:"1px solid rgba(201,168,76,0.15)",borderRadius:"var(--r-md)",padding:"1.4rem",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.9rem"}}>
                {[["Name",form.name||"—"],["Email",form.email||"—"],["Phone",form.phone||"—"],["Guests",form.guests],["Date",form.date||"—"],["Time",form.time],["Table",form.table||"TBD"],["Payment",payLabel]].map(([l,v])=>(
                  <div key={l}><p style={{fontSize:"0.58rem",letterSpacing:"0.15em",textTransform:"uppercase",color:"var(--muted2)",fontWeight:500}}>{l}</p><p style={{fontSize:"0.85rem",color:"var(--cream)",marginTop:2}}>{v}</p></div>
                ))}
              </div>
              {form.notes&&<div style={{marginTop:"1rem",padding:"0.9rem 1.4rem",border:"1px solid rgba(201,168,76,0.1)",borderRadius:"var(--r-sm)",fontSize:"0.82rem",color:"var(--muted)",fontStyle:"italic"}}>📝 {form.notes}</div>}
            </div>
          )}
        </div>
        <div style={{padding:"1.4rem 2rem",borderTop:"1px solid rgba(201,168,76,0.15)",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0,background:"var(--bg2)"}}>
          {step>1?(<button onClick={()=>setStep(s=>s-1)} style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(201,168,76,0.25)",borderRadius:"50px",color:"var(--muted)",padding:"0.65rem 1.6rem",fontFamily:"var(--sans)",fontSize:"0.65rem",letterSpacing:"0.15em",textTransform:"uppercase",fontWeight:500,cursor:"pointer",transition:"all .25s"}}
            onMouseEnter={e=>{e.target.style.borderColor="var(--gold)";e.target.style.color="var(--gold)"}}
            onMouseLeave={e=>{e.target.style.borderColor="rgba(201,168,76,0.25)";e.target.style.color="var(--muted)"}}>← Back</button>):<div/>}
          {step===1?(
            <PrimaryBtn size="md" onClick={()=>{if(!form.name||!form.email||!form.phone||!form.date){alert("Please fill in Name, Email, Phone and Date.");return;}setStep(2);}}>Review Order →</PrimaryBtn>
          ):(
            <PrimaryBtn size="md" onClick={()=>{const orderId="AUR-"+Math.random().toString(36).slice(2,8).toUpperCase();const now=new Date();const placedAt=now.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})+" · "+now.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"});onPlaced({id:orderId,cart:{...cart},form:{...form},placedAt});}}>Confirm &amp; Place Order ✓</PrimaryBtn>
          )}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   MENU ITEM MODAL
══════════════════════════════════════════════════════ */
function MenuModal({item,onClose,onAdd,cart}){
  const inCart=!!cart[item.id];
  useEffect(()=>{const fn=e=>{if(e.key==="Escape")onClose()};window.addEventListener("keydown",fn);document.body.style.overflow="hidden";return()=>{window.removeEventListener("keydown",fn);document.body.style.overflow="";};},[onClose]);
  return(
    <div className="modal-bg" onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{background:"linear-gradient(145deg,var(--bg3),var(--bg4))",border:"1px solid rgba(201,168,76,0.25)",borderRadius:"var(--r-xl)",maxWidth:700,width:"100%",overflow:"hidden",boxShadow:"var(--shadow-hover)",position:"relative"}}>
        <button onClick={onClose} style={{position:"absolute",top:16,right:16,zIndex:10,background:"rgba(13,11,8,0.75)",border:"1px solid rgba(201,168,76,0.3)",borderRadius:"50%",color:"var(--gold)",width:36,height:36,cursor:"pointer",fontSize:"0.9rem",transition:"all .25s"}}
          onMouseEnter={e=>{e.currentTarget.style.background="var(--gold)";e.currentTarget.style.color="var(--bg)"}}
          onMouseLeave={e=>{e.currentTarget.style.background="rgba(13,11,8,0.75)";e.currentTarget.style.color="var(--gold)"}}>✕</button>
        <div style={{height:300,overflow:"hidden",position:"relative"}}>
          <img src={item.img} alt={item.name} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(22,18,14,0.95) 0%,rgba(22,18,14,0.3) 50%,transparent 100%)"}}/>
          {item.tag&&<span className="badge" style={{position:"absolute",top:18,left:18}}>{item.tag}</span>}
          <h2 style={{position:"absolute",bottom:22,left:26,fontFamily:"var(--serif)",fontSize:"2.2rem",fontWeight:700,color:"var(--cream)",lineHeight:1.1,textShadow:"0 2px 12px rgba(0,0,0,0.6)"}}>{item.name}</h2>
        </div>
        <div style={{padding:"2rem 2.4rem 2.6rem"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1.2rem"}}>
            <p style={{fontFamily:"var(--sans)",fontSize:"1rem",color:"var(--muted)",fontStyle:"italic"}}>{item.desc}</p>
            <span style={{fontFamily:"var(--serif)",fontSize:"2rem",fontWeight:700,color:"var(--gold)",marginLeft:"1.5rem",flexShrink:0}}>{item.price}</span>
          </div>
          <GoldDivider/>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.9rem",marginTop:"1.2rem",marginBottom:"2rem"}}>
            {[["🌿","Locally Sourced"],["👨‍🍳","Prepared à la minute"],["🥂","Wine pairing available"],["⚠️","Allergens on request"]].map(([ic,tx])=>(
              <div key={tx} style={{display:"flex",alignItems:"center",gap:"0.7rem",padding:"0.65rem 1rem",background:"rgba(201,168,76,0.05)",borderRadius:"8px",border:"1px solid rgba(201,168,76,0.1)"}}>
                <span style={{fontSize:"1.1rem"}}>{ic}</span><span style={{fontSize:"0.75rem",color:"var(--muted2)",fontWeight:400}}>{tx}</span>
              </div>
            ))}
          </div>
          <PrimaryBtn fullWidth onClick={()=>{onAdd(item);onClose();}} size="lg">{inCart?"+ Add Another to Order":"🍽️ Add to Order"}</PrimaryBtn>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════════════════ */
function Navbar({ap,nav,cart,onCartOpen,orderCount,onOrdersOpen}){
  const [sc,setSc]=useState(false);
  const [pulse,setPulse]=useState(false);
  const [menuOpen,setMenuOpen]=useState(false);
  const count=Object.values(cart).reduce((s,i)=>s+i.qty,0);
  useEffect(()=>{const fn=()=>setSc(window.scrollY>60);window.addEventListener("scroll",fn);return()=>window.removeEventListener("scroll",fn);},[]);
  useEffect(()=>{if(count>0){setPulse(true);setTimeout(()=>setPulse(false),450);};},[count]);
  return(
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:500,padding:sc?"0.8rem 5vw":"1.6rem 5vw",background:sc?"rgba(10,8,6,0.97)":"transparent",backdropFilter:sc?"blur(20px)":"none",borderBottom:sc?"1px solid rgba(201,168,76,0.12)":"none",transition:"all .4s cubic-bezier(0.4,0,0.2,1)",display:"flex",alignItems:"center",justifyContent:"space-between",boxShadow:sc?"0 4px 30px rgba(0,0,0,0.5)":"none"}}>
      <button onClick={()=>nav("Home")} style={{fontFamily:"var(--serif)",fontSize:"1.7rem",fontWeight:700,letterSpacing:"0.25em",background:"none",border:"none",cursor:"pointer"}} className="gold-shimmer">
        AURUM<em style={{fontStyle:"italic",fontWeight:400,fontSize:"1.4rem",WebkitTextFillColor:"var(--cream)"}}>.</em>
      </button>
      <ul style={{listStyle:"none",display:"flex",gap:"2.2rem",margin:0}}>
        {NAV_LINKS.map(p=>(
          <li key={p}><button onClick={()=>nav(p)} className={`nav-link${ap===p?" active":""}`}
            style={{background:"none",border:"none",cursor:"pointer",fontFamily:"var(--sans)",fontSize:"0.65rem",letterSpacing:"0.15em",textTransform:"uppercase",fontWeight:500,color:ap===p?"var(--gold)":"rgba(181,155,106,0.85)",transition:"color .3s",padding:"0 0 4px 0"}}
            onMouseEnter={e=>e.target.style.color="var(--cream)"} onMouseLeave={e=>e.target.style.color=ap===p?"var(--gold)":"rgba(181,155,106,0.85)"}>{p}</button></li>
        ))}
      </ul>
      <div style={{display:"flex",gap:"0.8rem",alignItems:"center"}}>
        {orderCount>0&&(
          <button onClick={onOrdersOpen}
            style={{background:"rgba(46,204,113,0.1)",border:"1px solid rgba(46,204,113,0.4)",borderRadius:"50px",color:"var(--green)",padding:"0 1rem",height:38,cursor:"pointer",display:"flex",alignItems:"center",gap:"0.4rem",fontSize:"0.6rem",letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"var(--sans)",fontWeight:600,transition:"all .3s"}}
            onMouseEnter={e=>{e.currentTarget.style.background="rgba(46,204,113,0.2)"}} onMouseLeave={e=>{e.currentTarget.style.background="rgba(46,204,113,0.1)"}}>
            📋 {orderCount} Order{orderCount>1?"s":""}
          </button>
        )}
        <button onClick={onCartOpen}
          style={{position:"relative",background:"rgba(201,168,76,0.1)",border:"1px solid rgba(201,168,76,0.35)",borderRadius:"50%",color:"var(--gold)",width:42,height:42,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem",transition:"all .3s",animation:pulse?"cartPop .4s ease":"none",boxShadow:count>0?"0 0 20px rgba(201,168,76,0.25)":"none"}}
          onMouseEnter={e=>{e.currentTarget.style.background="var(--gold)";e.currentTarget.style.color="var(--bg)"}}
          onMouseLeave={e=>{e.currentTarget.style.background="rgba(201,168,76,0.1)";e.currentTarget.style.color="var(--gold)"}}>
          🛒
          {count>0&&<span style={{position:"absolute",top:-7,right:-7,background:"linear-gradient(135deg,var(--gold),#E8C97A)",color:"var(--bg)",borderRadius:"50%",width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.6rem",fontWeight:700,fontFamily:"var(--sans)",boxShadow:"0 2px 8px rgba(201,168,76,0.5)"}}>{count}</span>}
        </button>
        <PrimaryBtn size="sm" onClick={()=>nav("Contact")}>Book Table</PrimaryBtn>
      </div>
    </nav>
  );
}

/* ══════════════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════════════ */
function Home({nav,cart,addToCart}){
  const [ti,setTi]=useState(0);
  useReveal();
  useEffect(()=>{const t=setInterval(()=>setTi(i=>(i+1)%TESTIMONIALS.length),5500);return()=>clearInterval(t);},[]);
  const featDishes=ALL_ITEMS.filter(d=>["Chef's Signature","Most Loved","Signature"].includes(d.tag)).slice(0,4);

  return(
    <div style={{background:"var(--bg)"}}>

      {/* ─ HERO ─ */}
      <section style={{position:"relative",height:"100vh",minHeight:660,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img src={IMG.hero} alt="Aurum" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",filter:"brightness(0.32) saturate(1.15)"}}/>
        {/* layered overlays */}
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(10,8,6,0.55) 0%,rgba(10,8,6,0.1) 35%,rgba(10,8,6,0.4) 65%,rgba(10,8,6,0.99) 100%)"}}/>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 40%,transparent 35%,rgba(10,8,6,0.45) 100%)"}}/>
        {/* warm amber glow at bottom */}
        <div style={{position:"absolute",bottom:0,left:0,right:0,height:280,background:"linear-gradient(to top,rgba(201,168,76,0.07),transparent)"}}/>
        {/* corner brackets */}
        {[{top:44,left:44},{top:44,right:44},{bottom:120,left:44},{bottom:120,right:44}].map((p,i)=>(
          <div key={i} style={{position:"absolute",...p,width:52,height:52,
            borderTop:p.bottom?"none":"1.5px solid rgba(201,168,76,0.5)",
            borderBottom:p.top?"none":"1.5px solid rgba(201,168,76,0.5)",
            borderLeft:p.right?"none":"1.5px solid rgba(201,168,76,0.5)",
            borderRight:p.left?"none":"1.5px solid rgba(201,168,76,0.5)"}}/>
        ))}
        {/* content */}
        <div style={{position:"relative",zIndex:2,textAlign:"center",padding:"0 5vw",maxWidth:900,animation:"hUp 1.4s cubic-bezier(0.4,0,0.2,1) both"}}>
          <SLabel t="Established 2008 · Mumbai · 3 Michelin Stars" center/>
          <h1 style={{fontFamily:"var(--serif)",fontSize:"clamp(3rem,7.5vw,7rem)",fontWeight:700,color:"var(--cream)",lineHeight:1.05,marginBottom:"1rem",letterSpacing:"-0.01em"}}>
            An Evening<br/><span className="gold-shimmer">Worth Savouring</span>
          </h1>
          <p style={{fontFamily:"var(--sans)",fontSize:"clamp(0.95rem,1.8vw,1.15rem)",fontWeight:300,color:"rgba(181,155,106,0.9)",maxWidth:520,margin:"0 auto 2.8rem",lineHeight:1.8}}>
            Mumbai's most celebrated fine dining destination — three Michelin stars, curated to perfection, one unforgettable evening at a time.
          </p>
          <div style={{display:"flex",gap:"1.2rem",justifyContent:"center",flexWrap:"wrap"}}>
            <PrimaryBtn size="lg" onClick={()=>nav("Contact")}>🍽️ Reserve a Table</PrimaryBtn>
            <OutlineBtn size="lg" onClick={()=>nav("Menu")}>Explore Menu</OutlineBtn>
          </div>
        </div>
        {/* scroll */}
        <div style={{position:"absolute",bottom:46,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:8,animation:"floatY 2.5s ease infinite"}}>
          <div style={{width:1.5,height:50,background:"linear-gradient(to bottom,var(--gold),transparent)"}}/>
          <span style={{fontSize:"0.55rem",letterSpacing:"0.35em",color:"var(--gold)",textTransform:"uppercase",fontWeight:500}}>Scroll</span>
        </div>
        {/* stats bar */}
        <div style={{position:"absolute",bottom:0,left:0,right:0,zIndex:3,display:"flex",background:"rgba(10,8,6,0.85)",backdropFilter:"blur(16px)",borderTop:"1px solid rgba(201,168,76,0.18)"}}>
          {[["⭐ Michelin","3 Stars"],["🏆 Awards","12 International"],["🍷 Wine Cellar","800+ Labels"],["👨‍🍳 Chef","Laurent Moreau"]].map(([l,v])=>(
            <div key={l} style={{flex:1,padding:"1.3rem 1vw",textAlign:"center",borderRight:"1px solid rgba(201,168,76,0.1)"}}>
              <div style={{fontFamily:"var(--serif)",fontSize:"0.95rem",color:"var(--gold-lt)",fontWeight:600}}>{l}</div>
              <div style={{fontFamily:"var(--sans)",fontSize:"0.62rem",letterSpacing:"0.1em",color:"var(--muted)",marginTop:3,fontWeight:300}}>{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─ FEATURED DISHES ─ */}
      <section style={{padding:"8rem 5vw",maxWidth:1360,margin:"0 auto"}}>
        <div className="rv" style={{textAlign:"center",marginBottom:"4rem"}}>
          <SLabel t="Our Creations" center/>
          <h2 style={{fontFamily:"var(--serif)",fontSize:"clamp(2rem,4vw,3.5rem)",fontWeight:700,color:"var(--cream)",marginBottom:"0.5rem"}}>Featured Dishes</h2>
          <GoldDivider/>
          <p style={{fontFamily:"var(--sans)",fontSize:"0.92rem",color:"var(--muted)",marginTop:"0.5rem"}}>Click any dish to explore · Add to your order directly</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:"2rem"}}>
          {featDishes.map((dish,i)=>(
            <div key={i} className={`card ic rv d${i+1}`} onClick={()=>nav("Menu")}
              style={{cursor:"pointer",background:"linear-gradient(145deg,var(--bg3),var(--bg4))"}}>
              <div style={{height:260,overflow:"hidden",position:"relative"}}>
                <img src={dish.img} alt={dish.name} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(22,18,14,0.9) 0%,transparent 55%)"}}/>
                {dish.tag&&<span className="badge" style={{position:"absolute",top:16,left:16}}>{dish.tag}</span>}
                <span style={{position:"absolute",bottom:14,right:16,fontFamily:"var(--serif)",fontSize:"1.35rem",fontWeight:700,color:"var(--gold)",textShadow:"0 2px 8px rgba(0,0,0,0.5)"}}>{dish.price}</span>
              </div>
              <div style={{padding:"1.4rem 1.6rem 1.8rem",display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"1rem"}}>
                <div>
                  <h3 style={{fontFamily:"var(--serif)",fontSize:"1.15rem",fontWeight:600,color:"var(--cream)",marginBottom:"0.3rem"}}>{dish.name}</h3>
                  <p style={{fontSize:"0.78rem",color:"var(--muted2)",lineHeight:1.55}}>{dish.desc}</p>
                </div>
                <button className={`add-btn${cart[dish.id]?" in-cart":""}`} onClick={e=>{e.stopPropagation();addToCart(dish);}} style={{flexShrink:0}}>
                  {cart[dish.id]?`✓ ${cart[dish.id].qty}`:"+ Add"}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:"3rem",display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"}}>
          <PrimaryBtn onClick={()=>nav("Menu")}>Order Now</PrimaryBtn>
          <OutlineBtn onClick={()=>nav("Menu")}>View Full Menu</OutlineBtn>
        </div>
      </section>

      {/* ─ WHY CHOOSE US ─ */}
      <section style={{padding:"6rem 5vw",background:"linear-gradient(180deg,var(--bg2),var(--bg3))",borderTop:"1px solid rgba(201,168,76,0.1)",borderBottom:"1px solid rgba(201,168,76,0.1)"}}>
        <div style={{maxWidth:1260,margin:"0 auto"}}>
          <div className="rv" style={{textAlign:"center",marginBottom:"3.5rem"}}>
            <SLabel t="The Aurum Promise" center/>
            <h2 style={{fontFamily:"var(--serif)",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:700,color:"var(--cream)"}}>Why Choose Us</h2>
            <GoldDivider/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:"2rem"}}>
            {[{icon:"🌿",title:"Farm-to-Table",desc:"Every ingredient sourced fresh daily from certified organic farms and artisan producers."},{icon:"🏆",title:"Award-Winning",desc:"Our brigade holds 3 Michelin stars and recognition from the World's 50 Best Restaurants."},{icon:"✨",title:"Unmatched Ambience",desc:"Every corner of Aurum is designed to transport you — from the lighting to the table linens."},{icon:"🍷",title:"Curated Cellar",desc:"800+ labels selected by our resident sommelier from the finest vineyards worldwide."}].map((u,i)=>(
              <div key={i} className={`rv d${i+1}`}
                style={{padding:"2.5rem 2rem",borderRadius:"var(--r-lg)",textAlign:"center",transition:"all .4s cubic-bezier(0.4,0,0.2,1)",background:"linear-gradient(145deg,var(--bg3),var(--bg4))",border:"1px solid rgba(201,168,76,0.1)",boxShadow:"var(--shadow-card)",cursor:"default"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(201,168,76,0.45)";e.currentTarget.style.transform="translateY(-8px)";e.currentTarget.style.boxShadow="var(--shadow-hover)"}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(201,168,76,0.1)";e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="var(--shadow-card)"}}>
                <div style={{width:64,height:64,borderRadius:"50%",background:"rgba(201,168,76,0.1)",border:"1px solid rgba(201,168,76,0.25)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 1.2rem",fontSize:"1.8rem",boxShadow:"0 4px 20px rgba(201,168,76,0.15)"}}>{u.icon}</div>
                <h3 style={{fontFamily:"var(--serif)",fontSize:"1.2rem",fontWeight:600,color:"var(--gold-lt)",marginBottom:"0.7rem"}}>{u.title}</h3>
                <p style={{fontSize:"0.84rem",color:"var(--muted)",lineHeight:1.75}}>{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─ CHEF HIGHLIGHT ─ */}
      <section style={{padding:"8rem 5vw",maxWidth:1260,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"6rem",alignItems:"center"}}>
        <div className="rv" style={{position:"relative"}}>
          <div style={{borderRadius:"var(--r-xl)",overflow:"hidden",boxShadow:"var(--shadow-hover)"}}>
            <img src={IMG.chef1} alt="Chef Laurent" style={{width:"100%",height:580,objectFit:"cover",objectPosition:"top",display:"block"}}/>
          </div>
          <div style={{position:"absolute",bottom:-25,right:-25,width:130,height:130,border:"2px solid rgba(201,168,76,0.35)",borderRadius:"var(--r-lg)"}}/>
          <div style={{position:"absolute",top:-25,left:-25,width:90,height:90,border:"1.5px solid rgba(201,168,76,0.2)",borderRadius:"var(--r-md)"}}/>
          <div style={{position:"absolute",bottom:36,left:36,background:"linear-gradient(135deg,var(--gold),#B8943E)",padding:"1.3rem 1.8rem",borderRadius:"var(--r-md)",color:"var(--bg)",boxShadow:"var(--shadow-btn)"}}>
            <div style={{fontFamily:"var(--serif)",fontSize:"2.2rem",fontWeight:700,lineHeight:1}}>3</div>
            <div style={{fontFamily:"var(--sans)",fontSize:"0.58rem",letterSpacing:"0.22em",textTransform:"uppercase",marginTop:3,fontWeight:600}}>Michelin Stars</div>
          </div>
        </div>
        <div className="rv d2">
          <SLabel t="Meet the Maestro"/>
          <h2 style={{fontFamily:"var(--serif)",fontSize:"clamp(2.2rem,4vw,3.8rem)",fontWeight:700,color:"var(--cream)",lineHeight:1.1,marginBottom:"0.5rem"}}>
            Chef Laurent<br/><span className="gold-shimmer">Moreau</span>
          </h2>
          <GoldDivider/>
          <p style={{fontFamily:"var(--sans)",fontSize:"1rem",color:"var(--muted)",lineHeight:1.9,marginBottom:"1.2rem",fontWeight:300}}>With over 18 years of mastery across Paris, Tokyo, and New York, Chef Laurent brings a philosophy that food is emotion — plated. His menus are seasonal, instinctive, and deeply personal.</p>
          <p style={{fontFamily:"var(--serif)",fontSize:"1.1rem",color:"var(--muted)",lineHeight:1.85,marginBottom:"2.8rem",fontStyle:"italic",borderLeft:"2px solid var(--gold)",paddingLeft:"1.2rem"}}>"Cooking is not a profession — it is a conversation between the earth and the soul."</p>
          <div style={{display:"flex",gap:"2.5rem",marginBottom:"2.8rem",paddingTop:"1.8rem",borderTop:"1px solid rgba(201,168,76,0.2)"}}>
            {[["18+","Years Mastery"],["3","Michelin Stars"],["12","Global Awards"]].map(([n,l])=>(
              <div key={l}>
                <div style={{fontFamily:"var(--serif)",fontSize:"3rem",fontWeight:700,lineHeight:1}} className="gold-shimmer">{n}</div>
                <div style={{fontFamily:"var(--sans)",fontSize:"0.62rem",letterSpacing:"0.15em",textTransform:"uppercase",color:"var(--muted2)",marginTop:4,fontWeight:500}}>{l}</div>
              </div>
            ))}
          </div>
          <PrimaryBtn onClick={()=>nav("Chef")}>Meet the Full Team</PrimaryBtn>
        </div>
      </section>

      {/* ─ TESTIMONIALS ─ */}
      <section style={{padding:"7rem 5vw",background:"linear-gradient(180deg,var(--bg2),var(--bg3))",borderTop:"1px solid rgba(201,168,76,0.1)"}}>
        <div style={{maxWidth:820,margin:"0 auto",textAlign:"center"}}>
          <SLabel t="Guest Voices" center/>
          <h2 style={{fontFamily:"var(--serif)",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:700,color:"var(--cream)"}}>What They Say</h2>
          <GoldDivider/>
          <div style={{background:"linear-gradient(145deg,var(--bg3),var(--bg4))",border:"1px solid rgba(201,168,76,0.18)",borderRadius:"var(--r-xl)",padding:"3rem 2.5rem",marginTop:"2.5rem",minHeight:200,boxShadow:"var(--shadow-card)",position:"relative"}}>
            <div
  style={{
    fontSize: "4rem",
    color: "rgba(201,168,76,0.2)",
    fontFamily: "Georgia",
    lineHeight: 1,
    position: "absolute",
    top: "1.2rem"
  }}
>
</div>
            <p key={ti} style={{fontFamily:"var(--serif)",fontSize:"clamp(1.1rem,2.5vw,1.65rem)",fontStyle:"italic",fontWeight:400,color:"var(--cream2)",lineHeight:1.65,marginBottom:"2rem",paddingTop:"1rem",animation:"fIn .6s ease"}}>{TESTIMONIALS[ti].quote}</p>
            <div style={{color:"var(--gold)",fontSize:"1.1rem",marginBottom:"0.8rem",letterSpacing:"0.1em"}}>{"★".repeat(TESTIMONIALS[ti].stars)}</div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.8rem"}}>
              <div style={{width:40,height:40,borderRadius:"50%",background:"linear-gradient(135deg,var(--gold),#B8943E)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--sans)",fontSize:"0.75rem",fontWeight:700,color:"var(--bg)"}}>{TESTIMONIALS[ti].avatar}</div>
              <div>
                <p style={{fontFamily:"var(--sans)",fontSize:"0.88rem",color:"var(--cream)",fontWeight:600}}>{TESTIMONIALS[ti].name}</p>
                <p style={{fontSize:"0.68rem",letterSpacing:"0.1em",color:"var(--muted)",marginTop:2}}>{TESTIMONIALS[ti].role}</p>
              </div>
            </div>
          </div>
          <div style={{display:"flex",justifyContent:"center",gap:"0.7rem",marginTop:"1.8rem"}}>
            {TESTIMONIALS.map((_,i)=>(<button key={i} onClick={()=>setTi(i)} style={{width:i===ti?32:10,height:5,background:i===ti?"var(--gold)":"rgba(201,168,76,0.25)",border:"none",cursor:"pointer",borderRadius:3,transition:"all .4s cubic-bezier(0.4,0,0.2,1)"}}/>))}
          </div>
        </div>
      </section>

      {/* ─ GALLERY PREVIEW ─ */}
      <section style={{padding:"8rem 5vw",maxWidth:1360,margin:"0 auto"}}>
        <div className="rv" style={{textAlign:"center",marginBottom:"3.5rem"}}>
          <SLabel t="The Aurum World" center/>
          <h2 style={{fontFamily:"var(--serif)",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:700,color:"var(--cream)"}}>Gallery Preview</h2>
          <GoldDivider/>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1rem"}}>
          {PORTFOLIO_ITEMS.slice(0,6).map((item,i)=>(
            <div key={i} className={`ic rv d${i+1}`}
              style={{overflow:"hidden",aspectRatio:i===0?"16/9":"1/1",gridColumn:i===0?"span 2":"span 1",cursor:"zoom-in",position:"relative",borderRadius:"var(--r-md)",border:"1px solid rgba(201,168,76,0.12)",boxShadow:"var(--shadow-card)"}}>
              <img src={item.img} alt={item.title} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
              <div style={{position:"absolute",inset:0,background:"rgba(10,8,6,0.55)",opacity:0,transition:"opacity .3s",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"0.5rem",borderRadius:"var(--r-md)"}}
                onMouseEnter={e=>e.currentTarget.style.opacity="1"} onMouseLeave={e=>e.currentTarget.style.opacity="0"}>
                <p style={{fontFamily:"var(--serif)",color:"var(--cream)",fontSize:"1.05rem",fontWeight:600}}>{item.title}</p>
                <span style={{fontSize:"0.6rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--gold)",fontWeight:500}}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:"3rem"}}><OutlineBtn size="lg" onClick={()=>nav("Portfolio")}>View Full Portfolio</OutlineBtn></div>
      </section>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   ABOUT PAGE
══════════════════════════════════════════════════════ */
function About(){
  useReveal();
  return(
    <div style={{background:"var(--bg)",paddingTop:"5rem"}} className="page-in">
      <section style={{maxWidth:1260,margin:"0 auto",padding:"6rem 5vw",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"6rem",alignItems:"center"}}>
        <div className="rv">
          <SLabel t="Our Story"/>
          <h2 style={{fontFamily:"var(--serif)",fontSize:"clamp(2.5rem,5vw,4.2rem)",fontWeight:700,color:"var(--cream)",lineHeight:1.1,marginBottom:"1rem"}}>Born from<br/><span className="gold-shimmer">Passion.</span><br/>Refined by Time.</h2>
          <GoldDivider/>
          <div style={{marginTop:"1.8rem"}}>
            {["Aurum was never meant to be just a restaurant. When Chef Laurent Moreau arrived in Mumbai in 2008, he found a city hungry for something different — something that honoured tradition while embracing the bold.",
              "What began as a 30-seat bistro in Colaba has grown into one of Asia's most celebrated dining destinations. Three Michelin stars, countless memories, and an unwavering commitment to the idea that dining is theatre."].map((p,i)=>(<p key={i} style={{fontFamily:"var(--sans)",fontSize:"0.95rem",color:"var(--muted)",lineHeight:1.9,marginBottom:"1.3rem",fontWeight:300}}>{p}</p>))}
          </div>
        </div>
        <div className="rv d2" style={{position:"relative"}}>
          <div style={{borderRadius:"var(--r-xl)",overflow:"hidden",boxShadow:"var(--shadow-hover)"}}>
            <img src={IMG.interior3} alt="Aurum interior" style={{width:"100%",height:520,objectFit:"cover",display:"block"}}/>
          </div>
          <div style={{position:"absolute",bottom:-24,left:-24,background:"linear-gradient(135deg,var(--gold),#B8943E)",padding:"1.5rem 2rem",borderRadius:"var(--r-md)",color:"var(--bg)",boxShadow:"var(--shadow-btn)"}}>
            <div style={{fontFamily:"var(--serif)",fontSize:"2.8rem",fontWeight:700,lineHeight:1}}>2008</div>
            <div style={{fontFamily:"var(--sans)",fontSize:"0.58rem",letterSpacing:"0.22em",textTransform:"uppercase",marginTop:3,fontWeight:600}}>Est. Mumbai</div>
          </div>
        </div>
      </section>
      <section style={{padding:"0 5vw 6rem",maxWidth:1260,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gridTemplateRows:"300px 300px",gap:"1rem"}}>
          {[IMG.interior1,IMG.lounge,IMG.interior2,IMG.interior4,IMG.kitchen].map((src,i)=>(
            <div key={i} className="ic" style={{overflow:"hidden",gridColumn:i===0?"span 2":"span 1",gridRow:i===0?"span 2":"span 1",borderRadius:"var(--r-md)",border:"1px solid rgba(201,168,76,0.12)",boxShadow:"var(--shadow-card)"}}>
              <img src={src} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
            </div>
          ))}
        </div>
      </section>
      {/* Timeline */}
      <section style={{background:"linear-gradient(180deg,var(--bg2),var(--bg3))",borderTop:"1px solid rgba(201,168,76,0.1)",borderBottom:"1px solid rgba(201,168,76,0.1)",padding:"7rem 5vw"}}>
        <div style={{maxWidth:1060,margin:"0 auto"}}>
          <div className="rv" style={{textAlign:"center",marginBottom:"4.5rem"}}>
            <SLabel t="Our Journey" center/>
            <h2 style={{fontFamily:"var(--serif)",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:700,color:"var(--cream)"}}>Milestones</h2>
            <GoldDivider/>
          </div>
          <div style={{display:"grid",gap:"3.5rem"}}>
            {TIMELINE.map((item,i)=>(
              <div key={i} className={`rv d${i%4+1}`} style={{display:"grid",gridTemplateColumns:i%2===0?"1fr auto 1fr":"1fr auto 1fr",gap:"2.5rem",alignItems:"center"}}>
                {i%2===0?(<>
                  <div style={{textAlign:"right"}}>
                    <div style={{borderRadius:"var(--r-md)",overflow:"hidden",boxShadow:"var(--shadow-card)",display:"inline-block",marginBottom:"1rem",border:"1px solid rgba(201,168,76,0.2)"}}>
                      <img src={item.img} alt={item.title} style={{width:240,height:150,objectFit:"cover",display:"block"}}/>
                    </div>
                    <span style={{fontFamily:"var(--serif)",fontSize:"2rem",fontWeight:700,display:"block"}} className="gold-shimmer">{item.year}</span>
                    <h3 style={{fontFamily:"var(--serif)",fontSize:"1.25rem",fontWeight:600,color:"var(--cream)",margin:"0.25rem 0"}}>{item.title}</h3>
                    <p style={{fontSize:"0.83rem",color:"var(--muted)",lineHeight:1.7,fontWeight:300}}>{item.desc}</p>
                  </div>
                  <div style={{display:"flex",justifyContent:"center"}}><div style={{width:14,height:14,borderRadius:"50%",background:"linear-gradient(135deg,var(--gold),#B8943E)",boxShadow:"0 0 0 5px rgba(201,168,76,0.2)"}}/>
                  </div><div/>
                </>):(<>
                  <div/>
                  <div style={{display:"flex",justifyContent:"center"}}><div style={{width:14,height:14,borderRadius:"50%",background:"linear-gradient(135deg,var(--gold),#B8943E)",boxShadow:"0 0 0 5px rgba(201,168,76,0.2)"}}/></div>
                  <div>
                    <div style={{borderRadius:"var(--r-md)",overflow:"hidden",boxShadow:"var(--shadow-card)",display:"inline-block",marginBottom:"1rem",border:"1px solid rgba(201,168,76,0.2)"}}>
                      <img src={item.img} alt={item.title} style={{width:240,height:150,objectFit:"cover",display:"block"}}/>
                    </div>
                    <span style={{fontFamily:"var(--serif)",fontSize:"2rem",fontWeight:700,display:"block"}} className="gold-shimmer">{item.year}</span>
                    <h3 style={{fontFamily:"var(--serif)",fontSize:"1.25rem",fontWeight:600,color:"var(--cream)",margin:"0.25rem 0"}}>{item.title}</h3>
                    <p style={{fontSize:"0.83rem",color:"var(--muted)",lineHeight:1.7,fontWeight:300}}>{item.desc}</p>
                  </div>
                </>)}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Awards */}
      <section style={{padding:"7rem 5vw",maxWidth:1260,margin:"0 auto"}}>
        <div className="rv" style={{textAlign:"center",marginBottom:"3.5rem"}}>
          <SLabel t="Recognition" center/>
          <h2 style={{fontFamily:"var(--serif)",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:700,color:"var(--cream)"}}>Awards & Acclaim</h2>
          <GoldDivider/>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:"2rem"}}>
          {[["⭐⭐⭐","Michelin Stars","2022–Present"],["🥇","Asia's Best Restaurant","World's 50 Best, 2023"],["🍷","Best Wine Programme","James Beard, 2021"],["🏛️","Luxury Dining Award","Condé Nast, 2024"]].map(([icon,award,org])=>(
            <div key={award} className="rv"
              style={{textAlign:"center",padding:"2.8rem 1.8rem",borderRadius:"var(--r-lg)",background:"linear-gradient(145deg,var(--bg3),var(--bg4))",border:"1px solid rgba(201,168,76,0.12)",boxShadow:"var(--shadow-card)",transition:"all .35s"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(201,168,76,0.5)";e.currentTarget.style.transform="translateY(-8px)";e.currentTarget.style.boxShadow="var(--shadow-hover)"}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(201,168,76,0.12)";e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="var(--shadow-card)"}}>
              <div style={{fontSize:"2.5rem",marginBottom:"1rem"}}>{icon}</div>
              <p style={{fontFamily:"var(--serif)",fontSize:"1.1rem",fontWeight:600,color:"var(--gold-lt)",marginBottom:"0.4rem"}}>{award}</p>
              <p style={{fontSize:"0.68rem",letterSpacing:"0.12em",color:"var(--muted2)",textTransform:"uppercase",fontWeight:500}}>{org}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   MENU PAGE
══════════════════════════════════════════════════════ */
function Menu({cart,addToCart,removeFromCart}){
  const [active,setActive]=useState("Starters");
  const [modal,setModal]=useState(null);
  useReveal();
  const totalInCart=Object.values(cart).reduce((s,i)=>s+i.qty,0);
  return(
    <div style={{background:"var(--bg)",paddingTop:"5rem"}} className="page-in">
      {/* Hero banner */}
      <section style={{position:"relative",height:380,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img src={IMG.heroDark} alt="Menu" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",filter:"brightness(0.22)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(10,8,6,0.4),rgba(10,8,6,0.96))"}}/>
        <div style={{position:"relative",zIndex:2,textAlign:"center",padding:"0 5vw"}}>
          <SLabel t="À la Carte" center/>
          <h1 style={{fontFamily:"var(--serif)",fontSize:"clamp(2.8rem,6vw,5rem)",fontWeight:700,color:"var(--cream)"}}>The <span className="gold-shimmer">Menu</span></h1>
          <GoldDivider/>
          <p style={{fontFamily:"var(--sans)",fontSize:"0.92rem",color:"var(--muted)",marginTop:"0.3rem"}}>Click any dish for details · Use <strong style={{color:"var(--gold)",fontWeight:600}}>+ Add</strong> to build your order</p>
        </div>
      </section>

      {/* Cart summary banner */}
      {totalInCart>0&&(
        <div style={{background:"linear-gradient(135deg,rgba(201,168,76,0.12),rgba(201,168,76,0.06))",border:"none",borderTop:"1px solid rgba(201,168,76,0.2)",borderBottom:"1px solid rgba(201,168,76,0.2)",padding:"1rem 5vw",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div style={{display:"flex",alignItems:"center",gap:"0.8rem"}}>
            <span style={{fontSize:"1.2rem"}}>🛒</span>
            <p style={{fontFamily:"var(--sans)",fontSize:"0.92rem",color:"var(--cream)",fontWeight:500}}>{totalInCart} item{totalInCart>1?"s":""} in your order — <span style={{color:"var(--gold)",fontWeight:700}}>{fmt(Object.values(cart).reduce((s,i)=>s+parsePrice(i.price)*i.qty,0))}</span></p>
          </div>
          <OutlineBtn size="sm" onClick={()=>{}}>View Cart</OutlineBtn>
        </div>
      )}

      {/* Tab buttons */}
      <div style={{display:"flex",justifyContent:"center",gap:"0.8rem",padding:"3rem 5vw 2rem",flexWrap:"wrap"}}>
        {Object.keys(MENU_DATA).map(t=>(
          <button key={t} onClick={()=>setActive(t)}
            style={{fontFamily:"var(--sans)",fontSize:"0.68rem",letterSpacing:"0.15em",textTransform:"uppercase",fontWeight:600,padding:"0.75rem 2rem",border:`1.5px solid ${active===t?"var(--gold)":"rgba(201,168,76,0.22)"}`,background:active===t?"linear-gradient(135deg,var(--gold),#B8943E)":"transparent",color:active===t?"var(--bg)":"var(--muted)",cursor:"pointer",borderRadius:"50px",transition:"all .3s",boxShadow:active===t?"var(--shadow-btn)":"none",transform:active===t?"scale(1.02)":"scale(1)"}}>{t}</button>
        ))}
      </div>

      {/* Menu cards grid */}
      <div style={{maxWidth:1360,margin:"0 auto",padding:"0 5vw 8rem",display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(290px,1fr))",gap:"2rem"}}>
        {MENU_DATA[active].map((item,i)=>{
          const qty=cart[item.id]?.qty||0;
          return(
            <div key={item.id} className={`rv d${Math.min(i+1,6)}`}
              style={{background:"linear-gradient(145deg,var(--bg3),var(--bg4))",borderRadius:"var(--r-lg)",border:`1.5px solid ${qty>0?"rgba(201,168,76,0.55)":"rgba(201,168,76,0.1)"}`,overflow:"hidden",transition:"all .35s cubic-bezier(0.4,0,0.2,1)",boxShadow:qty>0?"var(--shadow-card),0 0 0 2px rgba(201,168,76,0.15)":"var(--shadow-card)",cursor:"pointer"}}
              onMouseEnter={e=>{if(!qty){e.currentTarget.style.borderColor="rgba(201,168,76,0.45)";e.currentTarget.style.transform="translateY(-8px)";e.currentTarget.style.boxShadow="var(--shadow-hover)"}}}
              onMouseLeave={e=>{if(!qty){e.currentTarget.style.borderColor="rgba(201,168,76,0.1)";e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="var(--shadow-card)"}}}>
              {/* image */}
              <div style={{height:220,overflow:"hidden",position:"relative"}} onClick={()=>setModal(item)}>
                <img src={item.img} alt={item.name} style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform .6s ease"}}
                  onMouseEnter={e=>e.target.style.transform="scale(1.08)"} onMouseLeave={e=>e.target.style.transform=""}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(22,18,14,0.85) 0%,transparent 55%)"}}/>
                {item.tag&&<span className="badge" style={{position:"absolute",top:14,left:14}}>{item.tag}</span>}
                {qty>0&&<span style={{position:"absolute",top:14,right:14,width:26,height:26,borderRadius:"50%",background:"linear-gradient(135deg,var(--gold),#B8943E)",color:"var(--bg)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.72rem",fontWeight:700,boxShadow:"0 4px 12px rgba(201,168,76,0.5)"}}>{qty}</span>}
                <span style={{position:"absolute",bottom:14,right:16,fontFamily:"var(--serif)",fontSize:"1.35rem",fontWeight:700,color:"var(--gold)",textShadow:"0 2px 8px rgba(0,0,0,0.6)"}}>{item.price}</span>
              </div>
              {/* body */}
              <div style={{padding:"1.4rem 1.6rem 1.8rem"}}>
                <h3 style={{fontFamily:"var(--serif)",fontSize:"1.15rem",fontWeight:600,color:"var(--cream)",marginBottom:"0.4rem",cursor:"pointer"}} onClick={()=>setModal(item)}>{item.name}</h3>
                <p style={{fontSize:"0.78rem",color:"var(--muted2)",lineHeight:1.6,marginBottom:"1.2rem"}}>{item.desc}</p>
                {/* controls */}
                {qty===0?(
                  <button className="add-btn" onClick={()=>addToCart(item)} style={{width:"100%",justifyContent:"center",padding:"0.6rem"}}>🍽️ Add to Order</button>
                ):(
                  <div style={{display:"flex",alignItems:"center",gap:"0.6rem",background:"rgba(201,168,76,0.06)",border:"1px solid rgba(201,168,76,0.25)",borderRadius:"50px",padding:"0.3rem 0.6rem"}}>
                    <button className="qty-btn" onClick={()=>removeFromCart(item.id)} style={{width:28,height:28,fontSize:"1rem",borderRadius:"50%"}}>−</button>
                    <span style={{flex:1,textAlign:"center",fontFamily:"var(--serif)",fontSize:"1rem",fontWeight:700,color:"var(--gold)"}}>{qty} added</span>
                    <button className="qty-btn" onClick={()=>addToCart(item)} style={{width:28,height:28,fontSize:"1rem",borderRadius:"50%"}}>+</button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {modal&&<MenuModal item={modal} onClose={()=>setModal(null)} onAdd={addToCart} cart={cart}/>}
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   EXPERIENCE, CHEF, PORTFOLIO, CONTACT, FOOTER
══════════════════════════════════════════════════════ */
function Experience({nav}){
  useReveal();
  return(
    <div style={{background:"var(--bg)",paddingTop:"5rem"}} className="page-in">
      <section style={{position:"relative",height:480,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img src={IMG.expHero} alt="Experience" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",filter:"brightness(0.26)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(10,8,6,0.4),rgba(10,8,6,0.96))"}}/>
        <div style={{position:"relative",zIndex:2,textAlign:"center",padding:"0 5vw"}}>
          <SLabel t="Beyond a Meal" center/>
          <h1 style={{fontFamily:"var(--serif)",fontSize:"clamp(2.8rem,6vw,5.5rem)",fontWeight:700,color:"var(--cream)",marginBottom:"1rem"}}>Curated <span className="gold-shimmer">Experiences</span></h1>
          <GoldDivider/>
          <p style={{fontFamily:"var(--sans)",fontSize:"1rem",color:"var(--muted)",maxWidth:520,margin:"0 auto",fontWeight:300}}>Every visit to Aurum is unique. Choose an experience tailored to your occasion.</p>
        </div>
      </section>
      <section style={{maxWidth:1360,margin:"0 auto",padding:"6rem 5vw"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(380px,1fr))",gap:"2.5rem"}}>
          {EXPERIENCES.map((exp,i)=>(
            <div key={exp.title} className={`ic rv d${Math.min(i+1,4)}`}
              style={{borderRadius:"var(--r-xl)",background:"linear-gradient(145deg,var(--bg3),var(--bg4))",border:"1px solid rgba(201,168,76,0.12)",overflow:"hidden",transition:"all .4s cubic-bezier(0.4,0,0.2,1)",boxShadow:"var(--shadow-card)"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(201,168,76,0.5)";e.currentTarget.style.transform="translateY(-8px)";e.currentTarget.style.boxShadow="var(--shadow-hover)"}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(201,168,76,0.12)";e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="var(--shadow-card)"}}>
              <div style={{height:260,overflow:"hidden",position:"relative"}}>
                <img src={exp.img} alt={exp.title} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(22,18,14,0.9) 0%,transparent 50%)"}}/>
                {exp.tag&&<span className="badge" style={{position:"absolute",top:16,left:16}}>{exp.tag}</span>}
                <div style={{position:"absolute",bottom:18,left:20,fontSize:"2.2rem"}}>{exp.icon}</div>
              </div>
              <div style={{padding:"2rem 2.2rem 2.5rem"}}>
                <h3 style={{fontFamily:"var(--serif)",fontSize:"1.4rem",fontWeight:700,color:"var(--cream)",marginBottom:"0.7rem"}}>{exp.title}</h3>
                <p style={{fontSize:"0.85rem",color:"var(--muted)",lineHeight:1.8,marginBottom:"1.6rem",fontWeight:300}}>{exp.desc}</p>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:"1.2rem",borderTop:"1px solid rgba(201,168,76,0.15)"}}>
                  <span style={{fontFamily:"var(--serif)",fontSize:"1.2rem",fontWeight:700,color:"var(--gold)"}}>{exp.price}</span>
                  <PrimaryBtn size="sm" onClick={()=>nav("Contact")}>Enquire Now</PrimaryBtn>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section style={{position:"relative",height:440,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img src={IMG.privDining} alt="Private Dining" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",filter:"brightness(0.25)"}}/>
        <div style={{position:"absolute",inset:0,background:"rgba(10,8,6,0.55)"}}/>
        <div style={{position:"relative",zIndex:2,textAlign:"center",padding:"0 5vw"}}>
          <p style={{fontFamily:"var(--serif)",fontSize:"clamp(1.8rem,3.5vw,3.2rem)",fontWeight:600,color:"var(--cream)",fontStyle:"italic",marginBottom:"2rem",textShadow:"0 2px 20px rgba(0,0,0,0.5)"}}>Planning something special?</p>
          <PrimaryBtn size="lg" onClick={()=>nav("Contact")}>🥂 Talk to Our Events Team</PrimaryBtn>
        </div>
      </section>
    </div>
  );
}

function Chef(){
  useReveal();
  return(
    <div style={{background:"var(--bg)",paddingTop:"5rem"}} className="page-in">
      <section style={{position:"relative",height:500,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img src={IMG.chefHero} alt="Chef" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",filter:"brightness(0.25)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(10,8,6,0.35),rgba(10,8,6,0.96))"}}/>
        <div style={{position:"relative",zIndex:2,textAlign:"center",padding:"0 5vw"}}>
          <SLabel t="The Artisans" center/>
          <h1 style={{fontFamily:"var(--serif)",fontSize:"clamp(2.8rem,6vw,5rem)",fontWeight:700,color:"var(--cream)",marginBottom:"0.6rem"}}>Faces Behind<br/><span className="gold-shimmer">the Flavour</span></h1>
          <GoldDivider/>
          <p style={{fontFamily:"var(--sans)",fontSize:"1rem",color:"var(--muted)",maxWidth:480,margin:"0 auto",fontWeight:300}}>Extraordinary food is made by extraordinary people. Meet the brigade.</p>
        </div>
      </section>
      <section style={{maxWidth:1260,margin:"0 auto",padding:"7rem 5vw"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:"2.5rem"}}>
          {CHEF_TEAM.map((chef,i)=>(
            <div key={chef.name} className={`ic rv d${Math.min(i+1,4)}`}
              style={{borderRadius:"var(--r-xl)",background:"linear-gradient(145deg,var(--bg3),var(--bg4))",border:"1px solid rgba(201,168,76,0.12)",overflow:"hidden",transition:"all .35s cubic-bezier(0.4,0,0.2,1)",boxShadow:"var(--shadow-card)"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(201,168,76,0.5)";e.currentTarget.style.transform="translateY(-8px)";e.currentTarget.style.boxShadow="var(--shadow-hover)"}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(201,168,76,0.12)";e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="var(--shadow-card)"}}>
              <div style={{height:340,overflow:"hidden",position:"relative"}}>
                <img src={chef.img} alt={chef.name} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"}}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(22,18,14,0.75) 0%,transparent 45%)"}}/>
              </div>
              <div style={{padding:"1.8rem 2rem 2.2rem"}}>
                <h3 style={{fontFamily:"var(--serif)",fontSize:"1.35rem",fontWeight:700,color:"var(--cream)",marginBottom:"0.3rem"}}>{chef.name}</h3>
                <div style={{fontSize:"0.62rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--gold)",marginBottom:"0.9rem",fontWeight:600}}>{chef.role}</div>
                <p style={{fontSize:"0.84rem",color:"var(--muted2)",lineHeight:1.75,fontStyle:"italic",marginBottom:"1.2rem",fontWeight:300}}>{chef.bio}</p>
                <div style={{borderTop:"1px solid rgba(201,168,76,0.15)",paddingTop:"1rem"}}>
                  {chef.awards.map(a=>(<div key={a} style={{display:"flex",alignItems:"center",gap:"0.6rem",marginBottom:"0.4rem"}}>
                    <div style={{width:5,height:5,background:"linear-gradient(135deg,var(--gold),#B8943E)",borderRadius:"50%",flexShrink:0}}/>
                    <span style={{fontSize:"0.73rem",color:"var(--muted)",fontWeight:300}}>{a}</span>
                  </div>))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section style={{position:"relative",overflow:"hidden",minHeight:420,display:"flex",alignItems:"center"}}>
        <img src={IMG.kitchen} alt="Kitchen" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",filter:"brightness(0.2)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(90deg,rgba(10,8,6,0.95) 40%,rgba(10,8,6,0.1))"}}/>
        <div style={{position:"relative",zIndex:2,padding:"5rem 8vw",maxWidth:640}}>
          <SLabel t="Kitchen Philosophy"/>
          <h2 style={{fontFamily:"var(--serif)",fontSize:"clamp(2rem,3.5vw,3.2rem)",fontWeight:700,color:"var(--cream)",lineHeight:1.2,marginBottom:"1.8rem"}}>"We don't follow trends.<br/>We create <span className="gold-shimmer">memories.</span>"</h2>
          <p style={{fontFamily:"var(--sans)",fontSize:"1rem",color:"var(--muted)",lineHeight:1.9,fontWeight:300}}>Every morning, Chef Laurent walks the produce market before his brigade arrives. Menus are written on a whiteboard each day, driven by what the earth offers — never by what was planned the week before.</p>
        </div>
      </section>
    </div>
  );
}

function Portfolio(){
  const [filter,setFilter]=useState("All");
  const [lightbox,setLightbox]=useState(null);
  const filtered=filter==="All"?PORTFOLIO_ITEMS:PORTFOLIO_ITEMS.filter(i=>i.category===filter);
  useReveal();
  return(
    <div style={{background:"var(--bg)",paddingTop:"5rem"}} className="page-in">
      <section style={{maxWidth:720,margin:"0 auto",padding:"6rem 5vw 3.5rem",textAlign:"center"}}>
        <SLabel t="Visual Story" center/>
        <h2 style={{fontFamily:"var(--serif)",fontSize:"clamp(2.5rem,5vw,4.2rem)",fontWeight:700,color:"var(--cream)",marginBottom:"0.5rem"}}>Our <span className="gold-shimmer">Portfolio</span></h2>
        <GoldDivider/>
      </section>
      <div style={{display:"flex",justifyContent:"center",gap:"0.8rem",padding:"0 5vw 3.5rem",flexWrap:"wrap"}}>
        {["All","Food","Interior","Events"].map(f=>(<button key={f} onClick={()=>setFilter(f)}
          style={{fontFamily:"var(--sans)",fontSize:"0.65rem",letterSpacing:"0.15em",textTransform:"uppercase",fontWeight:600,padding:"0.6rem 1.5rem",border:`1.5px solid ${filter===f?"var(--gold)":"rgba(201,168,76,0.2)"}`,background:filter===f?"rgba(201,168,76,0.1)":"transparent",color:filter===f?"var(--gold)":"var(--muted)",borderRadius:"50px",cursor:"pointer",transition:"all .3s"}}>{f}</button>))}
      </div>
      <div style={{maxWidth:1360,margin:"0 auto",padding:"0 5vw 8rem",columnCount:3,columnGap:"1rem"}}>
        {filtered.map((item,i)=>(
          <div key={`${filter}-${i}`} className="ic" onClick={()=>setLightbox(item)}
            style={{marginBottom:"1rem",overflow:"hidden",cursor:"zoom-in",breakInside:"avoid",borderRadius:"var(--r-md)",border:"1px solid rgba(201,168,76,0.1)",position:"relative",boxShadow:"var(--shadow-card)",transition:"all .35s"}}>
            <img src={item.img} alt={item.title} style={{width:"100%",objectFit:"cover",display:"block"}}/>
            <div style={{position:"absolute",inset:0,background:"rgba(10,8,6,0.65)",opacity:0,transition:"opacity .3s",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"0.5rem",borderRadius:"var(--r-md)"}}
              onMouseEnter={e=>e.currentTarget.style.opacity="1"} onMouseLeave={e=>e.currentTarget.style.opacity="0"}>
              <span style={{fontSize:"0.58rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--gold)",fontWeight:600}}>{item.category}</span>
              <p style={{fontFamily:"var(--serif)",color:"var(--cream)",fontSize:"1rem",fontWeight:600}}>{item.title}</p>
              <p style={{color:"var(--gold)",fontSize:"1.5rem"}}>⊕</p>
            </div>
          </div>
        ))}
      </div>
      {lightbox&&(
        <div className="modal-bg" onClick={()=>setLightbox(null)}>
          <button onClick={()=>setLightbox(null)} style={{position:"absolute",top:24,right:28,background:"rgba(201,168,76,0.1)",border:"1px solid rgba(201,168,76,0.3)",borderRadius:"50%",color:"var(--gold)",width:40,height:40,fontSize:"1rem",cursor:"pointer",transition:"all .25s"}}
            onMouseEnter={e=>{e.currentTarget.style.background="var(--gold)";e.currentTarget.style.color="var(--bg)"}}
            onMouseLeave={e=>{e.currentTarget.style.background="rgba(201,168,76,0.1)";e.currentTarget.style.color="var(--gold)"}}>✕</button>
          <div style={{maxWidth:880,width:"100%"}} onClick={e=>e.stopPropagation()}>
            <img src={lightbox.img} alt={lightbox.title} style={{width:"100%",maxHeight:"82vh",objectFit:"contain",borderRadius:"var(--r-lg)"}}/>
            <div style={{textAlign:"center",marginTop:"1.2rem"}}>
              <span style={{fontSize:"0.6rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--gold)",fontWeight:600}}>{lightbox.category}</span>
              <p style={{fontFamily:"var(--serif)",fontSize:"1.3rem",fontWeight:600,color:"var(--cream)",marginTop:"0.4rem"}}>{lightbox.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Contact(){
  const [form,setForm]=useState({name:"",email:"",phone:"",guests:"2",date:"",time:"19:00",occasion:"None",message:""});
  const [sent,setSent]=useState(false);
  useReveal();
  const set=e=>setForm(f=>({...f,[e.target.name]:e.target.value}));
  const submit=e=>{e.preventDefault();setSent(true);setForm({name:"",email:"",phone:"",guests:"2",date:"",time:"19:00",occasion:"None",message:""});setTimeout(()=>setSent(false),5000)};
  const inp={width:"100%",background:"rgba(255,255,255,0.04)",border:"none",borderBottom:"1px solid rgba(201,168,76,0.22)",color:"var(--cream)",fontFamily:"var(--sans)",fontSize:"0.9rem",fontWeight:300,padding:"0.8rem 0",outline:"none",transition:"border-color .3s",colorScheme:"dark"};
  const lbl={fontSize:"0.6rem",letterSpacing:"0.22em",textTransform:"uppercase",color:"var(--muted2)",display:"block",marginBottom:"0.3rem",fontWeight:500};
  return(
    <div style={{background:"var(--bg)",paddingTop:"5rem"}} className="page-in">
      <section style={{maxWidth:720,margin:"0 auto",padding:"6rem 5vw 3.5rem",textAlign:"center"}} className="rv">
        <SLabel t="Get In Touch" center/>
        <h2 style={{fontFamily:"var(--serif)",fontSize:"clamp(2.5rem,5vw,4.2rem)",fontWeight:700,color:"var(--cream)",marginBottom:"0.5rem"}}>Make a <span className="gold-shimmer">Reservation</span></h2>
        <GoldDivider/>
      </section>
      <section style={{maxWidth:1260,margin:"0 auto",padding:"0 5vw 8rem",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5rem",alignItems:"start"}}>
        {/* Form */}
        <div className="rv" style={{background:"linear-gradient(145deg,var(--bg3),var(--bg4))",border:"1px solid rgba(201,168,76,0.2)",borderRadius:"var(--r-xl)",padding:"3rem",boxShadow:"var(--shadow-card)"}}>
          <h3 style={{fontFamily:"var(--serif)",fontSize:"1.7rem",fontWeight:700,color:"var(--cream)",marginBottom:"2rem"}}>Reserve Your Table</h3>
          {sent&&<div style={{marginBottom:"1.5rem",padding:"1rem 1.4rem",border:"1px solid rgba(46,204,113,0.35)",borderRadius:"var(--r-md)",background:"rgba(46,204,113,0.08)",color:"var(--green)",fontSize:"0.85rem",fontWeight:500}}>✓ Request received. We'll confirm within 24 hours.</div>}
          <form onSubmit={submit} style={{display:"grid",gap:"2rem"}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.6rem"}}>
              <div><label style={lbl}>Full Name *</label><input name="name" required value={form.name} onChange={set} placeholder="Priya Mehta" style={inp} onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="rgba(201,168,76,0.22)"}/></div>
              <div><label style={lbl}>Email *</label><input type="email" name="email" required value={form.email} onChange={set} style={inp} onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="rgba(201,168,76,0.22)"}/></div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.6rem"}}>
              <div><label style={lbl}>Phone</label><input name="phone" value={form.phone} onChange={set} style={inp} onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="rgba(201,168,76,0.22)"}/></div>
              <div><label style={lbl}>Guests</label><select name="guests" value={form.guests} onChange={set} style={{...inp,cursor:"pointer"}}>{["1","2","3","4","5","6","7","8","9","10"].map(n=><option key={n} style={{background:"var(--bg3)"}}>{n} {n==="1"?"Guest":"Guests"}</option>)}</select></div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1.2rem"}}>
              <div><label style={lbl}>Date</label><input type="date" name="date" value={form.date} onChange={set} style={inp} onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="rgba(201,168,76,0.22)"}/></div>
              <div><label style={lbl}>Time</label><select name="time" value={form.time} onChange={set} style={{...inp,cursor:"pointer"}}>{["18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00"].map(t=><option key={t} style={{background:"var(--bg3)"}}>{t}</option>)}</select></div>
              <div><label style={lbl}>Occasion</label><select name="occasion" value={form.occasion} onChange={set} style={{...inp,cursor:"pointer"}}>{["None","Birthday","Anniversary","Proposal","Business","Other"].map(o=><option key={o} style={{background:"var(--bg3)"}}>{o}</option>)}</select></div>
            </div>
            <div><label style={lbl}>Special Requests</label><textarea name="message" rows={4} value={form.message} onChange={set} placeholder="Dietary requirements, seating preferences, allergies…" style={{...inp,resize:"vertical",lineHeight:1.7}} onFocus={e=>e.target.style.borderColor="var(--gold)"} onBlur={e=>e.target.style.borderColor="rgba(201,168,76,0.22)"}/></div>
            <button type="submit"
              style={{width:"100%",padding:"1.1rem",background:"linear-gradient(135deg,var(--gold),#B8943E)",color:"var(--bg)",fontFamily:"var(--sans)",fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",border:"none",borderRadius:"50px",cursor:"pointer",transition:"all .3s",boxShadow:"var(--shadow-btn)"}}
              onMouseEnter={e=>{e.target.style.background="linear-gradient(135deg,#E8C97A,var(--gold))";e.target.style.transform="translateY(-2px)";e.target.style.boxShadow="var(--shadow-hover)"}}
              onMouseLeave={e=>{e.target.style.background="linear-gradient(135deg,var(--gold),#B8943E)";e.target.style.transform="";e.target.style.boxShadow="var(--shadow-btn)"}}>
              🍽️ Confirm Reservation
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="rv d2" style={{display:"grid",gap:"2rem"}}>
          {/* Map */}
          <div style={{background:"linear-gradient(145deg,var(--bg3),var(--bg4))",border:"1px solid rgba(201,168,76,0.18)",borderRadius:"var(--r-xl)",height:240,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"0.7rem",boxShadow:"var(--shadow-card)",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",inset:0,background:"radial-gradient(circle at center,rgba(201,168,76,0.06),transparent 60%)"}}/>
            <span style={{fontSize:"2.5rem"}}>📍</span>
            <p style={{fontFamily:"var(--serif)",fontSize:"1.2rem",fontWeight:700,color:"var(--cream)"}}>Aurum Fine Dining</p>
            <p style={{fontSize:"0.82rem",color:"var(--muted)",textAlign:"center",lineHeight:1.7,fontWeight:300}}>12, Napean Sea Road, Malabar Hill<br/>Mumbai, Maharashtra 400 006</p>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer">
              <OutlineBtn size="sm">Open in Maps →</OutlineBtn>
            </a>
          </div>
          {/* Hours */}
          <div style={{background:"linear-gradient(145deg,var(--bg3),var(--bg4))",border:"1px solid rgba(201,168,76,0.18)",borderRadius:"var(--r-xl)",padding:"2.2rem",boxShadow:"var(--shadow-card)"}}>
            <h3 style={{fontFamily:"var(--serif)",fontSize:"1.2rem",fontWeight:700,color:"var(--gold-lt)",marginBottom:"1.4rem"}}>⏰ Opening Hours</h3>
            {[["Monday – Friday","12 PM – 11 PM"],["Saturday","11 AM – 11:30 PM"],["Sunday","11 AM – 10 PM"]].map(([d,t])=>(
              <div key={d} style={{display:"flex",justifyContent:"space-between",padding:"0.9rem 0",borderBottom:"1px solid rgba(201,168,76,0.08)"}}>
                <span style={{fontSize:"0.88rem",color:"var(--muted)",fontWeight:300}}>{d}</span>
                <span style={{fontSize:"0.88rem",color:"var(--cream)",fontWeight:500}}>{t}</span>
              </div>
            ))}
          </div>
          {/* Contact */}
          <div style={{display:"grid",gap:"1.2rem"}}>
            {[["📞","Reservations","+91 22 4001 9999"],["✉️","Email","reserve@aurum.in"],["📸","Instagram","@aurum.mumbai"]].map(([icon,label,val])=>(
              <div key={label} style={{display:"flex",alignItems:"center",gap:"1.2rem",padding:"1.2rem 1.5rem",background:"linear-gradient(145deg,var(--bg3),var(--bg4))",border:"1px solid rgba(201,168,76,0.15)",borderRadius:"var(--r-md)",boxShadow:"var(--shadow-card)",transition:"all .3s",cursor:"default"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(201,168,76,0.4)";e.currentTarget.style.transform="translateX(4px)"}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(201,168,76,0.15)";e.currentTarget.style.transform=""}}>
                <div style={{width:46,height:46,border:"1px solid rgba(201,168,76,0.25)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"1.2rem",background:"rgba(201,168,76,0.06)"}}>{icon}</div>
                <div>
                  <p style={{fontSize:"0.6rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--muted2)",fontWeight:500}}>{label}</p>
                  <p style={{fontSize:"0.92rem",color:"var(--cream)",marginTop:3,fontWeight:400}}>{val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Footer({nav}){
  return(
    <footer style={{background:"linear-gradient(180deg,var(--bg2),#050403)",borderTop:"1px solid rgba(201,168,76,0.15)",padding:"6rem 5vw 3rem"}}>
      <div style={{maxWidth:1260,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:"3.5rem",marginBottom:"4rem",paddingBottom:"4rem",borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
          <div>
            <div style={{fontFamily:"var(--serif)",fontSize:"2rem",fontWeight:700,letterSpacing:"0.25em",marginBottom:"1.2rem"}} className="gold-shimmer">AURUM<em style={{fontStyle:"italic",fontWeight:400,fontSize:"1.6rem",WebkitTextFillColor:"var(--cream)"}}>.</em></div>
            <p style={{fontFamily:"var(--sans)",fontSize:"0.92rem",color:"var(--muted)",lineHeight:1.9,maxWidth:280,marginBottom:"1.8rem",fontWeight:300}}>Three Michelin stars. One unforgettable evening. Mumbai's temple of fine dining since 2008.</p>
            <div style={{display:"flex",gap:"0.8rem"}}>
              {["FB","IG","TW"].map((s,i)=>(
                <a key={s} href="#"
                  style={{width:38,height:38,background:"rgba(201,168,76,0.08)",border:"1px solid rgba(201,168,76,0.2)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",color:"var(--muted2)",fontWeight:600,transition:"all .3s",letterSpacing:"0.05em"}}
                  onMouseEnter={e=>{e.target.style.background="var(--gold)";e.target.style.color="var(--bg)";e.target.style.borderColor="var(--gold)"}}
                  onMouseLeave={e=>{e.target.style.background="rgba(201,168,76,0.08)";e.target.style.color="var(--muted2)";e.target.style.borderColor="rgba(201,168,76,0.2)"}}>{s}</a>
              ))}
            </div>
          </div>
          <div>
            <p style={{fontFamily:"var(--sans)",fontSize:"0.62rem",letterSpacing:"0.28em",textTransform:"uppercase",color:"var(--gold)",marginBottom:"1.4rem",fontWeight:600}}>Navigation</p>
            <ul style={{listStyle:"none"}}>
              {NAV_LINKS.map(p=>(<li key={p} style={{marginBottom:"0.8rem"}}><button onClick={()=>nav(p)}
                style={{background:"none",border:"none",cursor:"pointer",fontSize:"0.88rem",color:"var(--muted)",fontFamily:"var(--sans)",fontWeight:300,transition:"all .3s",padding:0,display:"flex",alignItems:"center",gap:"0.4rem"}}
                onMouseEnter={e=>{e.currentTarget.style.color="var(--gold)";e.currentTarget.style.paddingLeft="6px"}}
                onMouseLeave={e=>{e.currentTarget.style.color="var(--muted)";e.currentTarget.style.paddingLeft="0"}}>{p}</button></li>))}
            </ul>
          </div>
          <div>
            <p style={{fontFamily:"var(--sans)",fontSize:"0.62rem",letterSpacing:"0.28em",textTransform:"uppercase",color:"var(--gold)",marginBottom:"1.4rem",fontWeight:600}}>Hours</p>
            {[["Lunch","Fri–Sun, 12–15:00"],["Dinner","Daily, 18–23:00"],["Bar","Daily, 17–00:00"]].map(([t,h])=>(<div key={t} style={{marginBottom:"1rem"}}><div style={{fontSize:"0.8rem",color:"var(--muted)",fontWeight:400}}>{t}</div><div style={{fontSize:"0.73rem",color:"var(--muted2)",fontWeight:300}}>{h}</div></div>))}
          </div>
          <div>
            <p style={{fontFamily:"var(--sans)",fontSize:"0.62rem",letterSpacing:"0.28em",textTransform:"uppercase",color:"var(--gold)",marginBottom:"1.4rem",fontWeight:600}}>Contact</p>
            <p style={{fontFamily:"var(--sans)",fontSize:"0.88rem",color:"var(--muted)",lineHeight:2.1,fontWeight:300}}>12, Napean Sea Road<br/>Malabar Hill, Mumbai<br/>Maharashtra 400 006<br/><br/>+91 22 4001 9999<br/>reserve@aurum.in</p>
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"}}>
          <p style={{fontSize:"0.7rem",color:"var(--muted3)",letterSpacing:"0.05em",fontWeight:300}}>© 2025 Aurum Fine Dining. All rights reserved.</p>
          <div style={{display:"flex",gap:"2.5rem"}}>
            {["Privacy Policy","Terms of Service","Careers"].map(l=>(<a key={l} href="#"
              style={{fontSize:"0.65rem",color:"var(--muted3)",letterSpacing:"0.08em",transition:"color .3s",fontWeight:300}}
              onMouseEnter={e=>e.target.style.color="var(--gold)"} onMouseLeave={e=>e.target.style.color="var(--muted3)"}>{l}</a>))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════════════════
   APP ROOT
══════════════════════════════════════════════════════ */
export default function App(){
  const [activePage,setActivePage]=useState("Home");
  const [cart,setCart]=useState({});
  const [cartOpen,setCartOpen]=useState(false);
  const [checkout,setCheckout]=useState(false);
  const [confirmedOrder,setConfirmedOrder]=useState(null);
  const [orders,setOrders]=useState([]);
  const [ordersOpen,setOrdersOpen]=useState(false);

  const nav=useCallback((page)=>{setActivePage(page);window.scrollTo({top:0,behavior:"smooth"});},[]);
  const addToCart=useCallback((item)=>{setCart(c=>({...c,[item.id]:{...item,qty:(c[item.id]?.qty||0)+1}}));},[]);
  const removeFromCart=useCallback((id)=>{setCart(c=>{if(!c[id])return c;if(c[id].qty<=1){const n={...c};delete n[id];return n;}return{...c,[id]:{...c[id],qty:c[id].qty-1}};});},[]);
  const clearCart=useCallback(()=>setCart({}),[]);
  const handleOrderPlaced=useCallback((order)=>{setOrders(prev=>[order,...prev]);setConfirmedOrder(order);clearCart();setCheckout(false);},[clearCart]);

  const PAGES={Home,About,Menu,Experience,Chef,Portfolio,Contact};
  const PC=PAGES[activePage];
  const cartProps={cart,addToCart,removeFromCart};

  return(
    <>
      <style>{G}</style>
      <div style={{minHeight:"100vh",background:"var(--bg)"}}>
        <Navbar ap={activePage} nav={nav} cart={cart} onCartOpen={()=>setCartOpen(true)} orderCount={orders.length} onOrdersOpen={()=>setOrdersOpen(true)}/>
        <main><PC nav={nav} {...cartProps}/></main>
        <Footer nav={nav}/>
      </div>
      {cartOpen&&<CartDrawer cart={cart} onClose={()=>setCartOpen(false)} onAdd={addToCart} onRemove={removeFromCart} onClear={clearCart} onOrder={()=>{setCartOpen(false);setCheckout(true);}}/>}
      {checkout&&Object.keys(cart).length>0&&<CheckoutModal cart={cart} onClose={()=>setCheckout(false)} onPlaced={handleOrderPlaced}/>}
      {confirmedOrder&&<OrderConfirmedScreen order={confirmedOrder} onClose={()=>setConfirmedOrder(null)} onViewOrders={()=>{setConfirmedOrder(null);setOrdersOpen(true);}}/>}
      {ordersOpen&&<OrderHistoryPanel orders={orders} onClose={()=>setOrdersOpen(false)}/>}
    </>
  );
}
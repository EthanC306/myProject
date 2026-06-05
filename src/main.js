import './style.css';

// ── CUSTOM CURSOR ─────────────────────────────────────────────
const cur = document.getElementById('cursor');
const trail = document.getElementById('cursor-trail');
let tx = 0, ty = 0, cx = 0, cy = 0;

document.addEventListener('mousemove', e => {
  tx = e.clientX; ty = e.clientY;
  cur.style.left = tx + 'px';
  cur.style.top = ty + 'px';
});

(function moveTrail() {
  cx += (tx - cx) * .15;
  cy += (ty - cy) * .15;
  trail.style.left = cx + 'px';
  trail.style.top = cy + 'px';
  requestAnimationFrame(moveTrail);
})();

document.querySelectorAll('a, button, .btn, .skill-tag, .project-card, .stat-box, .contact-link').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cur.style.width = '20px';
    cur.style.height = '20px';
    cur.style.background = 'rgba(0,245,212,.15)';
  });
  el.addEventListener('mouseleave', () => {
    cur.style.width = '12px';
    cur.style.height = '12px';
    cur.style.background = 'transparent';
  });
});

// ── PARTICLE FIELD ────────────────────────────────────────────
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let W, H;

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

let mx = -9999, my = -9999;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

const N = 80;
const pts = Array.from({ length: N }, () => ({
  x: Math.random() * 3000,
  y: Math.random() * 3000,
  vx: (Math.random() - .5) * .35,
  vy: (Math.random() - .5) * .35,
  r: Math.random() * 1.6 + .5,
  a: Math.random() * .6 + .2,
  c: ['0,245,212', '188,140,255', '88,166,255'][Math.floor(Math.random() * 3)]
}));

function drawPts() {
  ctx.clearRect(0, 0, W, H);
  const sy = window.scrollY;
  pts.forEach(p => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
    if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

    const dx = p.x - mx, dy = (p.y + sy) - my, d = Math.sqrt(dx * dx + dy * dy);
    if (d < 130) { const f = (130 - d) / 130; p.x += dx / d * f * 2; p.y += dy / d * f * 2; }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${p.c},${p.a})`;
    ctx.fill();

    for (let i = 0; i < pts.length; i++) {
      const q = pts[i], dx2 = p.x - q.x, dy2 = p.y - q.y, d2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
      if (d2 > 0 && d2 < 95) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = `rgba(0,245,212,${(1 - d2 / 95) * .15})`;
        ctx.lineWidth = .5;
        ctx.stroke();
      }
    }
  });
  requestAnimationFrame(drawPts);
}
drawPts();

// ── SCREEN RIP ────────────────────────────────────────────────
const ripEl = document.getElementById('rip-overlay');
const SLICES = 12;
const slices = [];
const colors = ['#00f5d4','#bc8cff','#080b10','#00f5d4','#ff6b6b','#080b10','#bc8cff','#00f5d4','#080b10','#58a6ff','#00f5d4','#080b10'];

for (let i = 0; i < SLICES; i++) {
  const s = document.createElement('div');
  s.className = 'rip-slice';
  s.style.cssText = `background:${colors[i]};opacity:${i % 3 === 2 ? .9 : i % 3 === 0 ? .95 : .85};transform:scaleX(0)`;
  ripEl.appendChild(s);
  slices.push(s);
}

let isRipping = false;

function doRip() {
  if (isRipping) return;
  isRipping = true;
  slices.forEach((s, i) => {
    const d = i * 16 + Math.random() * 24;
    const dur = 100 + Math.random() * 70;
    s.style.transition = 'none';
    s.style.transform = 'scaleX(0)';
    s.style.transformOrigin = 'left';
    setTimeout(() => {
      s.style.transition = `transform ${dur}ms cubic-bezier(.77,0,.18,1)`;
      s.style.transform = 'scaleX(1)';
    }, d);
    setTimeout(() => {
      s.style.transformOrigin = 'right';
      s.style.transition = `transform ${dur * .85}ms cubic-bezier(.77,0,.18,1)`;
      s.style.transform = 'scaleX(0)';
    }, d + dur + 50);
  });
  setTimeout(() => { isRipping = false; }, SLICES * 16 + 280);
}

setTimeout(() => doRip(), 400);

// ── HERO GLITCH LOOP ─────────────────────────────────────────
const heroName = document.getElementById('hero-name');
setInterval(() => {
  if (Math.random() < .28) {
    heroName.classList.add('glitch-active');
    setTimeout(() => heroName.classList.remove('glitch-active'), 180);
  }
}, 3000);

// ── TYPED TERMINAL ────────────────────────────────────────────
const termBody = document.getElementById('terminal-body');
const lines = [
  { html: '<span style="color:#7d8590">{</span>' },
  { html: '&nbsp;&nbsp;<span style="color:#bc8cff">"name"</span>: <span style="color:#ff6b6b">"Ethan Claybourn"</span>,' },
  { html: '&nbsp;&nbsp;<span style="color:#bc8cff">"role"</span>: <span style="color:#ff6b6b">"CS Undergraduate"</span>,' },
  { html: '&nbsp;&nbsp;<span style="color:#bc8cff">"school"</span>: <span style="color:#ff6b6b">"Ohio University"</span>,' },
  { html: '&nbsp;&nbsp;<span style="color:#bc8cff">"gpa"</span>: <span style="color:#58a6ff">3.2</span>,' },
  { html: '&nbsp;&nbsp;<span style="color:#bc8cff">"stack"</span>: [<span style="color:#ff6b6b">"C++"</span>, <span style="color:#ff6b6b">"React"</span>, <span style="color:#ff6b6b">"JS"</span>],' },
  { html: '&nbsp;&nbsp;<span style="color:#bc8cff">"goal"</span>: <span style="color:#ff6b6b">"Software / AI Engineer"</span>' },
  { html: '<span style="color:#7d8590">}</span>' },
];

let li = 0;
function addLine() {
  if (li >= lines.length) {
    const d = document.createElement('div');
    d.style.marginTop = '8px';
    d.innerHTML = '<span style="color:#00f5d4">❯ </span><span style="display:inline-block;width:7px;height:14px;background:#00f5d4;animation:blink 1s step-end infinite;vertical-align:middle"></span>';
    termBody.appendChild(d);
    return;
  }
  const d = document.createElement('div');
  d.className = 't-out';
  d.style.opacity = '0';
  d.innerHTML = lines[li++].html;
  termBody.appendChild(d);
  requestAnimationFrame(() => { d.style.transition = 'opacity .25s'; d.style.opacity = '1'; });
  setTimeout(addLine, 110);
}
setTimeout(addLine, 1400);

// ── REVEAL / INTERSECT ────────────────────────────────────────
const revObs = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('visible'); revObs.unobserve(e.target); }
}), { threshold: .1 });
document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

// ── RESUME FLY-IN ─────────────────────────────────────────────
const flyObs = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('animated'); flyObs.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll('.fly-left, .fly-right').forEach(el => flyObs.observe(el));

// ── NAV HIDE/SHOW ─────────────────────────────────────────────
let lastY = 0;
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.style.transform = y > lastY && y > 80 ? 'translateY(-100%)' : 'translateY(0)';
  lastY = y;
});

// ── PROJECT CARD SPOTLIGHT ────────────────────────────────────
document.querySelectorAll('.project-card').forEach(c => {
  c.addEventListener('mousemove', e => {
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    c.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
  });
});

// ── SKILL TAGS STAGGER ────────────────────────────────────────
const tags = document.querySelectorAll('.skill-tag');
const skillObs = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  tags.forEach((t, i) => setTimeout(() => t.classList.add('visible'), i * 55));
  skillObs.disconnect();
}), { threshold: .3 });
const sl = document.getElementById('skills-list');
if (sl) skillObs.observe(sl);

// ── STAT COUNTER ──────────────────────────────────────────────
const statObs = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target;
  const target = parseInt(el.dataset.target);
  const suf = el.dataset.suffix || '';
  if (!target) return;
  let v = 0;
  const step = () => {
    v += target / 50;
    el.textContent = Math.min(Math.round(v), target) + suf;
    if (v < target) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
  statObs.unobserve(el);
}), { threshold: .6 });
document.querySelectorAll('.stat-num[data-target]').forEach(el => statObs.observe(el));

// ── RANDOM GLITCH FLICKER ─────────────────────────────────────
setInterval(() => {
  const nums = [...document.querySelectorAll('.section-num')];
  if (!nums.length) return;
  const el = nums[Math.floor(Math.random() * nums.length)];
  el.style.opacity = '.1';
  el.style.transform = 'translateX(3px)';
  setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'none'; el.style.transition = 'all .1s'; }, 90);
}, 4000);

// ── WARP TRANSITION ───────────────────────────────────────────
// Recede → spin edge-on (invisible) → swap scroll behind the rip → spin the
// new section back in from the far side. Two discrete 90° turns mean the
// mirrored backface is never shown. Transforms live only on #warp-stage and
// only while active, so the fixed nav stays viewport-anchored at rest.
const stage = document.getElementById('warp-stage');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const OUT_MS = 470, IN_MS = 560;
const FAR = 'perspective(1500px) translateZ(-860px) scale(.82)';
let isWarping = false;

function pivotToViewport() {
  // Spin about the centre of whatever the user is currently looking at.
  stage.style.transformOrigin = `50% ${window.scrollY + window.innerHeight / 2}px`;
}

function jumpTo(y) {
  const prev = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = 'auto';
  window.scrollTo(0, y);
  document.documentElement.style.scrollBehavior = prev;
}

function warpTo(target) {
  if (isWarping || !target) return;

  // Capture the destination now, before any transform skews getBoundingClientRect.
  const targetY = target.getBoundingClientRect().top + window.scrollY;

  if (reduceMotion) { jumpTo(targetY); return; }

  isWarping = true;
  document.body.classList.add('warping');
  stage.style.willChange = 'transform, opacity, filter';
  pivotToViewport();

  // Phase 1 — recede and rotate away to the left until edge-on.
  stage.style.transition =
    `transform ${OUT_MS}ms cubic-bezier(.7,0,.25,1), opacity ${OUT_MS}ms ease, filter ${OUT_MS}ms ease`;
requestAnimationFrame(() => { 
  stage.style.transform = `${FAR} rotateY(-95deg)`;
  stage.style.opacity = '0';
  stage.style.filter = 'blur(7px) brightness(1.7) saturate(1.4)';
});
  setTimeout(() => {
    // Mid-swap, fully hidden: fire the rip + glitch to mask the seam, then jump.
    doRip();
    heroName.classList.add('glitch-active');
    setTimeout(() => heroName.classList.remove('glitch-active'), 180);

    jumpTo(targetY);
    pivotToViewport();

    // Snap to the incoming start (far side, edge-on) with no transition…
    stage.style.transition = 'none';
    stage.style.transform = `${FAR} rotateY(95deg)`;
    void stage.offsetWidth; // force reflow so the snap is committed

    // …then Phase 2 — rotate the new section in to rest.
    stage.style.transition =
      `transform ${IN_MS}ms cubic-bezier(.2,.85,.25,1), opacity ${IN_MS}ms ease, filter ${IN_MS}ms ease`;
    stage.style.transform = '';
    stage.style.opacity = '1';
    stage.style.filter = '';
  }, OUT_MS);

  setTimeout(() => {
    // Wipe every inline prop so the stage is transform-free again (keeps nav fixed).
    stage.style.cssText = '';
    document.body.classList.remove('warping');
    isWarping = false;
  }, OUT_MS + IN_MS + 60);
}

// Route every in-page anchor (nav, hero CTAs) through the warp; leave the
// placeholder href="#" project links and external/mailto links untouched.
document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    warpTo(target);
  });
});

// ── NAV LINK GLITCH ON HOVER ──────────────────────────────────
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('mouseenter', () => {
    let count = 0;
    const orig = a.textContent;
    const chars = '@#$%&!?';
    const iv = setInterval(() => {
      if (count++ > 4) { a.textContent = orig; clearInterval(iv); return; }
      a.textContent = orig.split('').map(c => Math.random() < .3 ? chars[Math.floor(Math.random() * chars.length)] : c).join('');
    }, 50);
  });
});

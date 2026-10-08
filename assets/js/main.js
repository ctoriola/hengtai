// Hengtai Raytech — interactions

// Mobile menu
const header = document.querySelector('.site-header');
document.querySelector('.menu-toggle')?.addEventListener('click', (event) => {
  const open = header.classList.toggle('is-open');
  event.currentTarget.setAttribute('aria-expanded', String(open));
  event.currentTarget.textContent = open ? 'Close' : 'Menu';
});

// Wrap button labels so the hover fill can sit behind the text
document.querySelectorAll('.btn').forEach((btn) => {
  if (!btn.querySelector('span')) btn.innerHTML = `<span>${btn.innerHTML}</span>`;
});

// Split headings into words for the staggered reveal
document.querySelectorAll('.reveal').forEach((el) => {
  let i = 0;
  const wrap = (node) => {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.append(' '); return; }
          const outer = document.createElement('span');
          outer.className = 'w';
          const inner = document.createElement('span');
          inner.style.setProperty('--i', i++);
          inner.textContent = part;
          outer.append(inner);
          frag.append(outer);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE && child.tagName !== 'BR') {
        wrap(child);
      }
    });
  };
  wrap(el);
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal, .fade').forEach((el) => io.observe(el));

// Duplicate marquee content for a seamless loop
document.querySelectorAll('.marquee__track').forEach((track) => {
  track.innerHTML += track.innerHTML;
});

// Header tint follows the section underneath it
const tintTargets = [...document.querySelectorAll('[data-header]')];
const setTint = () => {
  const probe = 60;
  const current = tintTargets.find((el) => {
    const r = el.getBoundingClientRect();
    return r.top <= probe && r.bottom > probe;
  });
  header.dataset.tone = current ? current.dataset.header : 'signal';
};
if (tintTargets.length) {
  addEventListener('scroll', setTint, { passive: true });
  setTint();
}

// Contact form → prefilled email
document.querySelector('#enquiry')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = `Hengtai Raytech enquiry: ${data.get('interest')}`;
  const body = [
    'Hello Hengtai Raytech team,',
    '',
    'I would like to discuss the following capability:',
    `${data.get('interest')}`,
    '',
    'CONTACT DETAILS',
    `Name: ${data.get('name')}`,
    `Organisation: ${data.get('organisation')}`,
    `Work email: ${data.get('email')}`,
    '',
    'MISSION REQUIREMENTS',
    data.get('message') || 'Not provided',
    '',
    'Kind regards,',
    `${data.get('name')}`,
  ].join('\n');
  window.location.href = `mailto:partnerships@hengtairaytech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

(() => {
  const key = 'vocabite-theme';
  const media = matchMedia('(prefers-color-scheme: dark)');
  let choice = 'system';
  try { choice = localStorage.getItem(key) || 'system'; } catch {}
  const valid = value => ['system', 'light', 'dark'].includes(value);
  function apply(value) {
    choice = valid(value) ? value : 'system';
    document.documentElement.dataset.theme = choice === 'system' ? (media.matches ? 'dark' : 'light') : choice;
    document.documentElement.dataset.themePreference = choice;
    document.documentElement.style.colorScheme = document.documentElement.dataset.theme;
    document.querySelectorAll('[data-theme-toggle]').forEach(el => { el.setAttribute('aria-checked', String(document.documentElement.dataset.theme === 'dark')); });
  }
  window.setVocabiteTheme = value => { try { localStorage.setItem(key, value); } catch {} apply(value); };
  media.addEventListener('change', () => apply(choice));
  addEventListener('storage', event => { if (event.key === key || event.key === null) apply(event.newValue || 'system'); });
  document.addEventListener('click', event => { if (event.target instanceof Element && event.target.closest('[data-theme-toggle]')) window.setVocabiteTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'); });
  document.addEventListener('DOMContentLoaded', () => apply(choice));
  apply(choice);
})();

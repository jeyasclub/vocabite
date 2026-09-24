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
    document.querySelectorAll('[data-theme-select]').forEach(el => { el.value = choice; });
  }
  window.setVocabiteTheme = value => { try { localStorage.setItem(key, value); } catch {} apply(value); };
  media.addEventListener('change', () => apply(choice));
  addEventListener('storage', event => { if (event.key === key || event.key === null) apply(event.newValue || 'system'); });
  document.addEventListener('change', event => { if (event.target.matches('[data-theme-select]')) window.setVocabiteTheme(event.target.value); });
  document.addEventListener('DOMContentLoaded', () => apply(choice));
  apply(choice);
})();

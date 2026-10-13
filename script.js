// ネイティブdialogで背景の操作を無効化し、Escキーにも対応します。
(() => {
  const lightbox = document.querySelector('.lightbox');
  if (!lightbox || typeof lightbox.showModal !== 'function') return;

  const image = lightbox.querySelector('.lightbox-image');
  const closeButton = lightbox.querySelector('.lightbox-close');
  let trigger = null;

  document.querySelectorAll('#work .comparison a').forEach((link) => {
    const thumbnail = link.querySelector('img');
    if (!thumbnail) return;
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', (event) => {
      // 修飾キー付きクリックでは通常のリンク操作を維持します。
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      trigger = link;
      image.src = link.href;
      image.alt = thumbnail.alt;
      lightbox.showModal();
      document.documentElement.classList.add('lightbox-open');
      closeButton.focus({ preventScroll: true });
    });
  });

  closeButton.addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox || event.target === image ||
        event.target === image.parentElement) lightbox.close();
  });
  lightbox.addEventListener('keydown', (event) => {
    // 操作要素は閉じるボタンのみ。Tab / Shift+Tabでフォーカスを維持します。
    if (event.key === 'Tab') {
      event.preventDefault();
      closeButton.focus();
    }
  });
  lightbox.addEventListener('close', () => {
    document.documentElement.classList.remove('lightbox-open');
    image.removeAttribute('src');
    image.alt = '';
    trigger?.focus({ preventScroll: true });
    trigger = null;
  });
})();

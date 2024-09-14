import { scrollTrigger } from './scroll-trigger';

const article = document.querySelector('.article');

const initAnimatedImages = () => {
  if (!article) {
    return;
  }

  scrollTrigger('.article figure', { rootMargin: '0px 0px -15% 0px' });
}

export { initAnimatedImages };

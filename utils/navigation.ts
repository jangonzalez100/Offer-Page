export const scrollToSection = (id: string) => {
  if (typeof window === 'undefined') return;
  const element = document.getElementById(id);
  if (element) {
    const offset = 100; // Account for sticky header
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
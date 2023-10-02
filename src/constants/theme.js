export const themes = {
  LIGHT: "light",
  DARK: "dark",
};

const breakpoints = [576, 768, 992, 1200,1400];

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

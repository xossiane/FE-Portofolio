export const parameters = {
  backgrounds: {
    default: 'light',
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    grid: {
      gridOn: true,
      columns: 12,
      gap: '20px',
      gutter: '50px',
      maxWidth: '1024px',
    },
  },
}
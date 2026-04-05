import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

import logoLight from './logo-light.svg?url';
import logoDark from './logo-dark.svg?url';

const lightTheme = create({
  base: 'light',
  brandTitle: 'Doppel Design System',
  brandImage: logoLight,
});

const darkTheme = create({
  base: 'dark',
  brandTitle: 'Doppel Design System',
  brandImage: logoDark,
});

const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

addons.setConfig({
  theme: isDarkMode ? darkTheme : lightTheme,
});

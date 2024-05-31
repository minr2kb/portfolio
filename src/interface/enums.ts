export const ThemeMode = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
  V3: 'V3',
} as const;

export type ThemeModeType = (typeof ThemeMode)[keyof typeof ThemeMode];

export const FontWeightValues = {
  THIN: 100,
  EXTRA_LIGHT: 200,
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
  EXTRA_BOLD: 800,
  BLACK: 900,
  EXTAR_BLACK: 950,
} as const;

// V3
export const Sections = {
  INTRO: 'Intro',
  ABOUT: 'About',
  EDUCATION: 'Education',
  EXPERIENCE: 'Experience',
  PROJECTS: 'Projects',
  CONTACTS: 'Contacts',
} as const;

export type SectionsType = (typeof Sections)[keyof typeof Sections];

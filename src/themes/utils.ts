import { themes } from './index';

export interface ITheme {
  [key: string]: string;
}

export interface IThemes {
  [key: string]: ITheme;
}

export interface IMappedTheme {
  [key: string]: string | null;
}

export const mapTheme = (variables: ITheme): IMappedTheme => {
  return {
    '--color-brand': variables.brand || '',
    '--color-lowlight': variables.lowlight || '',
    '--color-header': variables.header || '',
    '--color-highlight': variables.highlight || '',
    '--color-product': variables.product || '',
    '--color-tile': variables.tile || '',
    '--color-facebook': variables.facebook || '',
    '--color-primary--on-dark': variables.primaryOnDark || '',
    '--color-primary--on-light': variables.primaryOnLight || '',
    '--color-secondary--on-dark': variables.secondaryOnDark || '',
    '--color-secondary--on-light': variables.secondaryOnLight || '',
    '--color-tertiary--on-dark': variables.tertiaryOnDark || '',
    '--color-tertiary--on-light': variables.tertiaryOnLight || '',
    '--color-tint-72': '#FFD78B',
    '--color-tint-48': '#FFE5B2',
    '--color-tint-24': '#FFF2D9',
    '--color-tint-12': '#FFF9EB',
    '--shadow-btn-primary-roll':variables.btnPrimaryRollShadow || '',
    '--shadow-light':variables.lightShadow || '',
    '--shadow-elevation':variables.elevationShadow || '',
    '--shadow-base':variables.sBase || '',
    '--shadow-hover':variables.sHover || '',
    '--shadow-active':variables.sActive || '',
    '--shadow-border':variables.border || '',
    '--shadow-input':variables.input || '',
    '--shadow-mega-menu':variables.megaMenu || '',
  };
};


export const setTheme = (theme: string): void => {
  const themeObject: IMappedTheme = mapTheme(themes[theme]);
  if (!themeObject) return;

  const root = document.documentElement;

  Object.keys(themeObject).forEach((property) => {
    if (property === 'name') {
      return;
    }

    root.style.setProperty(property, themeObject[property]);
  });
};

export const extend = (
  extending: ITheme,
  newTheme: ITheme
): ITheme => {
  return { ...extending, ...newTheme };
};

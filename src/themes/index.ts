import base from './base';
import food from './food';
import drink from './drink';
import beauty from './beauty';
import home from './home';
import health from './health';
import baby from './baby';
import { IThemes } from './utils';

/**
 * The default theme to load
 */
export const DEFAULT_THEME: string = 'base';

export const themes: IThemes = {
  base,
  food,
  drink,
  beauty,
  home,
  health,
  baby
};

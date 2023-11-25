import { makeAutoObservable } from 'mobx';
import { Appearance } from 'react-native';
import { RootState } from '.';

export default class ThemeState {
  root: RootState;
  isDark: boolean = Appearance.getColorScheme() === 'dark';
  constructor(root: RootState) {
    makeAutoObservable(this);
    this.root = root;
  }

  setIsDark(isDark: boolean) {
    this.isDark = isDark;
  }

  resetColorSchema() {
    this.isDark = Appearance.getColorScheme() === 'dark';
  }
}

import {createSelector} from '@reduxjs/toolkit';

import {RootState} from '../store';

const hero = (state: RootState) => state.hero;

export default {
  currentHero: createSelector(hero, s => s.currentHero),
};

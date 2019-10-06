import { el } from '../utils';

const Brand = () =>
  el('header', { id: 'brand' }, el('h1', null, 'TIC TAC TOE'));

export default Brand;

import { el } from '../utils';

const Brand = () => {
  return el('header', { id: 'brand' }, el('h1', null, 'TIC TAC TOE'));
};

export default Brand;

import { el } from '../utils';

const Footer = () => {
  return el('footer', { id: 'legacy' }, [
    'Powered by ',
    el(
      'a',
      { href: 'https://github.com/FabienNeibaf', target: '_blank' },
      'Fabien',
    ),
  ]);
};

export default Footer;

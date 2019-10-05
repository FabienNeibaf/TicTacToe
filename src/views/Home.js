import Brand from './Brand';
import Footer from './Footer';
import { el } from '../utils';

const Home = console =>
  el('section', { id: 'home' }, [
    Brand(),
    el(
      'main',
      null,
      el(
        'button',
        {
          onclick() {
            console.initGame();
          },
        },
        'Start Game'
      )
    ),
    Footer(),
  ]);

export default Home;

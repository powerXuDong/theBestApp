import App from '../pages/home';
import SaveMoney from '../pages/saveMoney';
import Workplace from '../pages/workplace';

const router = [{
  path: '/home',
  component: App,
  children: [],
}, {
  path: '/saveMoney',
  component: SaveMoney,
  children: [],
}, {
  path: '/workplace',
  component: Workplace,
  children: [],
}]

export default router;
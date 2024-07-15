import Error404 from '../pages/404';
import Home from '../pages/home'
import Login from '../pages/Login';
import Register from '../pages/Register';
import usuario from '../pages/usuario';
import criar from '../pages/criar';
import Detalhes from '../pages/detalhes'
import Email from '../pages/alterar-email';
export const RoutesPath = {

  '/': Home,
'/*': Error404,
'/login': Login,
'/registrar': Register,
'/usuario': usuario,
'/criar':criar,
'/detalhes':Detalhes,
'/email':Email
};
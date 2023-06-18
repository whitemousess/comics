// routeConfig
import config from '~/config';

// Router change Pages
import Home from '~/pages/Home';
import Likes from '~/pages/Likes';
import Trending from '~/pages/Trending';
import Watched from '~/pages/Watched';
import author from '~/pages/Author';
import login from '~/pages/Login';
import register from '~/pages/Register';

const publicRoutes = [
    { path: config.routes.home, component: Home},
    { path: config.routes.likes, component: Likes},
    { path: config.routes.trending, component: Trending},
    { path: config.routes.watched, component: Watched},
    { path: config.routes.author, component: author},
    { path: config.routes.login, component: login , layout: null},
    { path: config.routes.register, component: register , layout: null},
]; 

const privateRoutes = []; 

export {publicRoutes ,privateRoutes};
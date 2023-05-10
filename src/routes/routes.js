// routeConfig
import config from '~/config';

// Router change Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';

const publicRoutes = [
    { path: config.routes.home, component: Home},
    { path: config.routes.following, component: Following},
]; 

const privateRoutes = []; 

export {publicRoutes ,privateRoutes};
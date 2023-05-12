// routeConfig
import config from '~/config';

// Router change Pages
import Home from '~/pages/Home';
import Likes from '~/pages/Likes';
import Trending from '~/pages/Trending';
import Watched from '~/pages/Watched';
import Author from '~/pages/Author';

const publicRoutes = [
    { path: config.routes.home, component: Home},
    { path: config.routes.likes, component: Likes},
    { path: config.routes.trending, component: Trending},
    { path: config.routes.watched, component: Watched},
    { path: config.routes.author, component: Author},
]; 

const privateRoutes = []; 

export {publicRoutes ,privateRoutes};
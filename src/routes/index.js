// Pages
import Home from '../pages/Home'
import About from '../pages/About'
import Product from '../pages/Product'
import Cart from '../pages/Cart'

// Public routes
const publicRoutes = [
    { path: '/', component: Home, layout: null},
    { path: '/about', component: About},
    { path: '/product', component: Product},
    { path: '/cart', component: Cart},
]

export { publicRoutes }
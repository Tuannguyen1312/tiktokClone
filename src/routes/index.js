import { HeaderOnly } from '~/Component/Layout'

import Home from '~/pages/Home'
import Follow from '~/pages/Follow'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
// public router 
const publicRoutes = [
    {path: '/' , component: Home},
    {path: '/follow' , component: Follow},
    {path: '/profile' , component: Profile},
    {path: '/upload' , component: Upload ,layout : HeaderOnly},
    {path: '/search' , component: Search ,layout : null},

];
// private router 
const privateRoutes = [
    
];
export { publicRoutes , privateRoutes } ;
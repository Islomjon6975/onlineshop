import { HomeComponents } from "../Components/Home";
import { Shop } from "../pages/Shop";

export const navbar = [
    {
        id: 1,
        title: "Home",
        path: '/home',
        element: <HomeComponents />,
        isPrivate: false,
    },
    {
        id: 2,
        title: "Shop",
        path: '/shop',
        element: <Shop />,
        isPrivate: true,
    }
]
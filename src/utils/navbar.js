import { HomeComponents } from "../Components/Home";
import { MyAccount } from "../Components/MyAccount";
import { Shop } from "../pages/Shop";

export const navbar = [
    {
        id: 1,
        title: "Home",
        path: '/home',
        element: <HomeComponents />,
        isPrivate: false,
        hidden: false
    },
    {
        id: 2,
        title: "Shop",
        path: '/shop',
        element: <Shop />,
        isPrivate: true,
        hidden: false,
    },
    {
        id: 3,
        title: "My Profile",
        path: '/myprofile',
        element: <MyAccount />,
        isPrivate: true,
        hidden: true
    },
]
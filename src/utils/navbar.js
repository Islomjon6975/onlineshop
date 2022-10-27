import { HomeComponents } from "../Components/Home";
import { MyAccount } from "../Components/MyAccount";
import { Params } from "../Components/Params";
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
        path: '/myprofile/account-details',
        element: <MyAccount />,
        isPrivate: true,
        hidden: true
    },
    {
        id: 4,
        title: "",
        path: '/shop/:id',
        element: <Params />,
        isPrivate: true,
        hidden: true,
    },
]
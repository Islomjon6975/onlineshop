import { HomeComponents } from "../Components/Home";

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
        element: <h1>Shop Page</h1>,
        isPrivate: true,
    }
]
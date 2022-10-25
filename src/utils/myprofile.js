import {ReactComponent as user} from '../assets/icons/myprofile-user.svg'
import {ReactComponent as bag} from '../assets/icons/myprofile-bag.svg'
import {ReactComponent as location} from '../assets/icons/myprofile-location.svg'
import {ReactComponent as heart} from '../assets/icons/myprofile-heart.svg'
import { AccountDetails } from '../Components/MyAccount/AccountDetails'

export const myprofile = [
    {
        id: 1,
        title: 'Account Details',
        path: '/myprofile/account-details',
        element: <AccountDetails />,
        icon: user
    },
    {
        id: 2,
        title: 'My Products',
        path: '/myprofile/myproducts',
        element: <h1>My Products</h1>,
        icon: bag
    },
    {
        id: 3,
        title: 'Address',
        path: '/myprofile/address',
        element: <h1>Address</h1>,
        icon: location
    },
    {
        id: 4,
        title: 'Wishlist',
        path: '/myprofile/wishlist',
        element: <h1>Wishlist</h1>,
        icon: heart
    },
]
import {ReactComponent as user} from '../assets/icons/myprofile-user.svg'
import {ReactComponent as bag} from '../assets/icons/myprofile-bag.svg'
import {ReactComponent as location} from '../assets/icons/myprofile-location.svg'
import {ReactComponent as heart} from '../assets/icons/myprofile-heart.svg'
import { AccountDetails } from '../Components/MyAccount/AccountDetails'
import { AddNew } from '../Components/MyAccount/AddNew'
import { Wishlist } from '../Components/MyAccount/Wishlist'
import { MyProducts } from '../Components/MyAccount/MyProducts'
import { Update } from '../Components/MyAccount/Update'

export const myprofile = [
    {
        id: 1,
        title: 'Account Details',
        path: '/myprofile/accountdetails',
        element:<AccountDetails />,
        icon: user
    },
    {
        id: 2,
        title: 'My Products',
        path: '/myprofile/myproducts',
        element: <MyProducts />,
        icon: bag
    },
    {
        id: 3,
        title: 'Address',
        path: '/myprofile/address',
        element: <h3>Address</h3>,
        icon: location
    },
    {
        id: 4,
        title: 'Wishlist',
        path: '/myprofile/wishlist',
        element: <Wishlist />,
        icon: heart
    },
    {
        id: 4,
        title: '',
        path: '/myprofile/addNew',
        element: <AddNew />,
        icon: heart,
        hidden: true,
    },
    {
        id: 5,
        title: '',
        path: '/myprofile/myproducts/:id',
        element: <Update />,
        icon: heart,
        hidden: true,
    }
]
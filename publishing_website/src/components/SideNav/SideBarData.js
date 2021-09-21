import { FaBook, FaMoneyBillWaveAlt } from 'react-icons/fa';
import { IoLibrary } from 'react-icons/io5'

export const sidebarData = [
    {
        title: 'Newest Release',
        path: '/newest_release',
        icon: <FaBook/>,
        cName: 'nav-text',
        cNameHide: 'nav-text.hide'
    },   
    {
        title: 'Full Collection',
        path: '/full_collection',
        icon: <IoLibrary/>,
        cName: 'nav-text',
        cNameHide: 'nav-text.hide'
    },
    {
        title: 'Support Me',
        path: '/support',
        icon: <FaMoneyBillWaveAlt/>,
        cName: 'nav-text',
        cNameHide: 'nav-text.hide'
    },
]
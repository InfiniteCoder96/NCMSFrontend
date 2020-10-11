import React from 'react';
import * as FasIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: "Home",
        path: '/',
        icon: <AiIcons.AiFillDashboard/>,
        cName: 'nav-text'
    },
    {
        title: "Patients",
        path: '/',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    },
    {
        title: "Hospitals",
        path: '/',
        icon: <AiIcons.AiFillShop/>,
        cName: 'nav-text'
    },
    {
        title: "Statistics",
        path: '/',
        icon: <AiIcons.AiFillDatabase/>,
        cName: 'nav-text'
    }
    
]
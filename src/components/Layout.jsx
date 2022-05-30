import React from 'react';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../components/Header';

const setActive= ({isActive})=>isActive ?'active-link':'';
// const [order, setOrder] = this.useState([]);
// const [isCartOpen, setCartOpen] = this.useState({open: false});

const Layout = () => {
    return (
        <>
        <Header
        />

        <main className='constainer'>
        <Outlet/>
        </main>
        
        <footer className='constainer'>2021</footer>
        </>
    );
};

export {Layout}
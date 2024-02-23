import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Menu from './pages/Menu';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/home" element={<UserMenu />} />
            <Route exact path="/cadastro" element={<Cadastro />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
            <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
    );
}

function UserMenu() {
    return (
        <Menu>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Menu>
    );
}

export default AppRoutes;

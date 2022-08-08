import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Home from './pages/index'
import Deposit from './pages/deposit'
import Withdraw from './pages/withdraw'
import Extract from './pages/extract'


const RouteComponent = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/deposito" element={<Deposit />} />
                <Route path="/saque" element={<Withdraw />} />
                <Route path="/extrato" element={<Extract />} />

                <Route path="*" element={() => <h1>Página não encontrada</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteComponent;

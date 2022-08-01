import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import { About } from './pages/about';
import { AgriculturalSupplies } from './pages/agriculturalSupplies';
import { Checkout } from './pages/checkout';
import { Home } from './pages/home';
import { IndoorPlant } from './pages/indoorPlant';
import { Login } from './pages/login';
import { MyAccount } from './pages/myAccount';
import { MyOrders } from './pages/myOrders';
import { OutdoorPlant } from './pages/outdoorPlant';
import { Pots } from './pages/pots';
import { ProductDetails } from './pages/productDetails';
import { Profile } from './pages/profile';
import { SummerOffers } from './pages/summerOffers';
import { ViewCart } from './pages/viewCart';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<BrowserRouter>
		<Routes>
			<Route path='/' element={<Home />} />
            <Route path='/indoorplant' element={<IndoorPlant />} />
            <Route path='/outdoorplant' element={<OutdoorPlant />} />
            <Route path='/agricultural' element={<AgriculturalSupplies />} />
            <Route path='/pots' element={<Pots />} />
            <Route path='/details' element={<ProductDetails />} />
            <Route path='/offers' element={<SummerOffers />} />
            <Route path='/about' element={<About />} />
            <Route path='/myaccount' element={<MyAccount />} />
            <Route path='/profile' element={<Profile />} />
			<Route path='/myordres' element={<MyOrders />} />
			<Route path='/myaddress' element={<MyOrders />} />
			<Route path='/cart' element={<ViewCart />} />
            <Route path='/checkout' element={<Checkout />} />
			<Route path='/login' element={<Login />} />
		</Routes>
	</BrowserRouter>
);


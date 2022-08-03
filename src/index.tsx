import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import { AboutPage } from './pages/about';
import { AgriculturalSupplies } from './pages/agriculturalSupplies';
import { Checkout } from './pages/checkout';
import { Home } from './pages/home';
import { IndoorPlantPage } from './pages/indoorPlant';
import { LoginPage } from './pages/login';
import { PotsPage } from './pages/pots';
import { ProductDetails } from './pages/productDetails';
import { SummerOffers } from './pages/summerOffers';
import { ViewCart } from './pages/viewCart';
import { NotfoundPage } from './pages/notfound';
import { MyAccountPage } from './pages/myAccount';
import { MyOrdersPage } from './pages/myOrders';
import { MyProfilePage } from './pages/profile';

import { MyAddressPage } from './pages/myAddress';
import { OutdoorPlantPage } from './pages/outdoorPlant';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<BrowserRouter>
		<Routes>
			      <Route path='/' element={<Home />} />
            <Route path='/indoorplant' element={<IndoorPlantPage />} />
            <Route path='/outdoorplant' element={<OutdoorPlantPage />} />
            <Route path='/agricultural' element={<AgriculturalSupplies />} />
            <Route path='/pots' element={<PotsPage />} />
            <Route path='/details' element={<ProductDetails />} />
            <Route path='/offers' element={<SummerOffers />} />
            <Route path='/myaccount' element={<MyAccountPage />} />
            <Route path='/profile' element={<MyProfilePage />} />
			<Route path='/myOrdres' element={<MyOrdersPage />} />
			<Route path='/myaddress' element={<MyAddressPage />} />
      <Route path='/*' element={<NotfoundPage />} />
            <Route path='/about' element={<AboutPage />} />
			      <Route path='/cart' element={<ViewCart />} />
            <Route path='/checkout' element={<Checkout />} />
			      <Route path='/login' element={<LoginPage />} />
		</Routes>
	</BrowserRouter>
);


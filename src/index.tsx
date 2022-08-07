import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import { AboutPage } from './pages/about';
import { AgriculturalSupplies } from './pages/agriculturalSupplies';
import {CheckoutPage} from './pages/checkout';
import { Home } from './pages/home';
import { IndoorPlantPage } from './pages/indoorPlant';
import { LoginPage } from './pages/login';
import { PotsPage } from './pages/pots';
import { ProductDetails } from './pages/productDetails';
import { SummerOffers } from './pages/summerOffers';
import { ViewCartPage } from './pages/viewCart';
import { NotfoundPage } from './pages/notfound';
import { MyAccountPage } from './pages/myAccount';
import { MyOrdersPage } from './pages/myOrders';
import { MyProfilePage } from './pages/profile';

import { MyAddressPage } from './pages/myAddress';
import { OutdoorPlantPage } from './pages/outdoorPlant';
import { IndoorDetailsPage } from './pages/indoorDetails';
import { BillPage } from './pages/bill';
import { OutdoorDetailsPage } from './pages/OutdoorDetails';
import { PootDetailsPage } from './pages/PootDetailsPage';
import { ToolDetailPage } from './pages/ToolDetails';



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
			      <Route path='/cart/:type/:id' element={<ViewCartPage />} />
            <Route path='/cart' element={<ViewCartPage />} />
            <Route path='/checkout' element={<CheckoutPage />} />
			      <Route path='/login' element={<LoginPage />} />
            <Route path='/indoordetails/:id' element={<IndoorDetailsPage />} />
            <Route path='/bill' element={<BillPage />} />
            <Route path='/outoordetails/:id' element={<OutdoorDetailsPage />} />
            <Route path='/pootdetails/:id' element={<PootDetailsPage />} />
            <Route path='/tooldetails/:id' element={<ToolDetailPage />} />


		</Routes>
	</BrowserRouter>
);


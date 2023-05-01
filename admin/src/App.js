import React, { useContext } from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/constants/Navbar';
import SideBar from './components/constants/SideBar';
import { MyStore } from './context/store';
import AddProducts from './pages/AddProducts';
import Category from './pages/Category';
import Commandes from './pages/Commandes';
import DetailsCommande from './pages/DetailsCommande';
import Home from './pages/Home';
import InfosUser from './pages/InfosUser';
import ProductList from './pages/ProductList';
import UpdateProduct from './pages/UpdateProduct';
import Users from './pages/Users';

function App() {
  const {theme} = useContext(MyStore)

  return (
    <>
    <Navbar/>
    <div className="App" style={{background:theme.background}}>
    <SideBar />
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/products' element={<ProductList/>}/>
       <Route path='/products/:id' element={<UpdateProduct/>}/>
       <Route path='/addproducts' element={<AddProducts/>} />
       <Route path='/orders' element={<Commandes/>} />
       <Route path='/orders/:id' element={<DetailsCommande/>} />
       <Route path='/users' element={<Users/>}/>
       <Route path='/users/:id' element={<InfosUser/>} />
       <Route path='/category' element={<Category/>} />
     </Routes> 
    </div>
    </>
  );
}

export default App;

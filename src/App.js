import Nav from './Nav'
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import PrivateComponent from './components/privateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct'
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
import Profile from './components/Profile';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}></Route>
          <Route path="/" element={<ProductList />}></Route>
          <Route path="/add" element={<AddProduct />}></Route>
          <Route path="/update/:id" element={<UpdateProduct />}></Route>
          <Route path="/logout" element={<h1>logout Product listening Component</h1>}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

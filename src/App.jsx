import { Route, Routes, useSearchParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const App = () => {
  
  const {isDarkMode} = useSelector((state)=>state.theme);

  return <div >
    {/* code by arshdeepsingh011 github*/}
    <Toaster></Toaster>
    <div className='bg-slate-900 px-3 w-screen'>
    <Navbar></Navbar>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
  </div>;
};

export default App;

import {BrowserRouter,Routes,Route}from 'react-router-dom';
import Home from './pages/Home';
import Menu from './components/menu';
import About from './components/about';
import Testimonials from './components/testimonials';
import Contact from './components/Contact';

function App(){
  return(
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/menu' element={<Menu></Menu>}></Route>
  <Route path='/About' element={<About></About>}></Route>
  <Route path='/Testimonials' element={<Testimonials></Testimonials>}></Route>
  <Route path='/Contact' element={<Contact></Contact>}></Route>
</Routes>

</BrowserRouter>

   
  )
}

export default App


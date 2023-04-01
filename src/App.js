import './App.css';
import React from 'react';
import Sidebar from './pages/Sidebar'
import RoutesNav from './component/RoutesNav';


function App() {
  return (
    <>
      {/* <Sidebar /> */}
      <RoutesNav />
      {/* <Header /> */}
      {/* <Heads />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/lawyer' element={<Lawyer />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        </div> */}
    </>
  );
}

export default App;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

import BloodDonor from './Components/BloodDonor';
import Tablets from './Components/Tablets';
import Doctors from './Components/Doctors';
import Profile from './Components/Profile';
import MyAppointments from './Components/MyAppointments';
import MyPrescriptions from './Components/MyPrescriptions';
import Logout from './Components/Logout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
         
          <Route path='/BloodDonor' element={<BloodDonor />} />
          <Route path='/Tablets' element={<Tablets />} />
          <Route path='/Doctors' element={<Doctors />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/MyAppointments' element={<MyAppointments />} />
          <Route path='/MyPrescriptions' element={<MyPrescriptions />} />
          <Route path='/Logout' element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

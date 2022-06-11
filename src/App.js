import React from 'react'
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';


function App() {
    return(
        <div className='App'>
            <Navbar />
            <Cart />
            <HomeScreen />
        </div>
    )
  
}

export default App;

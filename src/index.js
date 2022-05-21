import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import mahesh from './mahesh.jpg';
// import Test from './test';
// import Cart from './cart';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';

// var list = [
//   "Mahesh", "NTR", "Ramcharan", "Prabhas", "Nani",
//   "Mahesh", "NTR", "Ramcharan", "Prabhas", "Nani",
//   "Mahesh", "NTR", "Ramcharan", "Prabhas", "Nani",
// ]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
     */}
    {/* <section className='onclick'>

    <div className='left'>
       
       <img src={mahesh} className="image" alt='images'/>

    </div><div className='Right'>
      
      <h1>SARKARU VARI PATAA (2022)</h1>

      <div className='Box'>
         
      </div>

      <div className='characters'>
        
        {
            list.map((e) => <div className='name'>
              <img src={mahesh} className="imagename" alt='movies'/>
              {e}
            </div>)
        }

      </div>

      <div className='button'>
        <button>🎥 WATCH THE TRAILER</button>
      </div>

    </div>

    </section> */}
  </React.StrictMode>
);


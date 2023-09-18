import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Achievements from './pages/Achievements';

const App = () => {
    return (
        <Suspense fallback={null}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/realisations' element={<Achievements />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};

export default App;
 ;
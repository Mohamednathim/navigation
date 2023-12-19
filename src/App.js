import './App.css';
import All from './components/All';
import Career from './components/Career';
import CyberSecurity from './components/CyberSecurity';
import DataScience from './components/DataScience';
import FullStackDevelopment from './components/FullStackDevelopment';
import { Link, Routes, Route } from 'react-router-dom';

function App() {

    return (
        <>
            <nav className='navbar d-flex justify-content-center align-items-center navbar-expand-lg navbar-light bg-light'>
                <ul className='navbar-nav'>
                    <li className='nav-item'><Link className='nav-link' to='/'>All</Link></li>
                    <li className='nav-item'><Link className='nav-link' to='/FullStackDevelopment'>FULL STACK DEVOLOPMENT</Link></li>
                    <li className='nav-item'><Link className='nav-link' to='/DataScience'>DATA SCIENCE</Link></li>
                    <li className='nav-item'><Link className='nav-link' to='/CyberSecurity'>CYBER SECURITY</Link></li>
                    <li className='nav-item'><Link className='nav-link' to='/Career'>CAREER</Link></li>
                </ul>
            </nav>



            <Routes>
                <Route path='/' element={<All />} />
                <Route path='/FullStackDevelopment' element={<FullStackDevelopment />} />
                <Route path='/DataScience' element={<DataScience />} />
                <Route path='/CyberSecurity' element={<CyberSecurity />} />
                <Route path='/Career' element={<Career />} />
            </Routes>
        </>

    );
}


export default App;

import '../App.css';
import { FaUser, FaLock } from "react-icons/fa";
import Pic5 from '../Assets/Pic5.png';
import NavigationBar from '../Components/NavigationBar'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';


function Login() {
    const location = useLocation();
    const { data } = location.state || {};
    const [welcome, setwelcome] = useState('');
    useEffect(() => {
        if (data) {
            setwelcome(data);
        }
    }, [data]);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        // <div className="Login formFiveCard">
        <div className='Screeam'>
            <nav >
                <NavigationBar />
            </nav>
            <div className='threeCard'>
                <form onSubmit={handleSubmit} className='Login'>
                    <h1>Login</h1>
                    {welcome && <div style={{ color: 'red' }}>{welcome}</div>}
                    <div className='input-box'>
                        {/* <input type='text' placeholder='Usuario o email' required /> */}
                        <input type='text' className="inputFormBasic" placeholder='Usuario o email' required onChange={e => setEmail(e.target.value)} />
                        <FaUser className='iconLogin' />
                    </div>
                    <div className='input-box'>
                        {/* <input type='password' placeholder='Password' required /> */}
                        <input type='password' className="inputFormBasic" placeholder='Password' required onChange={e => setPassword(e.target.value)} />
                        <FaLock className='iconLogin' />

                    </div>
                    <div className='remember-forgot'>
                        <label><input type="checkbox" />Recuerdame</label>
                        <a href='#'>Olvide contraseña</a>
                    </div>
                    <button type='submit' className='btnThreeCard'>Login</button>
                    <div className="register-link">
                        <p>No tienes Cuenta? <a href='#'>Registrar me</a> </p>
                    </div>
                </form>
                <img src={Pic5} alt="pic5" className="threeCardImage" />
            </div>
            <Footer />
        </div>
    );
}

export default Login;

import '../App.css';
import NavigationBar from '../Components/NavigationBar'
import { useState } from 'react';
import axios from 'axios';
import JoinUS from '../Assets/JoinUs.png'
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';


function Register() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [rpassword, setRPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    function handleSubmit(event) {
        event.preventDefault();
        if (password.length < 8) {
            setError('El campo debe tener al menos 8 caracteres');
        } else if (password.length > 20) {
            setError('El campo no puede tener más de 20 caracteres');
        } else {
            setError('');
        }
        console.log(username, email, password, phone, name)
        if (password === rpassword) {
            setError('');
        } else {
            setError('Las contraseñas no coinsiden');
        }
        axios.post('http://localhost:3001/Register', { username, email, password, phone, name })
            .then(res => {
                if (res.status === 201) {
                    setError('Ususario ya existe');
                } else {
                    navigate('/', { state: { data: 'Usuario REgistrado con exito' } });

                    console.log(res)
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="Screeam">
            <nav >
                <NavigationBar />
            </nav>
            <div className="fiveCard" >
                <img src={JoinUS} alt="backgroun" style={{ position: "absolute", width: "100%", objectFit: "fill", zindex: "-1", maxHeight: "800px" }} />
                <div className="formFiveCard">
                    <form onSubmit={handleSubmit} className='regsiter'>
                        <h1 style={{ fontSize: "56px", fontWeight: "bold", color: "white", margin: "2%" }}>Registro</h1>
                        <div style={{ display: "flex" }}>
                            <input type="text" className="inputFormBasic" placeholder="Nombre" style={{ marginRight: "0px", width: "100%" }} required onChange={e => setName(e.target.value)} />
                            <input type="text" className="inputFormBasic" placeholder="Username" style={{ width: "100%" }} required onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div style={{ display: "flex" }}>
                            <input type="number" className="inputFormBasic" placeholder="Telefono" style={{ marginRight: "0px", width: "100%" }} required onChange={e => setPhone(e.target.value)} />
                            <input type="email" className="inputFormBasic" placeholder="Email" style={{ width: "100%" }} required onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div style={{ display: "flex" }}>
                            <input type="password" className="inputFormBasic" placeholder="Contraseña" required onChange={e => setPassword(e.target.value)} style={{ marginRight: "0px", width: "95%" }} />
                            <input type="password" className="inputFormBasic" placeholder="Verificar Contraseña" style={{ width: "91%" }} required onChange={e => setRPassword(e.target.value)} />
                        </div>
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                        <button className="btnStandarIn" style={{ maxWidth: "fit-content", margin: "2 %" }}>Registrar</button>
                        < p style={{ fontSize: "16px", fontWeight: "bold", color: "white", marginTop: "2 %", marginLeft: "2 %", textAlign: "center" }}>
                        </p >
                    </form>
                </div >
            </div >
        </div>
    );
}

export default Register;

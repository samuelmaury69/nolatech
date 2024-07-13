import React, { useState, useEffect } from 'react';
import './Modal.css';

const Modal = ({ show, handleClose, user, handleSave }) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (user) {
            setName(user.name || '');
            setUsername(user.username || '');
            setEmail(user.email || '');
            setPhone(user.phone || '');
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Number.isInteger(parseInt(user))) {
            handleSave({ ...user, name, username, email, phone });
        } else {
            handleSave({ user });
        }

    };

    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">

                {name ? <h2>Editar Usuario</h2> : <h2>Eliminar usuario </h2>}
                {name ? <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        Phone:
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </label>
                    <button type="submit">Save</button>
                    <button type="button" onClick={handleClose}>
                        Cancel
                    </button>
                </form> : <form onSubmit={handleSubmit}><p>Seguro que desea Eliminar este usuario?</p><input
                    type="text" value={user} onChange={(e) => setPhone(e.target.value)} readOnly /><button type="submit" style={{ backgroundColor: "red" }}>si</button>
                    <button type="" onClick={handleClose}>
                        no
                    </button></form>}
            </div>
        </div>
    );
};

export default Modal;

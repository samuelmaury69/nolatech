import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationBar from '../Components/NavigationBar';
import Modal from '../Components/Modal';
import '../App.css';
import { FaPencil } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';

function ListUser() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const count = 10;

    useEffect(() => {
        fetchUsers(currentPage);
    }, [currentPage]);

    const fetchUsers = (page) => {
        axios.get(`http://localhost:3001/api/v1/users?page=${page}&count=${count}`)
            .then(res => {
                setUsers(res.data.users);
                setCurrentPage(res.data.currentPage);
                setTotalPages(res.data.totalPages);
            })
            .catch(err => console.log(err));
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleEditUser = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    const handleSaveUser = (updatedUser) => {
        if (updatedUser.user) {
            axios.delete(`http://localhost:3001/api/v1/users/${updatedUser.user}`, updatedUser)
                .then(res => {
                    navigate('/List', { state: { data: 'Usuario REgistrado con exito' } });
                    console.log(res)
                })
                .catch(err => console.log(err));
        } else {
            axios.post(`http://localhost:3001/api/v1/users/${updatedUser.id}`, updatedUser)
                .then(res => {
                    console.log(res)
                })
                .catch(err => console.log(err));
        }
        setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
        setShowModal(false);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedUser(null);
    };

    return (
        <div className=''>
            <nav>
                <NavigationBar />
            </nav>
            <div className='ListUser'>
                <h1>Lista de Usuarios</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <button onClick={() => handleEditUser(user)}>Editar  <FaPencil /></button>
                                    <button className="ButtonDelete" onClick={() => handleEditUser(user.id)}>Eliminar <FaTrashAlt /> </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='pagination'>
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>Anterior</button>
                    <span>Página {currentPage} de {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>Siguiente</button>
                </div>
            </div>
            <Modal
                show={showModal}
                handleClose={handleCloseModal}
                user={selectedUser || {}}
                handleSave={handleSaveUser}
            />
            <Footer />
        </div>
    );
}

export default ListUser;



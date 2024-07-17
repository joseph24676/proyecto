import React, { useState, useEffect } from 'react';

const Perfil = () => {
    const [user, setUser] = useState({
        fName: '',
        lName: '',
        faculty: '',
        course: '',
        id: '',
        phone: '',
        profilePicture: 'default-profile.jpg' // Ruta por defecto de la imagen de perfil
    });
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user')) || {};
        setUser(storedUser);
    }, []);

    const validateText = (input) => {
        const regex = /^[a-zA-Z\s]*$/;
        if (!regex.test(input)) {
            alert('Solo se permiten letras y espacios.');
            return false;
        }
        return true;
    };

    const validateNumber = (input) => {
        const regex = /^[0-9]*$/;
        if (!regex.test(input)) {
            alert('Solo se permiten números.');
            return false;
        }
        return true;
    };

    const saveProfile = () => {
        if (!validateText(user.fName) || !validateText(user.lName) || !validateText(user.faculty) || !validateText(user.course) || !validateNumber(user.id) || !validateNumber(user.phone)) {
            return;
        }
        localStorage.setItem('user', JSON.stringify(user));
        alert('Perfil actualizado exitosamente.');
        setEditing(false);
    };

    const saveProfilePicture = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
                alert('Por favor, selecciona una imagen JPEG, PNG o GIF.');
                return;
            }

            const reader = new FileReader();
            reader.onload = function (event) {
                const imageUrl = event.target.result;
                setUser(prevUser => ({ ...prevUser, profilePicture: imageUrl }));
                alert('Foto de perfil guardada exitosamente.');
            };
            reader.readAsDataURL(file);
        } else {
            alert('Por favor, selecciona una imagen.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }));
    };

    const renderEditForm = () => (
        <>
            <h2>Editar Información Personal</h2>
            <div className="pf-profile-picture">
                <img src={user.profilePicture} alt="Foto de Perfil" id="profile-picture" />
                <input type="file" accept="image/*" id="profile-picture-input" onChange={saveProfilePicture} />
            </div>
            <p><strong>Nombre:</strong> <input type="text" name="fName" className="pf-input" value={user.fName} onChange={handleChange} /></p>
            <p><strong>Apellido:</strong> <input type="text" name="lName" className="pf-input" value={user.lName} onChange={handleChange} /></p>
            <p><strong>Pais:</strong> <input type="text" name="pais" className="pf-input" value={user.pais} onChange={handleChange} /></p>
            <p><strong>Ciudad:</strong> <input type="text" name="ciudad" className="pf-input" value={user.ciudad} onChange={handleChange} /></p>
            <p><strong>Cédula / Pasaporte:</strong> <input type="text" name="id" className="pf-input" value={user.id} onChange={handleChange} /></p>
            <p><strong>Teléfono:</strong> <input type="text" name="phone" className="pf-input" value={user.phone} onChange={handleChange} /></p>
            <button className="pf-button" onClick={saveProfile}>Guardar Cambios</button>
        </>
    );

    const renderProfile = () => (
        <>
            <h2>Información Personal</h2>
            <div className="pf-profile-picture">
                <img src={user.profilePicture} alt="Foto de Perfil" id="profile-picture" />
            </div>
            <p><strong>Nombre:</strong> {user.fName} {user.lName}</p>
            <p><strong>Pais:</strong> {user.pais}</p>
            <p><strong>Ciudad:</strong> {user.ciudad}</p>
            <p><strong>Cédula / Pasaporte:</strong> {user.id}</p>
            <p><strong>Teléfono:</strong> {user.phone}</p>
            <button className="pf-button" onClick={() => setEditing(true)}>Editar Perfil</button>
        </>
    );

    return (
        <div className="pf-body">
            <div className="pf-container">
                <div className="pf-profile">
                    <div className="pf-profile-header">
                        <h1>Información del estudiante</h1>
                    </div>
                    <div className="pf-profile-body">
                        <div className="pf-profile-info" id="profile-container">
                            {localStorage.getItem('user') ? (editing ? renderEditForm() : renderProfile()) : (window.location.href = "inicio.html")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Perfil;

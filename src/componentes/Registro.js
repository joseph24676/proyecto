import React, { useState } from 'react';

const Registro = () => {
    const [view, setView] = useState('signIn');
    const [formData, setFormData] = useState({
        signInEmail: '',
        signInPassword: '',
        fName: '',
        lName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({
        fNameError: '',
        lNameError: '',
        emailError: '',
        passwordError: '',
        confirmPasswordError: '',
        signInError: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateFirstName = () => {
        const firstName = formData.fName.trim().toUpperCase();
        if (firstName.length < 3) {
            setErrors((prevErrors) => ({ ...prevErrors, fNameError: "El nombre debe tener al menos 3 caracteres." }));
            return false;
        }
        const nameRegex = /^[A-Z\s]+$/;
        if (!nameRegex.test(firstName)) {
            setErrors((prevErrors) => ({ ...prevErrors, fNameError: "El nombre solo puede contener letras." }));
            return false;
        }
        setErrors((prevErrors) => ({ ...prevErrors, fNameError: '' }));
        return true;
    };

    const validateLastName = () => {
        const lastName = formData.lName.trim().toUpperCase();
        if (lastName.length < 3) {
            setErrors((prevErrors) => ({ ...prevErrors, lNameError: "El apellido debe tener al menos 3 caracteres." }));
            return false;
        }
        const nameRegex = /^[A-Z\s]+$/;
        if (!nameRegex.test(lastName)) {
            setErrors((prevErrors) => ({ ...prevErrors, lNameError: "El apellido solo puede contener letras." }));
            return false;
        }
        setErrors((prevErrors) => ({ ...prevErrors, lNameError: '' }));
        return true;
    };

    const validateEmail = () => {
        const email = formData.email.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrors((prevErrors) => ({ ...prevErrors, emailError: "Por favor ingresa una dirección de correo electrónico válida." }));
            return false;
        }
        setErrors((prevErrors) => ({ ...prevErrors, emailError: '' }));
        return true;
    };

    const validatePassword = () => {
        const password = formData.password.trim();
        if (password.length < 5) {
            setErrors((prevErrors) => ({ ...prevErrors, passwordError: "La contraseña debe tener al menos 5 caracteres." }));
            return false;
        }
        setErrors((prevErrors) => ({ ...prevErrors, passwordError: '' }));
        return true;
    };

    const validateConfirmPassword = () => {
        const password = formData.password.trim();
        const confirmPassword = formData.confirmPassword.trim();
        if (password !== confirmPassword) {
            setErrors((prevErrors) => ({ ...prevErrors, confirmPasswordError: "Las contraseñas no coinciden." }));
            return false;
        }
        setErrors((prevErrors) => ({ ...prevErrors, confirmPasswordError: '' }));
        return true;
    };

    const register = (e) => {
        e.preventDefault();
        const isFirstNameValid = validateFirstName();
        const isLastNameValid = validateLastName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();

        if (!isFirstNameValid || !isLastNameValid || !isEmailValid || !isPasswordValid || !isConfirmPasswordValid) {
            return;
        }

        const user = {
            fName: formData.fName.trim().toUpperCase(),
            lName: formData.lName.trim().toUpperCase(),
            email: formData.email.trim(),
            password: formData.password.trim()
        };
        localStorage.setItem('user', JSON.stringify(user));
        alert(`¡Registro exitoso! Bienvenido, ${user.fName} ${user.lName}!`);
        setView('signIn');
    };

    const signIn = () => {
        const { signInEmail, signInPassword } = formData;
        setErrors((prevErrors) => ({ ...prevErrors, signInError: '' }));

        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            if (signInEmail === parsedUser.email && signInPassword === parsedUser.password) {
                alert(`¡Inicio de sesión exitoso para ${signInEmail}!`);
                window.location.href = "./principal";
            } else {
                setErrors((prevErrors) => ({ ...prevErrors, signInError: "El correo electrónico o la contraseña son incorrectos." }));
            }
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, signInError: "No hay usuarios registrados. Por favor regístrate primero." }));
        }
    };

    const togglePasswordVisibility = (id) => {
        const input = document.getElementById(id);
        input.type = input.type === "password" ? "text" : "password";
    };

    return (
        <div className="rg-img">
            {view === 'signIn' ? (
                <div className="rg-registro" id="signIn">
                    <h1 className="rg-form-title">Iniciar Sesión</h1>
                    <div className="rg-input-group">
                        <i className="rg-fas fa-envelope"></i>
                        <input type="email" name="signInEmail" id="signInEmail" value={formData.signInEmail} onChange={handleChange} required />
                        <label htmlFor="signInEmail">Correo electrónico</label>
                    </div>
                    <div className="rg-input-group">
                        <i className="rg-fas fa-lock"></i>
                        <input type="password" name="signInPassword" id="signInPassword" value={formData.signInPassword} onChange={handleChange} required />
                        <label htmlFor="signInPassword">Contraseña</label>
                        <span className="show-password">
                            <input type="checkbox" onClick={() => togglePasswordVisibility('signInPassword')} /> Mostrar
                        </span>
                    </div>
                    <input type="submit" className="rg-btn" value="Iniciar Sesión" name="signIn" onClick={signIn} />
                    <p className="rg-or">¿Todavía no tienes una cuenta? <button className="btn-rg" onClick={() => setView('signUp')}>Registrarse</button></p>
                    <div id="signIn-error-container" style={{ color: 'red' }}>{errors.signInError}</div>
                </div>
            ) : (
                <div className="rg-registro" id="my-signup">
                    <h1 className="rg-form-title">Registro de Usuario</h1>
                    <form onSubmit={register}>
                        <div className="rg-input-group">
                            <i className="rg-fas fa-user"></i>
                            <input type="text" name="fName" id="fName" value={formData.fName} onChange={handleChange} onBlur={validateFirstName} required />
                            <label htmlFor="fName">Nombres Completos</label>
                            <div className="error" style={{ color: 'red' }}>{errors.fNameError}</div>
                        </div>
                        <div className="rg-input-group">
                            <i className="rg-fas fa-user"></i>
                            <input type="text" name="lName" id="lName" value={formData.lName} onChange={handleChange} onBlur={validateLastName} required />
                            <label htmlFor="lName">Apellidos Completos</label>
                            <div className="error" style={{ color: 'red' }}>{errors.lNameError}</div>
                        </div>
                        <div className="rg-input-group">
                            <i className="rg-fas fa-envelope"></i>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} onBlur={validateEmail} required />
                            <label htmlFor="email">Correo electrónico</label>
                            <div className="error" style={{ color: 'red' }}>{errors.emailError}</div>
                        </div>
                        <div className="rg-input-group">
                            <i className="rg-fas fa-lock"></i>
                            <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} onBlur={validatePassword} required />
                            <label htmlFor="password">Contraseña</label>
                            <span className="show-password">
                                <input type="checkbox" onClick={() => togglePasswordVisibility('password')} /> Mostrar
                            </span>
                            <div className="error" style={{ color: 'red' }}>{errors.passwordError}</div>
                        </div>
                        <div className="rg-input-group">
                            <i className="rg-fas fa-lock"></i>
                            <input type="password" name="confirmPassword" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} onBlur={validateConfirmPassword} required />
                            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                            <span className="show-password">
                                <input type="checkbox" onClick={() => togglePasswordVisibility('confirmPassword')} /> Mostrar
                            </span>
                            <div className="error" style={{ color: 'red' }}>{errors.confirmPasswordError}</div>
                        </div>
                        <input type="submit" className="rg-btn" value="Registrarse" name="signUp" />
                    </form>
                    <p className="rg-or">¿Ya tienes una cuenta? <button className="btn-rg" onClick={() => setView('signIn')}>Iniciar Sesión</button></p>
                    <div id="register-error-container" style={{ color: 'red' }}></div>
                </div>
            )}
        </div>
    );
};

export default Registro;

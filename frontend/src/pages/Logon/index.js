import React from 'react';//'./node_modules/react';

import {Link} from 'react-router-dom';

import {FiLogIn} from 'react-icons/fi';

import './styles.css'; //importa estilos de Logon/style.css

import logoImg from '../../assets/logo.svg'; //importa logo
import heroesImg from '../../assets/heroes.png'; //importa imagem
//import heroesImg from '../../assets/heroes.jpg'; //importa imagem

export default function Logon() {
    return(
        <div className="Logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero" />

                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID" />
                    <button className='button' type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form> 
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>

    );
}
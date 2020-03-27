import React, { useState } from 'react';
import './styles.css'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function HandleRegister(evento) {
        evento.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try {

            const response = await api.post('ongs', data);

            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');

        } catch (error) {

            alert('Erro no cadastro, tente novamente.');
        }

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                    Voltar para o logon
                    </Link>
                </section>

                <form onSubmit={HandleRegister}>
                    <input placeholder="Nome da ONG" value={name} onChange={evento => setName(evento.target.value)} />

                    <input type="email" placeholder="E-mail" value={email} onChange={evento => setEmail(evento.target.value)} />

                    <input placeholder="WhatsApp" value={whatsapp} onChange={evento => setWhatsapp(evento.target.value)} />

                    <div className="input-group">
                        <input placeholder="Cidade" value={city} onChange={evento => setCity(evento.target.value)} />
                        <input placeholder="UF" style={{ width: 80 }} value={uf} onChange={evento => setUf(evento.target.value)} />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

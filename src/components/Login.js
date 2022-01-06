import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import styled from "styled-components";
import axios from "axios";
import Logo from '../assets/logo.png';
//import Loader from 'react-loader-spinner';

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleLogin() {
    
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
          email,
          password
        });
    
        promise.then(response => navigate('/hoje'));
        promise.catch(handleFailure);
    }

    // function handleSuccess(){
       
    // }

    function handleFailure(){
        alert('Dados inválidos, tente novamente!');
    }

    return (
            <Container>
                <img src={Logo}></img>
                    <Input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}></Input>
                    <Input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)}></Input>
                    <Button type="submit" onClick={handleLogin}>Entrar</Button>
                <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
            </Container>
    );
}

const Container = styled.div`
    padding-top: 68px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`

const Input = styled.input`
    width: 303px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    outline: 0;

    ::placeholder{
        color: #DBDBDB;
        padding-left: 10px;
        font-size: 20px;
        font-weight: 400;
    }
`

const Button = styled.button`
    background-color: #52B6FF;
    color: #fff;
    width: 303px;
    height: 45px;
    border: none;
    border-radius: 4px;
    font-size: 21px;
    cursor: pointer;
`

const StyledLink = styled(Link)`
    color: #52B6FF;
    font-size: 14px;
    font-weight: 400;
    text-decoration-line: underline;
`
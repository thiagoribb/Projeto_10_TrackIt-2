import { useState, useContext} from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import styled from "styled-components";
import axios from "axios";
import Logo from '../assets/logo.png';
import UserContext from "../contexts/UserContext";
import Loading from './Loading';

export default function Login(){

    const { setToken } = useContext(UserContext);

   const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleLogin() {
    
        setLoading(true);

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
          email,
          password
        });
    
        promise.then(handleSuccess);
        promise.catch(handleFailure);
    }

    function handleSuccess(response){
        navigate('/hoje');
        setToken(response.data);
    }

    function handleFailure(error){
        setEmail('');
        setPassword('');
        alert(error.response.data.message);
        setLoading(false);
    }

    return (
        <Container>
            <img src={Logo}></img>
                <Input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} handleLoading={loading}></Input>
                <Input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} handleLoading={loading}></Input>
                <Button type="submit" onClick={handleLogin} handleLoading={loading}>
                    {loading ? <Loading /> : "Entrar"}
                </Button>
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
    padding-left: 10px;
    font-size: 20px;
    font-weight: 400;
    background-color: ${(props) => props.handleLoading ? "#F2F2F2" : "#FFFFFF"};
    color: ${(props) => props.handleLoading ? "#AFAFAF" : "#000"};
    
    ::placeholder{
        color: #DBDBDB;
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
    opacity: ${(props) => props.handleLoading ? 0.7 : 1};
`

const StyledLink = styled(Link)`
    color: #52B6FF;
    font-size: 14px;
    font-weight: 400;
    text-decoration-line: underline;
`
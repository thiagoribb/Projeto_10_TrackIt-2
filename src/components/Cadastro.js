import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from '../assets/logo.png';

export default function Cadastro(){
    return (
        <>
            <Container>
                <img src={Logo}></img>
                <Input type="email" placeholder="email"></Input>
                <Input type="password" placeholder="senha"></Input>
                <Input type="text" placeholder="nome"></Input>
                <Input type="url" placeholder="foto"></Input>
                <Button>Cadastrar</Button>
                <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
            </Container>
         </>
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
`

const StyledLink = styled(Link)`
  color: #52B6FF;
  font-size: 14px;
  font-weight: 400;
  text-decoration-line: underline;
`
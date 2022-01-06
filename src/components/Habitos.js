import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react/cjs/react.development";

export default function Habitos(){

    const [criarHabito, setCriarHabito] = useState();

    return (
        <>
            <Header/>
            <Body>
                <Habits>
                    <Titulo>Meus hábitos</Titulo>
                    <Button onClick={criarHabito}>+</Button>
                </Habits>
                <SubTitulo>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</SubTitulo>
            </Body>
            <Footer/>
        </>
    );
}

function criarHabito(){
    return (
        <Container>
            <Habits>
                <Titulo>Meus hábitos</Titulo>
                <Button>+</Button>
            </Habits>

            <NovoHabito>

            </NovoHabito>

            <SubTitulo>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</SubTitulo>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Habits = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Titulo = styled.h2`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 23px;
    color: #126BA5;
    padding-bottom: 17px;
`

const SubTitulo = styled.h3`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #666;
    margin-bottom: 28px;
`

const Button = styled.button`
    font-family: 'Lexend Deca', sans-serif;
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    color: #fff;
    font-size: 27px;
    border: none;
    border-radius: 4.6px;
    display: flex;
    justify-content: center;
    align-items: center;    
`

const Body = styled.div`
    width: 375px;
    height: 100vh;
    background-color: #E5E5E5;
    padding-top: 98px;
    padding-bottom: 70px;
    padding-left: 17px;
    padding-right: 18px;
`

const NovoHabito = styled.div`
    width: 340px;
    height: 180px;
    background-color: #fff;
`
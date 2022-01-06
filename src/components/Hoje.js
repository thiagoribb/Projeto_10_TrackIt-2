import { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from "axios";
import check from '../assets/check.png'
import Header from './Header';
import Footer from './Footer';

export default function(){

    const [habit, setHabit] = useState({});

    useEffect(() => {
		const promess = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits");
		promess.then(response => {setHabit(response.data)});
	}, []);


    return (
        <Container>
            <Header/>
            <Body>
                <Titulo>Segunda, 17/05</Titulo>
                <SubTitulo>Nenhum hábito concluído ainda</SubTitulo>
                <Habitos>
                    <Texto>
                        <Habito>Ler 1 capítulo de livro</Habito>
                        <P>Sequência atual: 3 dias</P>
                        <P>Seu recorde: 5 dias</P>
                    </Texto>
                    <Check>
                        <img src={check}></img>
                    </Check>
                </Habitos>
            </Body>
            <Footer/>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Body = styled.div`
    width: 375px;
    height: 100vh;
    background-color: #E5E5E5;
    padding-top: 98px;
    padding-bottom: 70px;
    padding-left: 17px;
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
    color: #BABABA;
    margin-bottom: 28px;
`

const Habitos = styled.div`
    width: 340px;
    height: 94px;
    background-color: #fff;
    border-radius: 5px;
    padding-right: 13px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Texto = styled.div`
    padding-left: 15px;
`

const Habito = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #666666;
`

const P = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 13px;
    color: #666666;
`

const Check = styled.div`
    width: 70px;
    height: 70px;
    background-color: #EBEBEB;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`
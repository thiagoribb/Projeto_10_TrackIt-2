import { useState } from 'react';
import styled from "styled-components";
import Header from "./Header";
import Menu from "./Menu";
import Delete from '../assets/delete.png';


export default function Habits(){

    const [colorLetter, setcolorLetter] = useState('#DBDBDB');
    const [colorButton, setcolorButton] = useState('#fff');

    const [loading, setLoading] = useState(false);

    function selectDay(){
        setcolorLetter('#fff');
        setcolorButton('#DBDBDB');
    }

    return (
        <Container>
            <Header/>
            <Body>
                <Habitos>
                    <Titulo>Meus hábitos</Titulo>
                    <Plus>+</Plus>
                </Habitos>

                <MeusHabitos>
                    <Lixeira>
                        <SubTitulo>Ler 1 capítulo de livro</SubTitulo>
                        <img src={Delete}></img>
                    </Lixeira>
                    <Week>
                        <WeekDay letter={colorLetter} button={colorButton} onClick={selectDay}>D</WeekDay>
                        <WeekDay letter={colorLetter} button={colorButton} onClick={selectDay}>S</WeekDay>
                        <WeekDay letter={colorLetter} button={colorButton} onClick={selectDay}>T</WeekDay>
                        <WeekDay letter={colorLetter} button={colorButton} onClick={selectDay}>Q</WeekDay>
                        <WeekDay letter={colorLetter} button={colorButton} onClick={selectDay}>Q</WeekDay>
                        <WeekDay letter={colorLetter} button={colorButton} onClick={selectDay}>S</WeekDay>
                        <WeekDay letter={colorLetter} button={colorButton} onClick={selectDay}>S</WeekDay>
                    </Week>
                </MeusHabitos>  
            </Body>
            <Menu/>
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
    padding-right: 18px;
`

const Habitos = styled.div`
    margin-bottom: 30px;

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

const Plus = styled.button`
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
    cursor: pointer;    
`

const SubTitulo = styled.h3`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20   px;
    color: #666;
    margin-bottom: 8px;
`
const MeusHabitos = styled.div`
    width: 340px;
    height: 90px;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 13px 10px 15px 14px;
`

const Week = styled.div`
    margin-top: 8px;
`

const WeekDay = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: ${props => props.button};
    color: ${props => props.letter};
    border: 1px solid #D5D5D5;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    margin-right: 4px;
    margin-bottom: 30px;
    cursor: pointer;
`

const Lixeira = styled.div`
    display: flex;
    justify-content: space-between;
    img {
        width: 13px;
        height: 15px;
    }
`
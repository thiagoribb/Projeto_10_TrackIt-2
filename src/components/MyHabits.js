import { useState } from 'react';
import styled from "styled-components";
import Delete from '../assets/delete.png';

export default function MyHabits(){
    const [showDays, setShowDays] = useState(weekDays);

    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];


    return (
        <MeusHabitos>
            <Lixeira>
                <SubTitulo>Ler 1 capítulo de livro</SubTitulo>
                <img src={Delete}></img>
            </Lixeira>
            <Week>
                {showDays.map(weekDays => 
                <WeekDay 
                letter={colorLetter} 
                button={colorButton} 
                onClick={selectDay}>{weekDays}
                </WeekDay>
                )}
            </Week>
        </MeusHabitos>  
    );
}

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
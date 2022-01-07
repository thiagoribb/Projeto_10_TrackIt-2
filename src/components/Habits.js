import { useState } from 'react';
import styled from "styled-components";
import Header from "./Header";
import Menu from "./Menu";
import Loading from "./Loading";

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

                <NovoHabito>
                    <Input type="text" placeholder="nome do hábito" handleLoading={loading}></Input>
                    <Week>
                        <WeekDay letter={colorLetter} button={colorButton} onClick={selectDay}>D</WeekDay>
                        <WeekDay letter={colorLetter} button={colorButton} onClick={selectDay}>S</WeekDay>
                        <WeekDay letter={colorLetter} button={colorButton} onClick={selectDay}>T</WeekDay>
                        <WeekDay letter={colorLetter} button={colorButton} onClick={selectDay}>Q</WeekDay>
                        <WeekDay letter={colorLetter} button={colorButton} onClick={selectDay}>Q</WeekDay>
                        <WeekDay letter={colorLetter} button={colorButton} onClick={selectDay}>S</WeekDay>
                        <WeekDay letter={colorLetter} button={colorButton} onClick={selectDay}>S</WeekDay>
                    </Week>
                    <CreateHabit>
                        <Cancelar handleLoading={loading}>Cancelar</Cancelar>
                        <Salvar onClick={() => setLoading(true)} handleLoading={loading}>{loading ? <Loading /> : "Salvar"}</Salvar>
                    </CreateHabit>
                </NovoHabito>  

                <SubTitulo>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</SubTitulo>
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
    font-size: 18px;
    color: #666;
    margin-bottom: 28px;
`
const NovoHabito = styled.div`
    width: 340px;
    height: 180px;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 18px;
`

const Input = styled.input`
    width: 303px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    padding-left: 10px;
    font-size: 20px;
    font-weight: 400;
    outline: 0;
    background-color: ${(props) => props.handleLoading ? "#F2F2F2" : "#FFFFFF"};
    color: ${(props) => props.handleLoading ? "#AFAFAF" : "#000"};

    ::placeholder{
        color: #DBDBDB;
    }
`

const Cancelar = styled.button`
    font-family: 'Lexend Deca', sans-serif;
    background-color: #fff;
    color: #52B6FF;
    width: 70px;
    height: 20px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    margin-right: 23px;
    opacity: ${(props) => props.handleLoading ? 0.7 : 1};
`
const Salvar = styled.button`
    font-family: 'Lexend Deca', sans-serif;
    background-color: #52B6FF;
    color: #fff;
    width: 84px;
    height: 35px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    opacity: ${(props) => props.handleLoading ? 0.7 : 1};
`

const CreateHabit = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
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
import { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import styled from "styled-components";
import Loading from "./Loading";
import axios from "axios";

export default function AddHabit(){

    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

    const { token, setToken } = useContext(UserContext);
    const [colorLetter, setcolorLetter] = useState('#DBDBDB');
    const [colorButton, setcolorButton] = useState('#fff');
    const [loading, setLoading] = useState(false);    
    const [showDays, setShowDays] = useState(weekDays);
    const [habitName, setHabitName] = useState('');
    const [days, setDays] = useState([1, 3, 5]);


    function selectDay(){
        setcolorLetter('#fff');
        setcolorButton('#DBDBDB');
    }

    // function handleForm(){
    //     setForm(!form);
    // }

    function handleHabit(e) {
        e.preventDefault();
    
        setLoading(true);

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
            name: habitName,
            days: days
        }, {
            headers:{
            Authorization: `Bearer ${token}`
            }
        });
    
        promise.then(handleSuccess);
        promise.catch(handleFailure);

    }

    function handleSuccess(response){
        setHabitName('');
        setToken(response.data);
    }

    function handleFailure(error){
        setHabitName('');
        alert(error.response.data.message);
        setLoading(false);
    }


    return (
        <NovoHabito>
        <Input type="text" placeholder="nome do hábito" handleLoading={loading} onChange={e => e.target.value}></Input>
        <Week>
            {showDays.map(weekDays => 
            <WeekDay 
            letter={colorLetter} 
            button={colorButton} 
            onClick={selectDay}>{weekDays}
            </WeekDay>
            )}
        </Week>
        <CreateHabit>
            <Cancelar handleLoading={loading}>Cancelar</Cancelar>
            <Salvar onClick={handleHabit} handleLoading={loading}>{loading ? <Loading /> : "Salvar"}</Salvar>
        </CreateHabit>
    </NovoHabito>  
    );
}

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

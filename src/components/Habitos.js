import styled from "styled-components";
import Header from "./Header";
import Menu from "./Menu";
import { useState, useContext } from 'react';
import axios from "axios";
import UserContext from "../contexts/UserContext";

export default function Habitos(){

    const { token } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [habito, setHabito] = useState('');

    const [newHabit, setNewHabit] = useState({
        name: "",
        days: []
      })
   
    function criarHabito(){

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", newHabit, {
            headers: {Authorization: `Bearer ${token.token}`
            }
          })
      
          promise.then(handleSuccess);
          promise.catch(handleFailure);
    }

    function handleSuccess(response){
        
    }

    function handleFailure(error){
        alert(error.response.data.message);
        setLoading(false);
    }

    return (
        <>
            <Header/>
            <Body>
                <Habits>
                    <Titulo>Meus hábitos</Titulo>
                    <Plus>+</Plus>
                </Habits>
                <NovoHabito>
                <Input type="text" placeholder="nome do hábito" value={habito} onChange={e => setHabito(e.target.value)}></Input>
                <div>
                    <Button>Cancelar</Button>
                    <Button>Salvar</Button>
                </div>
                </NovoHabito>
                <SubTitulo>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</SubTitulo>
            </Body>
            <Menu/>
        </>
    );
}

// function criarHabito(){
//     return (
//         <Container>
//             <Habits>
//                 <Titulo>Meus hábitos</Titulo>
//                 <Button>+</Button>
//             </Habits>

//             <NovoHabito>

//             </NovoHabito>

//             <SubTitulo>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</SubTitulo>
//         </Container>
//     );
// }

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
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 30px;
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
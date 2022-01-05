import styled from "styled-components";
import bob from '../assets/bob.png';

export default function Habitos(){
    return (
        <>
            <Header>
                <Titulo>TrackIt</Titulo>
                <img src={bob}></img>
            </Header>
            <Habits>
                <p>Meus hábitos</p>
                <Cadastrar>+</Cadastrar>
            </Habits>
            <div>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</div>
            <Footer></Footer>
        </>
    );
}

const Header = styled.div`
    width: 375px;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`

const Titulo = styled.p`
    font-family: 'Playball', cursive;
    color: #fff;
    font-size: 39px;
    font-weight: 400;
    
`

const Habits = styled.div`

`

const Cadastrar = styled.button`
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
`

const Footer = styled.footer`
    width: 375px;
    height: 70px;
    background-color: #fff;
`
import styled from "styled-components";

export default function Footer(){
    return(
        <Foot>
            <Button>Hábitos</Button>
            <Hoje>Hoje</Hoje>
            <Button>Histórico</Button>
        </Foot>
    );
}

const Foot = styled.div`
    width: 375px;
    height: 70px;
    background-color: #fff;
    padding-left: 30px;
    padding-right: 30px;

    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
`

const Button = styled.button`
    font-family: 'Lexend Deca', sans-serif;
    background-color: #fff;
    color: #52B6FF;
    font-size: 18px;
    border: none;
    cursor: pointer;
`

const Hoje = styled.div`
    width: 91px;
    height: 91px;
    border-radius: 50%;
    background-color: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`

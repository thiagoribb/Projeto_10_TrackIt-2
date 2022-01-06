import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

export default function Historico(){
    return (
        <>
            <Container>
                <Header/>
                <Body>
                    <Titulo>Histórico</Titulo>
                    <SubTitulo>Em breve você poderá ver o histórico dos seus hábitos aqui!</SubTitulo>
                </Body>
                <Footer/>
            </Container>
        </>
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
    padding-top: 28px;
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
    color: #666666;
`
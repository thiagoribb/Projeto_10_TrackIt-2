import styled from "styled-components";
import bob from '../assets/bob.png';

export default function Historico(){
    return (
        <>
            <Container>
                <Header>
                    <Logo>TrackIt</Logo>
                    <img src={bob}></img>
                </Header>
                <Body>
                    <Titulo>Histórico</Titulo>
                    <SubTitulo>Em breve você poderá ver o histórico dos seus hábitos aqui!</SubTitulo>
                </Body>
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

const Header = styled.div`
    width: 375px;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

`

const Logo = styled.p`
    font-family: 'Playball', cursive;
    color: #fff;
    font-size: 39px;
    font-weight: 400;
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
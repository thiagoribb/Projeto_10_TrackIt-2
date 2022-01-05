import styled from "styled-components";
import bob from '../assets/bob.png';
import check from '../assets/check.png'

export default function(){
    return (
        <>
            <Container>
                <Header>
                    <Logo>TrackIt</Logo>
                    <img src={bob}></img>
                </Header>
                <Body>
                    <Titulo>Segunda, 17/05</Titulo>
                    <SubTitulo>Nenhum hábito concluído ainda</SubTitulo>
                    <Habitos>
                        <div>
                            <Habito>Ler 1 capítulo de livro</Habito>
                            <P>Sequência atual: 3 dias</P>
                            <P>Seu recorde: 5 dias</P>
                        </div>
                        <Check>
                            <img src={check}></img>
                        </Check>
                    </Habitos>
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
    color: #BABABA;
    margin-bottom: 28px;
`

const Habitos = styled.div`
    width: 340px;
    height: 94px;
    background-color: #fff;
    border-radius: 5px;

    display: flex;
    justify-content: space-between;
    align-items: center;
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
    align-content: center;
`
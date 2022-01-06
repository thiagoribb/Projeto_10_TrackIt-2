import styled from "styled-components";
import bob from '../assets/bob.png';

export default function Header(){
    return (
        <Head>
            <Logo>TrackIt</Logo>
            <Image>
                <img src={bob}></img>
            </Image>
        </Head>
    );
}

const Head = styled.div`
    width: 375px;
    height: 70px;
    padding-left: 18px;
    padding-right: 18px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.p`
    font-family: 'Playball', cursive;
    color: #fff;
    font-size: 39px;
`

const Image = styled.div`
    img{
    width: 51px;
    width: 51px;
    object-fit: contain;
    border-radius: 100%;
    }
`
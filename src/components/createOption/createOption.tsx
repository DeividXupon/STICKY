import styled from "styled-components"

export const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 100%;
    left: 300px;
    top: -50px;
    margin-bottom: -70px;
    background: white;
    border: 4px solid black;

    .icon{
        width: 75px;
        height: 75px;
    }
`

export const Option = styled.div`
    width: 450px;
    height: 350px;
    background-color: #b2ffa8;
    border: 4px solid black;
    box-shadow: -10px 10px 0px #072c00;

    .conteudo{
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .conteudo__titulo{
        text-align: center;
        font-size: 2em;
        font-family: 'Roboto', sans-serif;
    }

    .conteudo__button{
        font-size: 1.5em;
        width: 170px;
        height: 50px;
        font-family: 'Roboto', sans-serif;
        color: #086300;
        border: none;
        background: none;
        cursor: pointer;
        border-bottom: 4px solid #0b8300;
        box-shadow: -0px 0px 0px #072c00;
        transition: 400ms;
        text-align: center;
        line-height: 45px;
        text-decoration: none;

        &:hover{
            background: #66fc5888;
            box-shadow: -6px 6px 0px #072c00;
            transition: 400ms;
            transform: translate(6px, -6px);
        }
    }
`

export const Text = styled.p`
    padding: 0px 15px 0px 15px;
    text-align: center;
    font-size: 1.1em;
    font-family: 'Roboto Slab', serif;
`
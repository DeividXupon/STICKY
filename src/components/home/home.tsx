import { motion } from "framer-motion";
import styled from "styled-components";
import { Annotation } from "../decorativeNote/decorativeNote";

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #F2BCFF;
`

export const TextSection = styled(motion.section)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    text-align: center;
    margin-top: 6vw;
    gap: 20px;

    b{
        color: red;
    }

    h2{
        font-size: 1.4em;
        font-family: 'Roboto Slab', serif;
    }

    h1{
        font-size: 5em;
        font-family: 'Roboto', sans-serif;
    }

`

export const Button = styled(motion.button)`
    border: none;
    margin: 0;
    padding: 6px 20px 6px 20px;
    font-size: 1.7em;
    border-top: 4px solid black;
    background-color: #77bdff;
    font-family: 'Roboto Slab', serif;
`

export const Annot = styled(Annotation)<{$color: string}>`
`
import React from 'react'
import styled from 'styled-components'
function Viewers() {
    return (
        <Container>
            <Element>
                <img src='/images/viewers-disney.png' />
            </Element>
            <Element>
                <img src='/images/viewers-pixar.png' />
            </Element>
            <Element>
                <img src='/images/viewers-marvel.png' />
            </Element>
            <Element>
                <img src='/images/viewers-starwars.png' />
            </Element>
            <Element>
                <img src='/images/viewers-national.png' />
            </Element>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-gap: 1.75rem;
    grid-template-columns: repeat(5, minmax(0,1fr));
    padding: 30px 0 26px 0;
`

const Element = styled.div`
    border: 3px solid rgba(249,249,249,0.1);
    border-radius: 1rem;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms;
    img{
        width: 100%;
        height: 100%;
        object-fit:fill;
        cursor: pointer;
    }

    &:hover{
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);
    }
`
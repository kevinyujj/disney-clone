import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
function Movies() {
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                <Link to='/detail'>
                <Element>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/p_movieposters_christmas_005a44fa.jpeg?region=0,0,540,810&width=320" alt="" />
                </Element>
                </Link>
                <Element>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/p_movieposters_mrpopperspenguins_22277_84f9efdd.jpeg?region=0,0,540,810&width=320" alt="" />
                </Element>
                <Element>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/p_disney_starwarsholidayspecial_22232_97027e17.jpeg?region=0,0,540,810&width=320" alt="" />
                </Element>
                <Element>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/p_disney_jinglealltheway_22232_609ee7cd.jpeg?region=0,0,540,810&width=320" alt="" />
                </Element>
                <Element>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/p_disney_highschoolmusicaltmts_22232_85966020.jpeg?region=0,0,540,810&width=320" alt="" />
                </Element>
            </Content>
            <h4>New to Disney+</h4>
            <Content>

            </Content>
            <h4>Recommended for You</h4>
            <Content>

            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`

`

const Content = styled.div`
    display: grid;
    grid-gap: 1.75rem;
    grid-template-columns: repeat(5, minmax(0,1fr));
`

const Element = styled.div`
    border-radius: 1rem;
    overflow: hidden;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms;
    img{
        width: 100%;
        height: 100%;
        object-fit: fill;
        cursor: pointer;
    }
    &:hover{
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);
    }
`
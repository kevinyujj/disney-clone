import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <Nav>
            <Link to='/'><Logo src='/images/logo.svg' /></Link>

            <NavMenu>
                <a>
                    <img src='/images/home-icon.svg' />
                    <span>HOME</span>
                </a>
                <a>
                    <img src='/images/search-icon.svg' />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src='/images/watchlist-icon.svg' />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src='/images/original-icon.svg' />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src='/images/movie-icon.svg' />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src='/images/series-icon.svg' />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src='/images/user-icon.jpg'/>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height:70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;
    cursor: pointer;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a{
        display: flex;
        align-items: center;
        padding: 0 1rem;
        cursor: pointer;

        img{
            height: 1.2rem;
        }

        span{
            font-size: 0.8rem;
            letter-spacing: 1.45px;
            position: relative;

            &:after{
                content: '';
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -0.4rem;
                opacity: 0;
                transform: scaleX(0);
                transform-origin: left center;
                transition: all 300ms;
            }
        }

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    display: flex;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`
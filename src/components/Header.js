import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" />            
          <span>home</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" />            
          <span>search</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" />            
          <span>watchlist</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" />            
          <span>originals</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />            
          <span>movies</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" />            
          <span>series</span>
        </a>
      </NavMenu>
      <UserImg src="/images/id.jpg" />
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden 
`

const Logo = styled.img`
  width: 80px;
`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;

  a{
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img{
      height: 20px;
    }

    span{
      position: relative;
      text-transform: uppercase;
      font-size: 13px;
      letter-spacing: 1.42px;

      &:after{
        position: absolute;
        content: "";
        height: 2px;
        background: #fff;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s;
      }
    }

    &:hover{
      span:after{
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`

const UserImg = styled.img`
  width: 48px;
  heigh: 48px;
  border-radius: 50%;
  cursor: pointer;
`
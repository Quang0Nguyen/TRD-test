import { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function Header() {
  const [extendNavbar, setExtendNavbar] = useState(false)
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src="assets/img/logo.png" />
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink href="#nzd">Product (Nzd)</NavbarLink>
            <NavbarLink href="#usd">Product (Usd)</NavbarLink>
            <NavbarLink href="#euro">Product (Euro)</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar(!extendNavbar)
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended onClick={() => {
                setExtendNavbar(!extendNavbar)
              }} href="#nzd">Product (Nzd)</NavbarLinkExtended>
          <NavbarLinkExtended onClick={() => {
                setExtendNavbar(!extendNavbar)
              }} href="#usd">Product (Usd)</NavbarLinkExtended>
          <NavbarLinkExtended onClick={() => {
                setExtendNavbar(!extendNavbar)
              }} href="#euro">Product (Euro)</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  )
}
export default Header
export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? '100vh' : '80px')};
  background-color: black;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 80px;
  }
`

const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px;
  @media (max-width: 700px) {
    padding-right: 0;
  }
`

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`

const NavbarLinkContainer = styled.div`
  display: flex;
`

const NavbarLink = styled.a`
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  margin: 10px;
  display: block;
  height: 40px;
  line-height: 40px;
  padding-right: 15px;
  @media (max-width: 700px) {
    display: none;
  }
`

export const NavbarLinkExtended = styled.a`
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  margin: 10px;
  display: block;
  width: 100%;
  text-align: left;
  padding-left: 100px;
`

const Logo = styled.img`
  margin: 10px;
  max-width: 160px;
  height: auto;
`

const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`

const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`

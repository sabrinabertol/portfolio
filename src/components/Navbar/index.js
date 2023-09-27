import React from 'react'
import { Bio } from '../../data/constants';
import { Nav, NavLink, NavbarContainer, NavLogo, Image, NavItems, MobileIcon, MobileMenu, MobileLink, ResumeButton } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';
import logo from '../../images/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          {/* eslint-disable-next-line */}
          <a>
            <Image><img src={logo} alt="WISB?" height="30px" /></Image>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
          <ResumeButton href={Bio.resume} target="display">Check my CV!</ResumeButton>
        </NavItems>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#contact' onClick={() => {
              setIsOpen(!isOpen)
            }}>Contact</MobileLink>
            <ResumeButton href={Bio.resume} target="display">
                Check my CV!
            </ResumeButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
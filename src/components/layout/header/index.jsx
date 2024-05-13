import React, { Fragment } from 'react'
import Logo from '../../../assets/icons/Logo'
import Input from '../../formComponents/Input'
import Button from '../../formComponents/Button'
import { FaBars, FaSearch } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import './header.scss'

const Header = () => {

  return (
    <Fragment>
      <header className='header'>
        <nav className="header__nav">
          <div className="header__nav__list">
            <NavLink to={`/`} className='header__nav__list-item'>Home</NavLink>
            <NavLink to={`/shopAll`} className='header__nav__list-item'>Shop All</NavLink>
            <NavLink to={`/blog`} className='header__nav__list-item'>Blog</NavLink>
          </div>
          <Logo />
          <div className="header__nav__search-div">
            <NavLink to={`/about`} className='header__nav__search-div__item'>About Us</NavLink>
            <form className="header__nav__search-div__form">
              <Input className={'header__nav__search-div__form__input'} type={'search'} placeholder={'Search Product'} />
              <FaSearch />
            </form>
          </div>
          <Button onClick={() => setShowMenu(true)} className="header__nav__bars"> <FaBars /> </Button>
        </nav>
      </header>
    </Fragment>
  )
}

export default Header
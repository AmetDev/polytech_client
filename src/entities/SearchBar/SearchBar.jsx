'use client'

import search from '@public/assets/icons/search.svg?url'
import style from './SearchBar.module.scss'
import Link from 'next/link'
import { useState } from 'react'

const getDropdownElement = () => {
  return document.body.querySelector('.' + style.dropdown)
}

const getInputElement = () => {
  return document.body.querySelector('.' + style.input)
}

const openDropdown = () => {
  const dropdown = getDropdownElement()
  dropdown.classList.add(style.dropdown_active)
}

const closeDropdown = () => {
  const dropdown = getDropdownElement()
  dropdown.classList.remove(style.dropdown_active)
}

const handleInput = (setItems, searchData) => {
  const input = getInputElement()
  const value = input.value.toLocaleLowerCase()

  const resultSearch = []

  if (value === '' || Object.keys(searchData).length === 0) return setItems([])

  for (let data of searchData) {
    for (let word of [...data.keywords, data.text]) {
      word = word.toLocaleLowerCase()
      const isCompared = word.match(new RegExp(`${value}`, 'gui'))

      if (isCompared) {
        resultSearch.push(data)
        break
      }
    }
  }

  setItems(resultSearch)
}

const dropdownItems = (items) => {
  return items.map((item, index) => (
    <li key={index} className={style.item}>
      {item.link && <Link href={item.link}>{item.text}</Link>}
      {item.onClick && <button>{item.text}</button>}
    </li>
  ))
}

const notFound = () => {
  return (
    <li className={style.item + ' ' + style.notFound}>Ничего не найдено...</li>
  )
}

const searchBarHandleClick = () => {
  const input = getInputElement()
  input.focus()
}

const SearchBar = ({ data, placeholder, classes }) => {
  const [items, setItems] = useState([])

  return (
    <>
      <div className='relative'>
        <div
          className={`${style.searchBar} ${classes ?? ''}`}
          onClick={searchBarHandleClick}
        >
          <img src={search.src} alt='Иконка поиска' />
          <input
            onFocus={openDropdown}
            onInput={() => {
              handleInput(setItems, data)
            }}
            onBlur={closeDropdown}
            className={style.input}
            type='text'
            placeholder={placeholder}
          />
        </div>

        <div className={style.dropdown}>
          <ul>
            <div className={style.verticalSpace}></div>
            {items.length ? dropdownItems(items) : notFound()}
            <div className={style.verticalSpace}></div>
            <div className={`${style.verticalSpace} ${style.lastVerticalSpace}`}></div>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SearchBar

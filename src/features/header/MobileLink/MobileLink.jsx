'use client'

import { useActions } from '@app/hooks/useActions'
import Triangle from '@public/assets/icons/triangle.svg'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import style from './../../../widgets/header/header.module.scss'

const MobileLink = React.memo(function MobileLink({ stlye, link }) {
  const dispatch = useDispatch()
  const { setIsOpenedMenu } = useActions()
  const [isOurColleage, setIsOurCollege] = useState(null)
  const router = useRouter()

  const Clicked = async (url) => {
    const loader = document.body.querySelector('.page_loader')
    try {
      loader.style.display = 'block'

      const somedata = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/page/getonepage`, { params: { url } })

      if (somedata.status == 200) {
        console.log(somedata.data.message.pageUrl)
        router.push('/our-colleage/' + somedata.data.message.pageUrl)
        loader.style.display = 'none'
      }
    } catch (error) {
      router.push(`${url}`)
      loader.style.display = 'none'
    }
  }

  const onMenuClick = () => {
    dispatch(setIsOpenedMenu(false))
  }

  const [isClicked, setIsClicked] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true)
      return setIsClosing(false)
    }

    setIsClosing(true)
    setIsClicked(false)
  }

  return (
    <li
      className={link.nestedObjects.length !== 0 ? style.categoryLink : style.link}
      onClick={link.nestedObjects.length !== 0 ? handleClick : () => {}}
      id={link.nestedObjects.length !== 0 ? link.text : null}
    >
      {link.nestedObjects.length === 0 ? (
        <div
          onClick={() => {
            console.log('linitext', link.text)
            Clicked(link.url) < dispatch(setIsOpenedMenu(false))
          }}
        >
          {link.text}
        </div>
      ) : (
        <span className='header__link__34'>{link.text}</span>
      )}
      {link.nestedObjects.length !== 0 && <Triangle className={`${style.dropdownIcon} ${isClicked && style.dropdownIconActive}`} />}

      {link.nestedObjects.length !== 0 && (
        <div className={`${style.mobileDropdown} ${isClicked && style.mobileDropdownActive}`}>
          <ul className={'overflow-hidden'}>
            <div className={style.mobileDropdownDelimiter}></div>
            {link.nestedObjects.map((link, index) => {
              return (
                <li key={index} className={style.link}>
                  <div
                    onClick={() => {
                      onMenuClick()
                      Clicked(link.url)
                    }}
                  >
                    {link.text}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </li>
  )
})

export default MobileLink

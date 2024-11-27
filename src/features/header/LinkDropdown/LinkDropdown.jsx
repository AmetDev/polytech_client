'use client'

import React, { useState } from 'react'
import style from './LinkDropdown.module.scss'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const LinkDropdown = React.memo(function LinkDropdown({ data, isRemoving }) {
  const router = useRouter()

  const Clicked = async (url) => {
    const loader = document.body.querySelector('.page_loader')
    try {
      loader.style.display = 'block'

      const somedata = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/page/getonepage`, { params: { url } });

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

  return (
    <div className={style.dropdown}>
      <nav className='overflow-hidden'>
        <div className={`${style.container} ${isRemoving && style.dropdownRemoving}`}>
          {data.nestedObjects.map((link, index) => {
            return (
              <li className={style.item} key={index}>
                <div style={{ cursor: 'pointer' }} onClick={() => Clicked(link.url)}>
                  {link.text}
                </div>
              </li>
            )
          })}
        </div>
      </nav>
    </div>
  )
})

export default LinkDropdown

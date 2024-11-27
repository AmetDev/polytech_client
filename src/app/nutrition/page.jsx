import Nutrition from '@pages/nutrition/Nutrition'
import React from 'react'

const getFiles = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/files/get?forPage=nutrition`,
    {
      next: { revalidate: 300 },
    }
  )

  const data = await response.json()

  return data
}

const page = async () => {
  const files = await getFiles()
  return <Nutrition files={files} />
}

export default page

'use client'

import { useMediaQuery } from "@uidotdev/usehooks"

const useDevice = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 550px)')
  const isMobile = useMediaQuery('only screen and (max-width : 768px)')

  return { isMobile, isSmallDevice }
}

export default useDevice

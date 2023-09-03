import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { isMobile } from 'react-device-detect';

export default () => {
    const { width, height } = useWindowSize()
    return (
        <Confetti
            width={width}
            height={isMobile ? "150vh" : height}
        />
    )
}
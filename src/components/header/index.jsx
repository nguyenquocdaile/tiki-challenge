import React from 'react'
import './index.scss'
import WIFI from '../../images/wifi.svg'
import RECEPTION from '../../images/reception.svg'
import BATTERY from '../../images/battery.svg'
import TIME from '../../images/time.svg'

function Header({isBackroundOrange}) {
  return (
    <div className="header" style={{ backgroundColor: isBackroundOrange ? '#FC820A' : '#C7E9F9'}}>
      <img src={WIFI} alt="wifi" />
      <img src={RECEPTION} alt="reception" />
      <img src={BATTERY} alt="battery" />
      <img src={TIME} alt="time" />
    </div>
  )
}

export default Header


import React from 'react'
import './index.scss'
import WIFI from '../../images/wifi.svg'
import RECEPTION from '../../images/reception.svg'
import BATTERY from '../../images/battery.svg'
import TIME from '../../images/time.svg'

function Header(props) {
  return (
    <div className="header">
      <img src={WIFI} alt="wifi" />
      <img src={RECEPTION} alt="reception" />
      <img src={BATTERY} alt="battery" />
      <img src={TIME} alt="time" />
    </div>
  )
}

export default Header


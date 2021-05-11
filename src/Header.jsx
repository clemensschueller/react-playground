import * as React from 'react'
import './Header.css'
import Button from './Button'

export default function Header({ isBackButtonVisible }) {
  return (
    <header className="Header">
      <Button hidden={!isBackButtonVisible} isActive>
        &lt;
      </Button>
      Header
    </header>
  )
}

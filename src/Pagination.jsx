import './Pagination.css'
import * as React from 'react'

export default function Pagination({ text, isLeftDisabled, isRightDisabled }) {
  return (
    <section className="Pagination">
      <button disabled={isLeftDisabled}>&lt;</button>
      {text}
      <button disabled={isRightDisabled}>&gt;</button>
    </section>
  )
}

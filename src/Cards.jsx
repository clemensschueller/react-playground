import * as React from 'react'
import './Cards.css'

export default function Card({ title, copyText, isBookmarked }) {
  return (
    <section className="Card">
      <button
        className={
          isBookmarked
            ? 'Card__bookmark Card__bookmark--active'
            : Card__bookmark
        }
        aria-label="Bookmark card"
      ></button>
      <h2 className="Card__title">{title}</h2>
      <p>{copyText}</p>
    </section>
  )
}

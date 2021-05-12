import * as React from 'react'
import Card from './Cards.jsx'

export default () => {
  return (
    <div className="App">
      <Card title="Hello world" copyText="Lorem, ipsum dolor." />
      <Card
        isBookmarked
        title="Moin world"
        copyText="dolor sit amet consectetur?"
      />
    </div>
  )
}

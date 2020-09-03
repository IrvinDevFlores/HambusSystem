import React from 'react'
import Holdable from './holdable'

export default function MousePressed() {

  function onClick(evt) {
    alert('click ' + evt.currentTarget.id)
  }

  function onHold(evt) {
    alert('hold ' + evt.currentTarget.id)
  }

  const ids = 'Label1,Label2,Label3'.split(',')

  return (
    <div className="App">
      {ids.map(id => (
        <Holdable
          onClick={onClick}
          onHold={onHold}
          id={id}
          key={id}
        >
          {id}
        </Holdable>
      ))}
    </div>
  )
}
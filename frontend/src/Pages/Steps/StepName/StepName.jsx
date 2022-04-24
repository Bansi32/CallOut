import React from 'react'

export default function s({onNext}) {
  return (
      <div>
          <div>Name</div>
            <button onClick={onNext}>Next</button>
    </div>
  )
}

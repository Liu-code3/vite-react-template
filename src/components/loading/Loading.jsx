import React, { memo } from 'react'
import './loading.css'

const Loading = memo(() => {
  return (
      <div className='mask'>
          <div className="main">
            <div className="loader">
              <p className="text">
                  <span className="letter letter1">L</span>
                  <span className="letter letter2">o</span>
                  <span className="letter letter3">a</span>
                  <span className="letter letter4">d</span>
                  <span className="letter letter5">i</span>
                  <span className="letter letter6">n</span>
                  <span className="letter letter7">g</span>
                  <span className="letter letter8">.</span>
                  <span className="letter letter9">.</span>
                  <span className="letter letter10">.</span>
              </p>
          </div>
          </div>
      </div>
  )
})

export default Loading
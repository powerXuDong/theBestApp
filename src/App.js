import React, { useState, useEffect, useLayoutEffect } from 'react'

const buttonStyles = {
  border: '1px solid #ccc',
  background: '#fff',
  fontSize: '2em',
  padding: 15,
  margin: 5,
  width: 200,
}
const labelStyles = {
  fontSize: '5em',
  display: 'block',
}

function Stopwatch() {
  const [lapse, setLapse] = useState(0)
  const [running, setRunning] = useState(false)

  // 当组件更新后等待页面渲染结束后再执行useEffect这个函数
  useEffect(() => {
    if (running) {
      const startTime = Date.now() - lapse
      const intervalId = setInterval(() => {
        setLapse(Date.now() - startTime)
      }, 0)
      return () => clearInterval(intervalId)
    }
  }, [running])

  function handleRunClick() {
    setRunning(r => !r)
  }

  function handleClearClick() {
    setRunning(false)

    setTimeout(() => {
      setLapse(0)
    }, 0)
  }

  return (
    <div>
      <label style={labelStyles}>{lapse}ms</label>
      <button onClick={handleRunClick} style={buttonStyles}>
        {running ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleClearClick} style={buttonStyles}>
        Clear
      </button>
    </div>
  )
}

function App() {
  const [show, setShow] = useState(true)
  return (
    <div style={{textAlign: 'center'}}>
      <label>
        <input
          checked={show}
          type="checkbox"
          onChange={e => setShow(e.target.checked)}
        />{' '}
        Show stopwatch
      </label>
      {show ? <Stopwatch /> : null}
    </div>
  )
}

export default App;


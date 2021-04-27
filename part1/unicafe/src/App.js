import React, { useState } from 'react'

const Button = ({text, onClick}) => {
  return <button onClick={onClick}>{text}</button>
}

const Statistic = ({text, val}) => {
  return (
    <div>
      <p>{text}{' '}{val}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (val, func) => () => {
    func(val + 1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} onClick={handleClick(good, setGood)}/>
      <Button text={"neutral"} onClick={handleClick(neutral, setNeutral)}/>
      <Button text={"bad"} onClick={handleClick(bad, setBad)}/>
      <h1>statistics</h1>
      <Statistic text={"good"} val={good}  />
      <Statistic text={"neutral"} val={neutral}  />
      <Statistic text={"bad"} val={bad}  />
    </div>
  )
}

export default App
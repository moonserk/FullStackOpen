import React, { useState } from 'react'

const Button = ({text, onClick}) => {
  return <button onClick={onClick}>{text}</button>
}

// const Buttons = ({good, setGood, neutral, setNeutral, bad, setBad, handleClick}) => {
//   <div>
//     <Button text={"good"} onClick={handleClick(good, setGood)}/>
//     <Button text={"neutral"} onClick={handleClick(neutral, setNeutral)}/>
//     <Button text={"bad"} onClick={handleClick(bad, setBad)}/>
//   </div>
// }

const Statistic = ({text, val}) => {
  return (
    <tr>
      <td>{text}</td><td>{isNaN(val) ? 0 : val}{text === "positive" ? ' %' : ''}</td>
    </tr>
  )
}
// const Statistic = ({text, val}) => {
//   return (
//     <div>
//       <p>{text}{' '}{isNaN(val) ? 0 : val}{text === "positive" ? ' %' : ''}</p>
//     </div>
//   )
// }

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  const average = (good + (-bad)) / all;
  const positive = (good * 100) / all;

  return (
    <div>
    <h1>statistics</h1>
    {all === 0 ? 
      <div>No feedback given</div>
    :
      <table>
        <tbody>
          <Statistic text={"good"} val={good}  />
          <Statistic text={"neutral"} val={neutral}  />
          <Statistic text={"bad"} val={bad}  />
          <Statistic text={"all"} val={all}  />
          <Statistic text={"average"} val={average}  />
          <Statistic text={"positive"} val={positive}  />
        </tbody>
      </table>}
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
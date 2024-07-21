import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

//the total shall not be 0!
const computeAverage = (good, neutral, bad) => {
  const total = good + neutral + bad
  return (good - bad) / total
}

//the total shall not be 0!
const computeGoodPercentage = (good, neutral, bad) => {
  const total = good + neutral + bad
  return (good / total) * 100
}

const StatisticLine = ({text, value}) => {
  return(
    <div>{text}: {value}</div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return(
    <div>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={total}/>
      <StatisticLine text="average" value={computeAverage(good, neutral, bad).toPrecision(3)}/>
      <StatisticLine 
        text="positive" 
        value={`${computeGoodPercentage(good, neutral, bad).toPrecision(3)} %`}
      />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick={increaseGood} text="good"/>
        <Button onClick={increaseNeutral} text="neutral"/>
        <Button onClick={increaseBad} text="bad"/>
      </div>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App

import { useState } from 'react'

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const indexOfMax = (array) => {
  return array.reduce((iMax, x, i, array) => x > array[iMax] ? i : iMax, 0)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecdotes.map((anecdote) => 0))

  const selectNextAnecdote = () => {
    let randomNum
    //the purpose of the loop is to prevent that the same anecdote gets
    //shown twice
    do {
      randomNum = Math.floor(Math.random() * anecdotes.length)
    } while(randomNum === selected)
    setSelected(randomNum)
  }
  
  const registerVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  } 

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        has {votes[selected]} votes
      </div>
      <div>
        <Button onClick={registerVote} text="vote"/>
        <Button onClick={selectNextAnecdote} text="next anecdote"/>
      </div>
      <h1>Anecdote with most votes</h1>
      <div>
        {anecdotes[indexOfMax(votes)]}
      </div>
    </>
  )
}

export default App
import { useState } from 'react'

const Display = (props) => {
  return(
    <>{props.content}</>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const History = (props) => {
  if(props.total === 0) {
    return(
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return(
    <div>
      <Display content={`Button press history: ${props.allClicks.join(" ")}`} />
    </div>
  )
}

const App = () => {
  const [state, setState] = useState({
    left: 0, right: 0
  })
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const increaseLeft = () => {
    setTotal(total + 1)
    setAll(allClicks.concat('L'))
    setState({...state, left: state.left + 1})
  }
  const increaseRight = () => {
    setTotal(total + 1)
    setAll(allClicks.concat('R'))
    setState({...state, right: state.right + 1})
  }
  

  return (
    <div>
      <div>
        <Display content={`Total: ${total}`} />
      </div>
      <div>
        <Display content={state.left} />
        <Button onClick={increaseLeft} text="left" />
        <Button onClick={increaseRight} text="right" />
        <Display content={state.right} />
      </div>
      <History total={total} allClicks={allClicks} />
    </div>
  )
}

export default App
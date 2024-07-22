const Header = ({course}) => {
    return (
      <h2>{course.name}</h2>
    )
  }
  
const Part = ({part}) => {
    return (
        <p> {part.name} {part.exercises} </p>
    )
}

const Sum = ({course}) => {
    let total = course.parts.reduce((total, part) => total + part.exercises, 0)
    return (
        <p>
        total of {total} exercises
        </p>
    )
}

const Content = ({course}) => {
    return (
        <div>
        {course.parts.map(part => <Part key={part.id} part={part}/>)}
        <Sum course={course}/>
        </div>
    )
}

const Course = ({course}) => {
    return (
        <div>
        <Header course={course}/>
        <Content course={course}/>
        </div>
    )
}

export default Course


import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql `
  query {
    lessons {
      id
      title
    }
  }

`

interface ILesson {
  id: string;
  title: string;
}

const App = () => {
 const { data } = useQuery<{lessons: ILesson[]}>(GET_LESSONS_QUERY)
 console.log(data)

  return (
   <ul>
    {data?.lessons.map(lesson => {
      return <li key={lesson.id}> {lesson.title} </li>
    })}
   </ul>
  )
}

export default App
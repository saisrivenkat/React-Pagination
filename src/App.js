import React, { useEffect } from 'react';
import Table from './Components/Table'
import Pagination from './Components/Pagination'

function App() {

  const [posts, setposts] = React.useState([])
  const [currentpage, setcurrentpage] = React.useState(1)
  const [page] = React.useState(10)
  useEffect(() => {
    const data = async () => {
      const url = 'https://jsonplaceholder.typicode.com/posts'
      const res = await fetch(url)
      const result = await res.json()
      console.log(result)
      setposts(result)
    }
    data()
  }, [])
  const lastpost = currentpage * page
  const firstpost = lastpost - page
  const post = posts.slice(firstpost, lastpost)

  const previous = () => {
    let current = currentpage
    if (current === 1)
      setcurrentpage(current)
    else
      setcurrentpage(current - 1)
    console.log(currentpage)
  }
  const next = () => {
    let current = currentpage
    if (current === post.length)
      setcurrentpage(current)
    else
      setcurrentpage(current + 1)

  }

  const paginate = (number) => setcurrentpage(number)

  return (
    <div className="App">
      <Table posts={post} />
      <Pagination page={page} totallength={posts.length} paginate={paginate} previous={() => previous()} next={() => next()} />
    </div>
  );
}

export default App;

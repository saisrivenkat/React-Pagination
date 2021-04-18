import React, { useEffect } from 'react';
import Dropdown from './Components/Dropdown'
import Table from './Components/Table'
import Pagination from './Components/Pagination'

function App() {
  const [value, setvalue] = React.useState(10)
  const [posts, setposts] = React.useState([])
  const [currentpage, setcurrentpage] = React.useState(1)
  const [page] = React.useState(value)

  const hanldechange = (e) => {
    setvalue(e.target.value)
  }
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
  const lastpost = currentpage * value
  const firstpost = lastpost - value
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
      <Dropdown value={value} change={(e) => hanldechange(e)} />
      <Table posts={post} />
      <Pagination page={value} totallength={posts.length} paginate={paginate} previous={() => previous()} next={() => next()} />
    </div>
  );
}

export default App;

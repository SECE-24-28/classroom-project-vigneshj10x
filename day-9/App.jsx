import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import api from './api/Post'
import './App.css'
import Home from './Home'
import Search from './Search'
import AddPost from './AddPost'

function App() {
  const [posts, setPosts] = useState([])
  const [search,setSearch]=useState("")
  const [title,setTitle]=useState('')
  const [body,setBody]=useState('')


  const handleSubmit=(e)=>{
    e.preventDefault()
    const id=(posts.length)?(Number(posts[posts.length-1].id)+1):(1)
    const dateTime=format(new Date(),'MMM dd,yyyy pp')

    //newObj={id:id,title:title,dateTime:datetime,body:body}
    const newObj={id,title,dateTime,body}

    api.post("/feedback",newObj)
    const newList=[...posts,newObj]
    setPosts(newList)
    
    setTitle('')
    setBody('')

  }

  useEffect(()=>
  {
    const fetData=async()=>{
      try{
      const res= await api.get('/feedback')
      //console.log(res.data)
      setPosts(res.data)}
      catch(err){
        console.log(err)
      }
    }
    fetData();
  },[])


  const searchResult = posts.filter((post) => post.title.includes(search))

  return(
    <>
    <Search search={search} setSearch={setSearch}/>
    <AddPost handleSubmit={handleSubmit} title={title} setTitle={setTitle} body={body} setBody={setBody}/>
    <Home searchResult={searchResult}/>
    </>
  )
}

export default App
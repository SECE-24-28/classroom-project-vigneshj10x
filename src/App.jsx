import { useState } from 'react'
<<<<<<< HEAD
import './App.css'
import AddStudents from './Addstudents'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import Searchstudents from './Searchstudents'

function App() 
{
    const [stuList,setStuList]=useState([
      {id:1,sname:"Jack",fee:true},
      {id:2,sname:"Smith",fee:false},
      {id:3,sname:"Victor",fee:true}
    ])
    const [newstu,setNewStu]=useState('')
    const [search,setSearch]=useState('')

    const handleDelete=(id)=>
    {
      const newList=stuList.filter((stu)=>stu.id!==id)
      setStuList(newList)
    }
    const handleChange=(id)=>
    {
      const newList=stuList.map((stu)=>(stu.id===id)?({...stu,fee:!stu.fee}):(stu))
      setStuList(newList)
    }
   const addItem=(item)=>
   {
    const sz=stuList.length-1;
     const nid=(stuList.length)?(stuList[sz].id+1):(1)
     const newObj={id:nid,sname:item,fee:false}
     const newList=[...stuList,newObj]
     setStuList(newList)
   }
   const handleSubmit=(e)=>
   {
    e.preventDefault()
    if(!newstu.trim()) return
    addItem(newstu)
    setNewStu('')
   }

   const filteredList = stuList.filter(stu => 
     stu.sname.toLowerCase().includes(search.toLowerCase())
   )

  return (
    <>
       <Header title="Student Fee Management"/>
       <Searchstudents search={search} setSearch={setSearch}/>
       <AddStudents newstu={newstu}
                    setNewStu={setNewStu}
                    handleSubmit={handleSubmit}
       />
       <Body list={filteredList} 
             handleCheck={handleChange} 
             handleDelete={handleDelete}
       />
       <Footer len={stuList.length}/>
    </>
  )
}

export default App
=======

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default App
>>>>>>> 14878df3d0f33889f70db06e045ba8c7dfd2da9b

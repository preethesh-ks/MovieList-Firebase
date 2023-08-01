import React from 'react'
import { useState } from 'react'
import { doc,updateDoc,setDoc } from 'firebase/firestore'  //the set doc method completly updates the whole document in firebase
import { db } from '../init-firebase'
const EditMovie = () => {
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    
    const handelSubmit = (e) =>{
    e.preventDefault()
    if (name === "" || id === ""){
        return
    }
    const docRef = doc(db,'movies',id)
    
     updateDoc(docRef,{name}).then(response => {
        console.log(response);
     }).catch(error => console.log(error.message))


}
  return (
    <div>
    <h4>Edit Movie</h4>
    <form action="" onSubmit={handelSubmit}>
        <label htmlFor="id">Movie ID</label>
        <input type="text" name="" id="id" value={id} onChange={e=> setId(e.target.value)}/>
        <br />

        <label htmlFor="name">Movie Name</label>
        <input type="text" name="" id="name" value={name} onChange={e=> setName(e.target.value)}/>

        <button type="submit">Update  movie</button>
    </form>
    </div>
    
  )
}

export default EditMovie

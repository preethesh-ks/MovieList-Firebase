import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../init-firebase'
import { movieCollectionref } from '../lib/firestore.collection'

const AddMovie = () => {
    const [name, setName] = useState('')
    const handelSubmit = (e) =>{
    e.preventDefault()
    if (name === ""){
        return
    }
    
    // const moviesCollRef = collection(db , 'movies')
    addDoc(movieCollectionref,{name}).then(response => {
        console.log(response.id)
    }).catch(error => {
        console.log(error.message);
    })
  //  alert(name)

}
  return (
    <div>
    <h4>add Movie</h4>
    <form action="" onSubmit={handelSubmit}>
        <label htmlFor="name">Movie Name</label>
        <input type="text" name="" id="name" value={name} onChange={e=> setName(e.target.value)}/>
        <button type="submit">Add movie</button>
    </form>
    </div>
    
  )
}

export default AddMovie

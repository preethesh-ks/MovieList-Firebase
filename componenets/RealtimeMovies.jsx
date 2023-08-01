import React ,{useState,useEffect} from 'react'
import { onSnapshot } from 'firebase/firestore'
import { movieCollectionref } from '../lib/firestore.collection'
import {collection ,doc,getDocs,deleteDoc} from 'firebase/firestore'
import { db } from '../init-firebase'

const RealtimeMovies = () => {

    const [movies, setmovies] = useState([])

    useEffect(() => {
         const unsubscribe = onSnapshot(movieCollectionref,snapshot =>{
                setmovies(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()}))) //listen for realtime
            })
    
      return () => {
            unsubscribe()
      }
    }, [])

    const deleteMovie = (id) =>{
  const docRef = doc(db,'movies',id)
  deleteDoc(docRef).then(()=>console.log('documnet deleted'))
  .catch(error => console.log(error.message))
  //alert(id)
}
    


  return (
    <div>
        <h4>RealtimeMovies</h4>
        <ul>
            {movies.map(movie => <li key={movie.id}>{movie.id} :{movie.data.name}
            <button onClick={()=> deleteMovie(movie.id)}>delete</button>
            </li>)}
      </ul>
    </div>
  )
}

export default RealtimeMovies
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
const Navbar = () => {
    const router = useRouter()
    // const onclickblogs=()=>{
    //     router.push("/blogs")
    // }
    const goback=()=>{
        router.back()
    }

  return (
    <div>
        <Link href="/">Home</Link>
        <Link href="/movies/allMovies">movies</Link>
        
        <button onClick={()=>goback()}>go back</button>
    </div>
  )
}

export default Navbar
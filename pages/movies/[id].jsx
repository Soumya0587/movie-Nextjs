import axios from 'axios';

import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
const Pages = ({data}) => {
const router= useRouter()

 
    const handleclick=async(data)=>{
        await axios.post(`http://localhost:4004/wishlists`,data)
        .then(res=>{
            alert("success")
            router.push("/watchlist/watchlist")

    })
        .catch(err=>alert(err))
    }

  return (
    <div>
        <div>
        <Image src={data.Images[0]} alt="dfg" width={100} height={100} />
            <h1>{data.Title}</h1>
            <button onClick={()=>handleclick(data)}>add to watchlist</button>
        </div>
    </div>
  )
}
export async function getStaticPaths() {
    let r= await fetch(`http://localhost:4004/movies/`)
    let d=await r.json()
    return {
      paths: d.map((blog)=>({params : {id : String(blog.id)}})),
      fallback: false, // can also be true or 'blocking'
    }
  }
export async function getStaticProps(context){
    // console.log(context)
    const {id}=context.params
    const res = await fetch(`http://localhost:4004/movies/${id}`);
    const data = await res.json();
    return{
        props:{
            data : data
        }
    }
}

export default Pages

import { useState } from 'react';
import { useSearchParams,Link } from 'react-router-dom';


import{Box,Grid} from '@mui/material';
import {API} from '../../../service/api';
import Post from './Post';


import React from 'react'
import { useEffect } from 'react';

const Posts = () => {

    const [posts,setPosts] = useState([]);

    const [searchParams] = useSearchParams();
    const category = searchParams.get('category'); 
    let a=1;
    useEffect(()=>{
      const fetchData = async() =>{
         let response= await API.getAllPosts({category:category || ''});
         if(response.isSuccess){
             setPosts(response.data);
         }
      }
      fetchData();

      return ()=>{

      }
 
     },[category,a])


    useEffect(()=>{
     const fetchData = async() =>{
        let response= await API.getAllPosts({category:category || ''});
        if(response.isSuccess){
            setPosts(response.data);
        }
     }
     fetchData();

    },[category])
    console.log(posts.length);
  return (
    <>
       
      {  
         posts && posts.length>0 ? posts.map(post=>(
          <Grid item lg={3} sm={4} xs={12}>
             <Link to={`details/${post._id}`} style={{textDecoration:'none', color:'inherit'}}>
                <Post post={post}/>
             </Link>
          </Grid>
         )):<Box style={{color:'#878787',margin:'30px 80px',fontSize:18}}>No Data available to Display mate!!</Box>
      }
    </>
  )
}

export default Posts;    
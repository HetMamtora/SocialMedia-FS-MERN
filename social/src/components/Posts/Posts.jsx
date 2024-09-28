import React, { useEffect, useState } from 'react'
import './Posts.css'
//import { PostsData } from '../../Data/PostsData'
import Post from '../Post/Post'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'


const Posts = () => {

    const [liked, setLiked] = useState('')
    const [posts, setPosts] = useState([])

    const fetchPosts = async() => {
        const response = await fetch('http://localhost:8080/api/posts/fetchAllPosts');
        const converted = await response.json()
        setPosts(converted)
    }
    useEffect(()=> {
        fetchPosts()
    }, [])

    const handleLikes = async(post) => {
        console.log("Attributes", post);

        const formData = {
            _id: post._doc._id,
            userId: localStorage.getItem("userId")
        }

        const response = await fetch('http://localhost:8080/api/profile/like', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        });
        console.log('Like Response', response)

        if(response.ok){
            const resp = await response.json();
            console.log("Result:",resp)
            fetchPosts()
        }
    }

    return (
        <div>Posts</div>
    )
}

export default Posts
import React, { useEffect } from 'react'
import './Profile.css'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    // const navigate = useNavigate()
    // useEffect(() => {
    //     if(!localStorage.getItem("userId")){
    //         navigate("/")
    //     }
    // },[])

    return (
        <div className='Profile'>
            <ProfileLeft />
            <div className='Profile-center'>
                <ProfileCard />
                <PostSide />
            </div>
            <RightSide />
        </div>
    )
}

export default Profile
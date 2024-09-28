import React, { useEffect, useState } from 'react'

const FollowersCard = () => {

    const [users, setUsers] = useState([]);
    const [unfollow, setUnfollow] = useState([]);
    const fetchUsers = async() => {
        const response = await fetch("http://localhost:8080/api/users/fetchUsers");
        const converted = await response.json()
        console.log("All Users", converted);
        setUsers(converted);
        
    }
    useEffect(() => {
        fetchUsers()
        setUnfollow(localStorage.getItem("followersList"))
    }, [])

    const handleFollow = async (followerId) => {
        const formData = {
            userId: localStorage
        }
    }
    return (
        <div className='FollowersCard'>
            <h3>People You May Follow</h3>

            {users.length > 0 ? users.filter(item=>!localStorage.getItem("name").startsWith(item.firstName)).map((follower,id) => {
                return(
                    <div className='follower'>
                        <div>
                            <img src={follower.img} alt='' className='followerImage' />
                            <div className='name'>
                                <span>{follower.firstName}</span>
                                <span>@{follower.username}</span>
                            </div>
                        </div>

                        <button className='button fc-button' onClick={() => handleFollow(follower)}>
                            {unfollow?.includes(follower._id) ? 'Unfollow' : 'Follow'}
                        </button>
                    </div>
                )
            }) : null}
        </div>
    )
}

export default FollowersCard
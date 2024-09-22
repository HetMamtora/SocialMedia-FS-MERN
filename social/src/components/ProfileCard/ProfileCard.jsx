import React, {useEffect, useState} from 'react';
import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.jpg';
import './ProfileCard.css'

const ProfileCard = () => {

    const [profileData, setProfileData] = useState('');
    const fetchInfo = async () => {
        const formData = {userId: localStorage.getItem("userId")}
        const response = await fetch('http://localhost:8080/api/profile/data', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(formData),
        });
        console.log("Fetching Profile Info Response: ", response)

        if(response.ok){
            const resp = await response.json();
            setProfileData(resp)
        }
    }

    useEffect(() => {
        fetchInfo()
    }, [])

    const ProfilePage = true;

    return (
        <div className='ProfileCard'>
            <div className='ProfileImages'>
                <img src={Cover} alt='' />
                <img src={localStorage.getItem("image")} alt='' />
            </div>

            <div className='ProfileName'>
                <span>{localStorage.getItem("name")}</span>
            </div>

            <div className='followStatus'>
                
            </div>
        </div>
    )
}

export default ProfileCard
import React, { useRef, useState } from 'react'
import ProfileImage from '../../img/profileImg.jpg'
import './PostShare.css'
import { UilScenery } from '@iconscout/react-unicons';
import { UilPlayCircle } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilSchedule } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';

const PostShare = () => {

    const [image, setImage] = useState(null)
    const [video, setVideo] = useState(null)
    const [desc, setDesc] = useState()
    const imageRef = useRef()
    const videoRef = useRef()

    const onImageChange = async(event) => {
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            let reader = new FileReader();
            reader.onload = function(event){
                setImage({
                    image: URL.createObjectURL(img),
                    base64String: event.target.result
                })
            }
            reader.readAsDataURL(img);
            event.targer.value = null;
        }
    }

    const postImage = async(e) => {
        e.preventDefault();

        if(image !== null){
            console.log("Hit in the Image");

            try{
                const formData = new FormData();
                formData.append("images", image.base64String);
                formData.append("name","johndoe");
                formData.append("userId", localStorage.getItem("userId"));
                formData.append("desc", desc);
                formData.append("likes", 0);
                formData.append("liked", false);
            }
            
        }
    }
    return (
        <div>PostShare</div>
    )
}

export default PostShare
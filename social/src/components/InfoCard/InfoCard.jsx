import React, { useState } from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal'

const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false);

    return (
        <div className='InfoCard'>
            <div className='infoHead'>
                <h4>Your Info</h4>
                <div>
                    <UilPen width="2rem" height="1.2rem" onClick={() => setModalOpened(true)} />
                    <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
                </div>
            </div>

            <div className='info'>
                <span><b>STATUS: </b></span>
                <span>Looking for new Friends</span>
            </div>
            <div className='info'>
                <span><b>LIVES IN: </b></span>
                <span>India</span>
            </div>
            <div className='info'>
                <span><b>WORKS AT: </b></span>
                <span>XYZ Organization</span>
            </div>

            <button className='button logout-button'>Log Out</button>

        </div>
    )
}

export default InfoCard
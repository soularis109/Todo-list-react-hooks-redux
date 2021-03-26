import React from "react";
import './user.css'

export const User = ({user}) => {
    return <>
    <div className='user'>
        <img className='user__logo' src='https://embodiedfacilitator.com/wp-content/uploads/2018/05/human-icon-png-1901.png' />
        <div>{user.name}</div>
        {user.followed ? <button>Unfollow</button> : <button>Follow</button>}

    </div>
    </>
}
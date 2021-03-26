import React from "react";
import './Header.css'
import {logout} from "../../redux/login-reducer";
import {NavLink, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Exit from '../utils/img/logout.png'

export const Header = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.login.isAuth)
    const login = useSelector(state => state.login.login)


    return <div>

        <div className='header'>
            {isAuth ?
            <div className='headerName'>
                 <div className='header__user'>{login} - <button className='header__btn' onClick={() => dispatch(logout())}><img className='exit' src={Exit} alt=""/></button>
                </div>
            </div>

                : <Redirect to={'/login'}/>}
        </div>

    </div>
}
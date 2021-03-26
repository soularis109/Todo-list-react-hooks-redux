import React from "react";
import './login.css'
import {Field, reduxForm} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/login-reducer";
import {Redirect} from "react-router-dom";



const LoginForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'} component={'input'}/>
            </div>
            <div>
                Remember me <Field type={'checkbox'} name={'rememberMe'} component={'input'}/>
            </div>
            <div>
                <button className='btn btn-secondary'>Login</button>
            </div>
        </form>
}
const LoginRedux = reduxForm({form: 'login'})(LoginForm)

export const Login = (props) => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.login.isAuth)
    const onSubmit = (formData) => {
        dispatch(login(formData.email,formData.password,formData.rememberMe))
    }

    if (isAuth) {
        return <Redirect to={'/todo'} />

    }

    return <div>
        <h1 className='login__title'>Login</h1>
        <LoginRedux onSubmit={onSubmit}/>
        </div>


}
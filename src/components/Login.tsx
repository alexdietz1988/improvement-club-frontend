import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'

import LoginForm from './LoginForm'
import { login } from '../actions/user'

function Login(props) {
    let navigate = useNavigate()
    const [submitted, setSubmitted] = useState(false)

    function onSubmit(formValues) {
        props.login(formValues)
        setSubmitted(true)
    }

    useEffect(() => {
        if (props.isSignedIn) {
            navigate('/challenge')
        }
    }, [props.isSignedIn])

    return (
        <>
        <h4 className='title is-4'>Login</h4>
        {submitted ? <div>Loading...</div> : <LoginForm onSubmit={onSubmit} />}
        </>
    )
}

function mapStateToProps(state) {
    return { isSignedIn: state.user.isSignedIn}
}

export default connect(mapStateToProps, { login })(Login)
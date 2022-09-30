import { Link } from 'react-router-dom'
import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux'

function renderInput(props) {
    return (
        <div className='field'>
            <label className='label' htmlFor={props.input.name}>{props.label}</label>
            <div className='control'>
                <input className='input' {...props.input} required />
            </div>
        </div>
    )
}

let LoginForm = (props) => {
    return (
        <Form 
            onSubmit={props.onSubmit}
            initialValues={{ loginType: 'login' }}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field name='user' component={renderInput} label='Username' type='text' />
                    {props.errorMessage === 'user already exists' ? 
                        <p className='help is-danger'>There's already an account with that username. If it's you, please login; otherwise, enter a different username.</p>
                        : ''}
                    <Field name='password' label='Password' type='password' component={renderInput} />
                    
                    <div className='field'>
                    
                        <div className='control'>
                            <label className='radio'>
                                <Field name='loginType' component='input' type='radio' value='login'/>{' '}
                                Login
                            </label>
                            <label className='radio'>
                                <Field name='loginType' component='input' type='radio' value='signup'/>{' '}
                                Signup
                            </label>
                        </div>
                    </div>

                    <div className='field is-grouped'>
                        <div className='control'>
                            <input className='button is-primary' type='submit' value='Submit' />
                         </div>
                    <div className='control'>
                        <Link className='button is-light' to='/'>Cancel</Link>
                    </div>
                </div>
                    {props.errorMessage === 'invalid username or password' ? <p>Invalid username or password.</p> : ''}
                </form>
            )}
        />

    )
}

function mapStateToProps(state) {
    return {
        errorMessage: state.user.error
    }
}

export default connect(mapStateToProps)(LoginForm)
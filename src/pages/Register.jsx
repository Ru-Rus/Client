import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import Logo from '../assets/components/logo';

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>
          Register
        </h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'> Name</label>
          <input type='text' id='name' className='form-input' name='name' required defaultValue="Kaizer"/>
        </div>
        <button type='submit' className='btn btn-block'>Submit</button>
        <p> Already a member ?
          <Link to='/login' className='member-btn'> Login</Link>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register

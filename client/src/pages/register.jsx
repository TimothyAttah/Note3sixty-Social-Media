import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../redux/actions/authAction';

const Register = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showCf_password, setShowCf_password] = useState(false);

  const initialState = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    cf_password: '',
    gender: 'male',
  };
  const [userData, setUserData] = useState(initialState);
  const { fullname, username, email, password, cf_password } = userData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData));
  };

  useEffect(() => {
    if (auth.token) {
      navigate('/');
    }
  }, [auth.token, navigate]);
  return (
    <div className='auth_page'>
      <form onSubmit={handleSubmit}>
        <h3 className='text-uppercase text-center mb-4'>Note3-Social-Media</h3>
        <div className='form-group'>
          <label htmlFor='fullname'>Full name</label>
          <input
            type='text'
            className='form-control'
            id='fullname'
            onChange={handleChangeInput}
            value={fullname}
            name='fullname'
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group'>
          <label htmlFor='username'>User name</label>
          <input
            type='text'
            className='form-control'
            id='username'
            onChange={handleChangeInput}
            value={username.toLowerCase().replace(/ /g, '')}
            name='username'
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            onChange={handleChangeInput}
            value={email}
            name='email'
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className='form-group'>
          <label htmlFor='exampleInputPassword1'>Password</label>
          <div className='pass'>
            <input
              type={show ? 'text' : 'password'}
              className='form-control'
              id='exampleInputPassword1'
              onChange={handleChangeInput}
              value={password}
              name='password'
            />
            <small onClick={() => setShow(!show)}>
              {show ? 'Hide' : 'Show'}
            </small>
          </div>
        </div>

        <div className='form-group'>
          <label htmlFor='cf_password'>Confirm Password</label>
          <div className='pass'>
            <input
              type={showCf_password ? 'text' : 'password'}
              className='form-control'
              id='cf_password'
              onChange={handleChangeInput}
              value={cf_password}
              name='cf_password'
            />
            <small onClick={() => setShowCf_password(!showCf_password)}>
              {showCf_password ? 'Hide' : 'Show'}
            </small>
          </div>
        </div>

        <div className='row justify-content-between mx-0 mb-1'>
          <label htmlFor='male'>
            Male:
            <input
              type='radio'
              id='male'
              name='gender'
              value='male'
              defaultChecked
              onChange={handleChangeInput}
            />
          </label>

          <label htmlFor='female'>
            Female:
            <input
              type='radio'
              id='female'
              name='gender'
              value='female'
              onChange={handleChangeInput}
            />
          </label>

          <label htmlFor='other'>
            Other:
            <input
              type='radio'
              id='other'
              name='gender'
              value='other'
              onChange={handleChangeInput}
            />
          </label>
        </div>

        <button
          type='submit'
          className='btn btn-dark w-100'
          // disabled={email && password ? false : true}
        >
          Register
        </button>

        <p className='my-2'>
          Already have an account?
          <Link to='/login' style={{ color: 'crimson' }}>
            Login Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

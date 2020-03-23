import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'

import './App.css';

function App() {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const formik = useFormik({
      initialValues: {
          email : '',
          password : ''
  }, 
  onSubmit: values => {
      dispatch({ type: 'AUTH_USER_REQUESTED', payload: { email : values.email, password : values.password } })      
  },
  })

  useEffect(()=> {
      dispatch({ type: 'DELETE_MESSAGE' })
  },[dispatch])

  return (
    <div className="App">
      <main>
        <form onSubmit={formik.handleSubmit}>
        <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange}/>
        <input type="text" name="password" value={formik.values.password} onChange={formik.handleChange}/>
        <button type="submit">Login</button>  
        </form>
        User Token = { user.user.token }
        <br/>
        Error = { user.message }
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import '../Pages/login.css' // Ensure you have your custom CSS file if you need extra styling

const Login = () => {

  const navigate = useNavigate();  
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(6, 'Must be at least 6 characters').required('Required')
  });

  const handleSubmit = (values) => {
    const { email, password } = values;
    console.log('Email:', email);
    console.log('Password:', password);
    alert("Succcessfully Logged In");
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ touched, errors }) => (
                  <Form>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field name="email" type="email" className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`} />
                      <ErrorMessage name="email" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Field name="password" type="password" className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`} />
                      <ErrorMessage name="password" component="div" className="invalid-feedback" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                    <div className="mt-3 text-center">
                      <Link to="/signup">Don't have an account? Signup</Link>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

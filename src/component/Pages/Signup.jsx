import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import '../Pages/signup.css'


const Signup = () => {
  const validationSchema = Yup.object({
    fullName: Yup.string().min(3, 'Must be at least 3 characters').required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(6, 'Must be at least 6 characters')
      .matches(/\d/, 'Must contain a number')
      .matches(/[!@#$%^&*]/, 'Must contain a special character')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required')
  });

  return (
    <div className="container">
      <h2>Signup</h2>
      <Formik
        initialValues={{ fullName: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ touched, errors }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <Field name="fullName" type="text" className="form-control" />
              <ErrorMessage name="fullName" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" className="form-control" />
              <ErrorMessage name="password" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field name="confirmPassword" type="password" className="form-control" />
              <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
            <div className="mt-3">
              <Link to="/login">Already have an account? Login</Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;

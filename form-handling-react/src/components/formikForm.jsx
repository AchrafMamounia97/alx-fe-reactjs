import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
	username: Yup.string().required('Username is required'),
	email: Yup.string().email('Invalid email').required('Email is required'),
	password: Yup.string().required('Password is required'),
});

const initialValues = {
	username: '',
	email: '',
	password: '',
};

const handleSubmit = (values, { setSubmitting, resetForm }) => {
	setTimeout(() => {
		alert('User registered successfully!');
		setSubmitting(false);
		resetForm();
	}, 500);
};

const FormikForm = () => (
	<Formik
		initialValues={initialValues}
		validationSchema={validationSchema}
		onSubmit={handleSubmit}
	>
		{({ isSubmitting }) => (
			<Form>
				<h2>User Registration (Formik)</h2>
				<div>
					<label>Username:</label>
					<Field type="text" name="username" />
					<ErrorMessage name="username" component="span" style={{color: 'red'}} />
				</div>
				<div>
					<label>Email:</label>
					<Field type="email" name="email" />
					<ErrorMessage name="email" component="span" style={{color: 'red'}} />
				</div>
				<div>
					<label>Password:</label>
					<Field type="password" name="password" />
					<ErrorMessage name="password" component="span" style={{color: 'red'}} />
				</div>
				<button type="submit" disabled={isSubmitting}>Register</button>
			</Form>
		)}
	</Formik>
);

export default FormikForm;

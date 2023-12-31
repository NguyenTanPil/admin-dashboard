import * as yup from 'yup';

export const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	contact: '',
	address1: '',
	address2: '',
};

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

export const userSchema = yup.object().shape({
	firstName: yup.string().required('This field is required'),
	lastName: yup.string().required('This field is required'),
	contact: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('This field is required'),
	email: yup.string().email('Email is not valid').required('This field is required'),
	address1: yup.string().required('This field is required'),
	address2: yup.string().required('This field is required'),
});

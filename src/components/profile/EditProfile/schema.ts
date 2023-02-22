import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters long'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phoneNumber: Yup.string()
    .matches(/^(\+62|62|0)[1-9][0-9]{7,11}$/, 'Invalid phone number')
    .required('Phone number is required'),
  address: Yup.string().required('Address is required'),
});

export default schema;
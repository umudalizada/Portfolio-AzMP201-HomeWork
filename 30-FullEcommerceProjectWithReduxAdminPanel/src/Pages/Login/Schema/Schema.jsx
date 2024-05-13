import * as Yup from 'yup';

const Schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    surname: Yup.string().required('Surname is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    image: Yup.string().required('Image link is required'),
    gender: Yup.string().required('Gender is required')
});

export default Schema;

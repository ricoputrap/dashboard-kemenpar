import React from 'react'
import { Form, Formik } from 'formik';
import { Box, Button, Flex, Stack } from '@chakra-ui/react';
import * as Yup from 'yup';
import FormField from './FormField';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters long'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phoneNumber: Yup.string()
    .matches(/^(\+62|62|0)[1-9][0-9]{7,11}$/, 'Invalid phone number')
    .required('Phone number is required'),
  address: Yup.string().required('Address is required'),
});

interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  phoneNumber: "",
  address: ""
}

const EditProfile: React.FC = () => {
  return (
    <Formik
       initialValues={ initialValues }
       validationSchema={ schema }
       onSubmit={(values, { setSubmitting }) => {
        console.log("hasdhashda")
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
      {formik => (
        <Box>
          <Form onSubmit={ formik.handleSubmit }>
            <Flex columnGap="32px">
              <Stack rowGap="28px">
                <FormField
                  label="Name"
                  error={ formik.errors.name }
                  touched={ formik.touched.name }
                  fieldProps={ formik.getFieldProps("name") }
                />

                <FormField
                  label="Email"
                  error={ formik.errors.email }
                  touched={ formik.touched.email }
                  fieldProps={ formik.getFieldProps("email") }
                />

                <FormField
                  label="No Telp"
                  error={ formik.errors.phoneNumber }
                  touched={ formik.touched.phoneNumber }
                  fieldProps={ formik.getFieldProps("phoneNumber") }
                />
              </Stack>

              <Stack rowGap="50px">
                <FormField
                  label="Address"
                  error={ formik.errors.address }
                  touched={ formik.touched.address }
                  fieldProps={ formik.getFieldProps("address") }
                  textArea
                />

                <Button
                  type="submit"
                  background="#EAC170"
                  color="#000000"
                  isLoading={ formik.isSubmitting }
                >
                  Submit
                </Button>
              </Stack>
            </Flex>
          </Form>
        </Box>
      )}
     </Formik>
  )
}

export default EditProfile
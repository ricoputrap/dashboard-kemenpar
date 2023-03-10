import React from 'react'
import { Form, Formik } from 'formik';
import { Box, Button, Flex, Stack } from '@chakra-ui/react';
import FormField from '../FormField';
import { initialValues, FormValues } from './initialValues';
import schema from './schema';

const EditProfile: React.FC = () => {
  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik
       initialValues={ initialValues }
       validationSchema={ schema }
       onSubmit={ handleSubmit }
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
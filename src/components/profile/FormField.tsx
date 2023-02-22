import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { FieldInputProps } from 'formik';
import React from 'react'

interface Props {
  label: string;
  error?: string;
  touched?: boolean;
  fieldProps: FieldInputProps<string | number | readonly string[] | undefined>;
}

const FormField: React.FC<Props> = ({ label, error, touched, fieldProps }) => {
  return (
    <FormControl isInvalid={ !!error && touched }>
      <FormLabel margin={0}>{ label }</FormLabel>
      <Input {...fieldProps} />
      <FormErrorMessage>
        { error }
      </FormErrorMessage>
    </FormControl>
  )
}

export default FormField
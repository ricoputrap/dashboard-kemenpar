import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { FieldInputProps } from 'formik';
import React from 'react'

interface Props {
  label: string;
  error?: string;
  touched?: boolean;
  textArea?: boolean;
  fieldProps: FieldInputProps<string | number | readonly string[] | undefined>;
}

const FormField: React.FC<Props> = ({ label, error, touched, fieldProps, textArea }) => {
  return (
    <FormControl isInvalid={ !!error && touched }>
      <FormLabel margin={0}>{ label }</FormLabel>
      <Input
        {...fieldProps}
        as={textArea ? "textarea" : "input"}
        height={textArea ? "160px" : "50px"}
        width="365px"
        background="rgba(255, 255, 255, 0.5)"
        borderRadius="5px"
        borderColor="none"
        color="black"
        paddingY={textArea ? "12px" : 0}
      />
      <FormErrorMessage fontWeight={500} fontSize="16px">
        { error }
      </FormErrorMessage>
    </FormControl>
  )
}

export default FormField
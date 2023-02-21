import React from 'react'
import { BoxInput, Container, Label } from './index.styles'
import { Input } from '@chakra-ui/react'

interface Props {
  label: string;
  value: string | number;
  handleChange: (value: string) => void;
  isPassword?: boolean;
  handleSubmit?: () => void;
}

const TextInput: React.FC<Props> = ({
  label,
  value,
  handleChange,
  isPassword,
  handleSubmit = () => {}
}) => {
  const type: React.HTMLInputTypeAttribute = isPassword ? "password" : "text";
  
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue: string = e.currentTarget.value;
    handleChange(newValue);
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Container>
      <Label>{ label }</Label>
      <BoxInput>
        <Input
          variant="unstyled"
          type={ type }
          value={ value }
          onChange={ onChange }
          onKeyDown={ handleKeyDown }
        />
      </BoxInput>
    </Container>
  )
}

export default TextInput
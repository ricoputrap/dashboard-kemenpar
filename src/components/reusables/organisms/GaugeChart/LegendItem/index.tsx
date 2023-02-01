import React from 'react'
import { TGaugeLegendItem } from '..'
import { Container, Label, ValueBox, ValueContainer, ValueText } from './index.styles'

const LegendItem: React.FC<TGaugeLegendItem> = ({ label, value, color }) => {
  return (
    <Container>
      <ValueContainer>
        <ValueBox
          backgroundColor={ color }
          borderColor="#EAC170"
        />
        <ValueText color="#FFFFFF">
          { value }
        </ValueText>
      </ValueContainer>

      <Label color="#EAC170">
        { label }
      </Label>
    </Container>
  )
}

export default LegendItem
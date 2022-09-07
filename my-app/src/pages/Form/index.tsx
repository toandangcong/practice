import React from 'react'
import Button from '../../styled-guide/components/common/Button'
import { FormPageContainer } from './styles'

const FormPage = () => {
  return (
    <FormPageContainer>
        <Button $type="disabled" content='Submit' />
    </FormPageContainer>
  )
}

export default FormPage
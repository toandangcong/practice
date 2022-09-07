import React from 'react'
import Button from '../../components/common/Button'
import { FormPageContainer } from './styles'

const FormPage = () => {
  return (
    <FormPageContainer>
        <Button $type="primary" width='100px' padding='10px'>Submit</Button>
    </FormPageContainer>
  )
}

export default FormPage
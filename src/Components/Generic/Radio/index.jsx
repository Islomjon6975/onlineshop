import React from 'react'
import { Input, Label } from './style'

export const Radio = ({
    children
}) => {
  return (
    <Label for="radiobtn">
        <Input className='radio' type="radio"  id="radiobtn" name="login" value="HTML" hidden />
        {children}
    </Label>
  )
}

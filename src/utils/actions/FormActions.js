import React from 'react'
import { ValidationEmail, ValidationPhone, ValidationString } from '../ValidationConstraints'

export default function FormActions(inputId,inputValue) {
    if(inputId==="fullname"|| inputId==="username"|| inputId==="password"||
        inputId==="department" || inputId==="faculty"|| inputId==="gender"|| 
        inputId==="matricNo"|| inputId==="dob"
        || inputId==="title"|| inputId==="date" || inputId==="startTime"){
        const val=  ValidationString(inputId, inputValue)
          return (val)
        }else if(inputId==="email"){
          const val=  ValidationEmail(inputId, inputValue)
          return (val)
        }
        else if(inputId==="phone"){
          const val=  ValidationPhone(inputId, inputValue)
          return (val)
        }
}

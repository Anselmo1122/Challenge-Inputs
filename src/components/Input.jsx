import React from 'react'
import "../styles/Input.css"

const Input = ({
  error,
  disabled,
  helperText,
  startIcon,
  endIcon,
  value,
  size,
  fullWidth,
  multiline,
  row,
  placeholder,
  label
}) => {
  return (
    <div className='input__container' >
      {
        helperText 
        ? <span className={`helper-text ${error ? 'error' : ''}`}>{ helperText }</span>
        : ""
      }
      <label htmlFor={label} className={`label ${error ? 'error' : ''}`}>
        { label ? label : "" }
        {
          multiline 
          ? <>
              <textarea 
                id={label} 
                name={label} 
                placeholder={placeholder} 
                rows={row}
                value={value}
              ></textarea>
            </>
          : disabled 
            ? <div className='input__element'>
                {
                  startIcon ? <span className='material-icons icon-start'>{startIcon}</span> : ""
                }
                <input  
                  className={`input disabled`}
                  id={label} 
                  name={label} 
                  placeholder={placeholder}
                  defaultValue={value}
                  disabled
                /> 
                {
                  endIcon ? <span className='material-icons icon-end'>{endIcon}</span> : ""
                }
              </div>
            : <div className='input__element'>
                {
                  startIcon ? <span className='material-icons icon-start'>{startIcon}</span> : ""
                }
                <input  
                  className={`input ${error ? 'error' : ''} ${startIcon ? 'start__icon' : ''} ${endIcon ? 'end__icon' : ''} ${fullWidth ? 'full-width' : ''} ${size == "sm" ? 'size__sm' : ''} ${size == "md" ? 'size__md' : ''}`}
                  id={label} 
                  name={label} 
                  defaultValue={value}
                  placeholder={placeholder}
                />
                {
                  endIcon ? <span className='material-icons icon-end'>{endIcon}</span> : ""
                }
              </div>
        }
      </label>
    </div>
  )
}

export default Input;
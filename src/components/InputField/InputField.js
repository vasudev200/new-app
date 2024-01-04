import React from 'react'
import './InputField.css'
const InputField = (props) => {
  const togglePasswd = function () {
    const passwd = document.getElementById(props.id);
    const togglePasswordIcon = document.querySelector('#togglePassword')
    // console.log(passwd);
    const type = passwd.getAttribute('type') === 'password' ? 'text' : 'password';
    passwd.setAttribute('type', type);
    const toggleEye = togglePasswordIcon.getAttribute('class') === 'fa-solid fa-eye eyeLogo' ? 'fa-solid fa-eye-slash eyeLogo' : 'fa-solid fa-eye eyeLogo';
    togglePasswordIcon.setAttribute('class', toggleEye);
    // this.classList.toggle('fa-eye-slash');
  }
  return (
    
    <div className="input-container ic2">
      <input id={props.id} className="input" ref={props.fRef} onChange={props.onChangeField} type={props.type} placeholder=" " required />
      {props.type === 'password' ?
        <i style={{ color: 'red' }} id="togglePassword" onClick={togglePasswd} className="fa-solid fa-eye eyeLogo"></i>
        : <span></span>}
      <div className={`cut ${props.type === 'password' ? '' : 'cut-short'}`} style={{ width: props.cutWidth }}></div>
      <label htmlFor={props.label} className="placeholder">{props.label}</label>

    </div>

  )
}

export default InputField

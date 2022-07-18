import React from 'react'
import styles from './css/FormItem.module.css'

const FormItem = ({type, label, placeholder, value, onChange}) => {

    return (
    <div className={styles.FormItem}>
        <label> {label} </label>
        <input
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
        />
    </div>
    )
}

export default FormItem
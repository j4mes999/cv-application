import { InformationCircleIcon } from "hugeicons-react"
import styles from '../styles/ElementSection.module.css'
import { useState } from "react"

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form was submitted!');
    console.log('First element: '+event.target[0].value);
    console.log('Second element: '+event.target[1].value);
    console.log('Third element: '+event.target[2].value);
}

const handleChangeInput = (event) => {
    
    // console.log('Input changing value: '+event.target.value);
    // console.log('Input changing index: '+event.target.index);
}

export default function GeneralSection({ title, fields }) {

    const [fieldsArray, setfieldsArray] = useState([]);

    return (
        <>
            <form onSubmit={handleSubmit} noValidate>
                <div className={styles.title}>
                    <InformationCircleIcon className={styles.icon} />
                    <h2>{title}</h2>
                </div>
                <div className={styles.fieldSection}>
                    {
                        fields.map((field, index) => (
                            <div key={index} className={styles.field}>
                                <label htmlFor={'section' + title + index}>{field.title}</label>
                                <input type="text" 
                                  className="text" 
                                  id={'section' + title + index}
                                  onChange={handleChangeInput}
                                />
                            </div>
                        ))
                    }
                    <div className="button-section">
                        <button type="submit">Update</button>
                    </div>  
                </div>
            </form>
        </>
    )

}
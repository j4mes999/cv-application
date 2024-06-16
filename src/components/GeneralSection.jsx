import { InformationCircleIcon } from "hugeicons-react"
import styles from '../styles/ElementSection.module.css'

export default function GeneralSection({ title, fields, whenSubmit }) {

    return (
        <>
            <form onSubmit={whenSubmit} noValidate>
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
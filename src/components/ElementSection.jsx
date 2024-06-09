import { InformationCircleIcon } from "hugeicons-react"
import styles from '../styles/ElementSection.module.css'

export default function ElementSection({key=1,title, fields}){
     return (
        <>
        <div className="section" id={key}>
            <div className={styles.title}>
                <InformationCircleIcon className={styles.icon} />
                <h2>{title}</h2>
            </div>
            <div className={styles.fieldSection}>
                {
                    fields.map((field, index) => (
                        <div key={index} className={styles.field}>
                            <label htmlFor={'section'+title+index}>{field.title}</label>
                            <input type="text" className="text" id={'section'+title+index}></input>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
     )

}
import { useState } from 'react';
import styles from '../styles/ElementSection.module.css'

export default function Section({ title, elements, whenSubmit }) {
    
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={styles.mainSectionContainer}>
            <div className={styles.sectionTitle} onClick={() => setIsExpanded(!isExpanded)}>
                <h2>{title} {!isExpanded ? '+' : '-'}</h2>
            </div>
            <form onSubmit={whenSubmit} noValidate>
                {isExpanded && (
                    <div className={styles.fieldSection}>
                        {
                            elements.map((field, index) => (
                                <div key={index} className={styles.field}>
                                    <label htmlFor={'section' + title + index}>{field.title}</label>
                                    <input type="text"
                                        className="text"
                                        id={'section' + title + index}
                                    />
                                </div>
                            ))
                        }
                        <div className={styles.buttonSection}>
                            <button type="submit">Save</button>
                        </div>
                    </div>
                )}
            </form>
        </div>

    )
}
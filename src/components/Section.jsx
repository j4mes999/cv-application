import { useState } from 'react';
import styles from '../styles/ElementSection.module.css'

export default function Section({ title, elements, whenSubmit }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <form onSubmit={whenSubmit} noValidate>
                <div className={styles.sectionTitle} onClick={() => setIsExpanded(!isExpanded)}>
                    <h2>{title} {!isExpanded ? '+' : '-'}</h2>
                </div>
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
                        <div className="button-section">
                            <button type="submit">Save</button>
                        </div>
                    </div>
                )}
            </form>
        </>
    )
}
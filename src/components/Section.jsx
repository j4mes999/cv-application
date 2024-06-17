import { useState } from 'react';
import styles from '../styles/ElementSection.module.css'

export default function Section({ title, elements }) {
    const [isExpanded, setIsExpanded] = useState(false);

    console.log('Section.jsx elements lenght: '+elements);

    return (
        <>
            <div className="section">
                <div className="section-title" onClick={() => setIsExpanded(!isExpanded)}>
                    <h2>{title} v</h2>
                </div>
                {isExpanded && (
                    <div className="section-content">
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
                            <button type="submit">Update</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
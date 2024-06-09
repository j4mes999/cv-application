import { useState } from 'react';
import ElementSection from './ElementSection.jsx';

export default function Section({ title, elements }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <div className="section">
                <div className="section-title" onClick={() => setIsExpanded(!isExpanded)}>
                    <h2>{title}</h2>
                </div>
                {isExpanded && (
                    <div className="section-content">
                        {elements.map((element, index) => (
                          <ElementSection key={index} title={element.school} fields={element}/>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}
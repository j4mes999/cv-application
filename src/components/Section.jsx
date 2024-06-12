import { useState } from 'react';

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
                       
                    </div>
                )}
            </div>
        </>
    )
}
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
                        {elements.map((element, index) => 
                        //  console.log('Section.jsx element title:'+ element[0]);
                        //  console.log('Section.jsx index:'+ index);
                        // Object.keys(element[0]).forEach((prop)=> console.log(prop));
                          <ElementSection key={index} title={element[0].school} fields={element[0]}/>
                        
                        )}
                    </div>
                )}
            </div>
        </>
    )
}
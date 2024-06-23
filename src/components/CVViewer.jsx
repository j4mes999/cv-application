import styles from '../styles/CVViewer.module.css';
import deleteIcon from '../assets/delete.png';
import { useState, useEffect } from 'react';

export default function CVViewer({ generalData, educationData, experienceData, updateEducationData, updateExperienceData }) {
    const [educationElements, setEducationElements] = useState([...educationData]);
    const [experienceElements, setExperienceElements] = useState([...experienceData]);
    useEffect(() => {
        setEducationElements([...educationData]);
        setExperienceElements([...experienceData]);
    }, [educationData, experienceData]);

    function deleteEducation(index) {
        const updatedEducationData = educationElements.filter((_,i) => i !== index);
        setEducationElements(updatedEducationData);
        updateEducationData(updatedEducationData);
    }

    function deleteExperience(index) {
        const updatedExperienceData = experienceElements.filter((_,i) => i !== index);
        setExperienceElements(updatedExperienceData);
        updateExperienceData(updatedExperienceData);
    }
    console.log('generalData firts'+ generalData[0]);
    return (
        <div className={styles.mainContainer}>
            <div className={styles.generalDataContainer}>
                <h3>{generalData[0]}</h3>
                <div className={styles.generalDataGrid}>
                    <span>{generalData[1]}</span>
                    <span>{generalData[2]}</span>
                </div>
            </div>
            <div>
                <h2>{educationElements.length != 0 ? 'Education' : ''}</h2>
                {
                    educationElements.map((educationElement, index) =>
                        <div key={index} className={styles.educationElement}>
                            <span>{educationElement.year}.
                                {' ' + educationElement.school}.
                                {' ' + educationElement.degree}.
                                {' ' + educationElement.location}. <br /><br />
                            </span>
                            <button className={`${styles.deleteButton} ${styles.hide}`}
                                onClick={() => deleteEducation(index)}>
                                <img src={deleteIcon} className={styles.deleteIcon} />
                            </button>
                        </div>
                    )}
            </div>
            <div>
                <h2>{experienceElements.length != 0 ? 'Experience' : ''}</h2>
                {
                    experienceElements.map((experienceElement, index) =>
                        <div key={index} className={styles.experienceElement}>
                            <span>{experienceElement.startDate} - {experienceElement.endDate}.
                                {' ' + experienceElement.company}.
                                {' ' + experienceElement.position}.
                                {' ' + experienceElement.location}.
                                {' ' + experienceElement.description}.
                                <br /><br />
                            </span>
                            <button className={`${styles.deleteButton} ${styles.hide}`}
                                onClick={() => deleteExperience(index)}>
                                <img src={deleteIcon} className={styles.deleteIcon} />
                            </button>
                        </div>
                    )}
            </div>
        </div>
    );
}
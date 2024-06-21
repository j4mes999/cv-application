import styles from '../styles/CVViewer.module.css';
import deleteIcon from '../assets/delete.png';
export default function CVViewer({ generalData, educationData, experienceData }) {

    function deleteEducation(event) {
        console.log('CVViewer deleteEducation');
        const updatedGeneralData = generalData.filter((field, index) => index !== event.target.dataset.index);
        generalData = updatedGeneralData;
    }

    return (
        <div className="cv-viewer">
            <div>
                {generalData.map((field, index) => (
                    <p key={index}>{field}</p>
                ))}
            </div>
            <div>
                <h2>{educationData.length != 0 ? 'Education' : ''}</h2>
                {
                    educationData.map((educationElement, index) =>
                        <div key={index} className={styles.educationElement}>
                            <span>{educationElement.year}.
                                {' ' + educationElement.school}.
                                {' ' + educationElement.degree}.
                                {' ' + educationElement.location}. <br /><br />
                            </span>
                            <button className={`${styles.deleteButton} ${styles.hide}`} 
                                     onClick={deleteEducation}>
                                <img src={deleteIcon} className={styles.deleteIcon} />
                            </button>

                        </div>
                    )}
            </div>
            <div>
                <h2>{experienceData.length != 0 ? 'Experience' : ''}</h2>
                {
                    experienceData.map((experienceElement, index) =>
                        <div key={index} className="experience-element">
                            <span>{experienceElement.startDate} - {experienceElement.endDate}.
                                {' ' + experienceElement.company}.
                                {' ' + experienceElement.position}.
                                {' ' + experienceElement.location}.
                                {' ' + experienceElement.description}.
                                <br /><br />
                            </span>
                        </div>
                    )}
            </div>
        </div>
    );
}
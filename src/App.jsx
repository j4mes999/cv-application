import CVViewer from './components/CVViewer.jsx';
import Section from './components/Section.jsx';
import styles from './styles/Main.module.css'
import { useState } from 'react';

function App() {
  const [generalData, setGeneralData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

  const title = 'Personal Information';
  const fields = [
    { title: 'Name' },
    { title: 'Email' },
    { title: 'Phone' },
  ];

  const educationTitle = 'Education';
  const educationElements = [
    { title: 'School' },
    { title: 'Degree' },
    { title: 'Graduation Year' },
    { title: 'Location' }
  ];

  const experienceTitle = 'Experience';
  const experienceElements = [
    { title: 'Company' },
    { title: 'Position' },
    { title: 'Start Date' },
    { title: 'End Date' },
    { title: 'Location' },
    { title: 'Description' }
  ];

  function updateEducationData(updatedData){
    setEducationData(updatedData);
  }

  function updateExperienceData(updatedData){
    setExperienceData(updatedData);
  }

  function onSubmitGeneralData(event) {
    let newArrayFields = new Array();
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].type === 'text') {
        newArrayFields.push(event.target[i].value);
      }
    }
    setGeneralData(newArrayFields);
    event.preventDefault();
  }

  function onSubmitEducationData(event) {
    let newArrayFields = [...educationData];
    let educationItem = {
      school: event.target[0].value,
      degree: event.target[1].value,
      year: event.target[2].value,
      location: event.target[3].value
    };
    newArrayFields.push(educationItem);
    setEducationData(newArrayFields);
    event.target.reset();
    event.preventDefault();
  }

  function onSubmitExperienceData(event) {
    let newArrayFields = [...experienceData];
    let experienceItem = {
      company: event.target[0].value,
      position: event.target[1].value,
      startDate: event.target[2].value,
      endDate: event.target[3].value,
      location: event.target[4].value,
      description: event.target[5].value
    };
    newArrayFields.push(experienceItem);
    setExperienceData(newArrayFields);
    event.target.reset();
    event.preventDefault();
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.sections}>
          <Section title={title} 
            elements={fields} 
            whenSubmit={onSubmitGeneralData} />
          <Section title={educationTitle}
            elements={educationElements}
            whenSubmit={onSubmitEducationData} />
          <Section title={experienceTitle}
            elements={experienceElements}
            whenSubmit={onSubmitExperienceData} />
        </div>
        <CVViewer generalData={generalData}
          educationData={educationData} 
          updateEducationData={updateEducationData}
          experienceData={experienceData}
          updateExperienceData={updateExperienceData}/>
      </div>
    </>
  )
}

export default App

//TODO hide the backgorund in education and experience when no data is shown. Fix experience grid

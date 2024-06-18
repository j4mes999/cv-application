import CVViewer from './components/CVViewer.jsx';
import GeneralSection from './components/GeneralSection.jsx'
import Section from './components/Section.jsx';
import styles from './styles/Main.module.css'
import React, { useState } from 'react';

function App() {
  const [educationData, setEducationData] = useState([]);

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
  // const elements = [
  //   {school: 'School', degree: 'Degree', graduationYear: '2020', location: 'Canada'}
  // ];
  function onSubmitGeneralData(event) {
    let newArrayFields = new Array();
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].type === 'text') {
        newArrayFields.push(event.target[i].value);
      }
    }
    setEducationData(newArrayFields);
    event.preventDefault();
  }

  function onSubmitEducationData(event){
    console.log('Education form was sent!');
    event.preventDefault();
  }


  return (
    <>
      <h1>CV Generator</h1>
      <div className={styles.mainContainer}>
        <div className="sections">
          <GeneralSection title={title} fields={fields} whenSubmit={onSubmitGeneralData} />
          <Section title={educationTitle} elements={educationElements} whenSubmit={onSubmitEducationData}/>
        </div>
        <CVViewer data={educationData} />
      </div>
    </>
  )
}

export default App

//TODO Think about how to insert a new experience object into Section.jsx.

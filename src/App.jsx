import CVViewer from './components/CVViewer.jsx';
import GeneralSection from './components/GeneralSection.jsx'
import Section from './components/Section.jsx';
import styles from './styles/Main.module.css'
import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState([]);

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
  function handleFormSubmit(event) {
    let newArrayFields = new Array();
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].type === 'text') {
        newArrayFields.push(event.target[i].value);
      }
    }
    setFormData(newArrayFields);
    event.preventDefault();
  }


  return (
    <>
      <h1>CV Generator</h1>
      <div className={styles.mainContainer}>
        <div className="sections">
          <GeneralSection title={title} fields={fields} whenSubmit={handleFormSubmit} />
          <Section title={educationTitle} elements={educationElements} />
        </div>
        <CVViewer data={formData} />
      </div>
    </>
  )
}

export default App

//TODO Fix styles in education section and continue

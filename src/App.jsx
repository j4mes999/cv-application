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
  const elements = [
    { school: 'School', degree: 'Degree', graduationYear: '2020', location: 'Canada' },
    { school: 'School02', degree: 'Degree02', graduationYear: '2021', location: 'USA' },
    { school: 'School03', degree: 'Degree03', graduationYear: '2023', location: 'Colombia' },
  ];
  // const elements = [
  //   {school: 'School', degree: 'Degree', graduationYear: '2020', location: 'Canada'}
  // ];
  const handleFormSubmit = (event) => {
    console.log('App.jsx handleSubmit value 1: '+event.target[0].value);
    console.log('App.jsx handleSubmit value 2: '+event.target[1].value);
    setFormData(Object.entries(event.target));
    event.preventDefault();
  };


  return (
    <>
      <h1>CV Generator</h1>
      <div className={styles.mainContainer}>
        <div className="sections">
          <GeneralSection title={title} fields={fields} whenSubmit={handleFormSubmit}/>
        </div>
        <CVViewer data={formData} />
      </div>
    </>
  )
}

export default App

//TODO Continue investigating why the hell I am going to pass the form data to the other component.

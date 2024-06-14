import CVViewer from './components/CVViewer.jsx';
import GeneralSection from './components/GeneralSection.jsx'
import Section from './components/Section.jsx';
import styles from './styles/Main.module.css'

function App() {

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


  return (
    <>
      <h1>CV Generator</h1>
      <div className={styles.mainContainer}>
        <div className="sections">
          <GeneralSection title={title} fields={fields} />
        </div>
        <CVViewer />
        {/* <Section title={educationTitle} elements={elements} /> */}
      </div>
    </>
  )
}

export default App

//TODO figure out how to handle the update action in GeneralSection.jsx.


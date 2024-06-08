import ElementSection from './components/ElementSection.jsx'
import Section from './components/Section.jsx';
//import Section from './components/Section.jsx';


function App() {

  const title = 'Personal Information';
  const fields = [
      { title: 'Name'},
      { title: 'Email'},
      { title: 'Phone'},
  ];

  const educationTitle = 'Education';
  const elements = [
    [{school: 'School', degree: 'Degree', graduationYear: '2020', location: 'Canada'}],
    [{school: 'School02', degree: 'Degree02', graduationYear: '2021', location: 'USA'}]
  ];

  return (
    <>
      <h1>CV Generator</h1>
      <ElementSection title={title} fields={fields} />
      <Section title={educationTitle} elements={elements} />
    </>
  )
}

export default App

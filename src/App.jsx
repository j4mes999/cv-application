import GeneralSection from './components/ElementSection.jsx'
import Section from './components/Section.jsx';



function App() {

  const title = 'Personal Information';
  const fields = [
      { title: 'Name'},
      { title: 'Email'},
      { title: 'Phone'},
  ];

  const educationTitle = 'Education';
  const elements = [
    {school: 'School', degree: 'Degree', graduationYear: '2020', location: 'Canada'},
    {school: 'School02', degree: 'Degree02', graduationYear: '2021', location: 'USA'},
    {school: 'School03', degree: 'Degree03', graduationYear: '2023', location: 'Colombia'},
  ];
  // const elements = [
  //   {school: 'School', degree: 'Degree', graduationYear: '2020', location: 'Canada'}
  // ];


  return (
    <>
      <h1>CV Generator</h1>
      <GeneralSection title={title} fields={fields} />
      <Section title={educationTitle} elements={elements} />
    </>
  )
}

export default App

//TODO: Add just a form in education with all the fields needed.
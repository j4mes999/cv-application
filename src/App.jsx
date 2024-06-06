import { useState } from 'react'
import Section from './components/Section.jsx'
import './App.css'

function App() {
  
  const personalInformationFields = [
    { title: 'Name', value: '' },
    { title: 'Email', value: '' },
    { title: 'Phone', value: '' },
  ]

  return (
    <>
      <h1>CV Generator</h1>
      <Section
        title="Personal Information"
        icon="https://icon.now.sh/account_circle"
        fields={personalInformationFields}
      />
    </>
  )
}

export default App

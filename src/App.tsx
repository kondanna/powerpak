import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import './App.css'

const noErrors = { message: '', show: false }

const UrlInputField = () => {
  const [inputValue, setInputValue] = useState('')
  const [errorMessage, setErrorMessage] = useState(noErrors)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const clearErrors = () => {
    setErrorMessage(noErrors)
  }

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault()
    console.log(inputValue);
    const match = inputValue.match(/\d+/) ?? ['']
    const courseNumber = match[0]
    if (!courseNumber) {
      return setErrorMessage({ message: 'Please enter the course number or full link.', show: true })
    }
    clearErrors()
    window.open(`https://www.powerpak.com/courses/${courseNumber}/Rationale${courseNumber}.pdf`)
  }

  return (
    <>
      <div className="form-group" style={{ padding: '10px' }}>
        <input type="text" className="form-control" placeholder="Enter url or course number" value={inputValue} onChange={handleChange} />
        <small className="form-text text-muted">https://www.powerpak.com/course/preamble/<mark>123722</mark> or <mark>123722</mark></small>
      </div>
      <div style={{ padding: '10px', marginBottom: '10px' }}>
        <button className="btn btn-primary btn-lg" type="submit" onClick={handleSubmit}>Get Answer Key</button>
      </div>
      <small className="form-text text-muted">(opens pdf in new tab)</small>
      {errorMessage.show && <div className="alert alert-dismissible alert-warning" role="alert">
        <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={clearErrors}></button>
        {errorMessage.message}
      </div>}
    </>
  )
}

function App() {
  return (
    <>
      <div className="d-flex flex-column">
        <h1 style={{ padding: '10px', marginBottom: '10px' }}><a href="https://www.powerpak.com/login">Powerpak</a> Answer Sheets</h1>
        <UrlInputField />
      </div>
    </>
  )
}
export default App

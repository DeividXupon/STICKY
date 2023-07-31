import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from 'pages/home';
import Create from 'pages/create';
import FormCreateNote from 'pages/formCreateNote';
import FormCreateRecall from 'pages/formCreateRecall';
import ShowcaseNote from 'pages/showcaseNotes';
import ShowcaseFolders from 'pages/showcaseFolders';
import Header from 'components/header';
import LocalStoragerProvaider from 'context/localStoragerProvaider';

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/formNote' element={<FormCreateNoteWithStoragerProvider />} />
        <Route path='/formRecall' element={<FormCreateRecallWithStoragerProvider />} />
        <Route path='/notes' element={<ShowcaseNoteWithStoragerProvider />} />
        <Route path='/activeRecall' element={<ShowcaseFoldersWithStoragerProvider />} />
      </Routes>
    </Router>
  );
}

export default App;

const FormCreateNoteWithStoragerProvider = () => {
  return (
    <LocalStoragerProvaider>
      <FormCreateNote />
    </LocalStoragerProvaider>
  )
}

const ShowcaseNoteWithStoragerProvider = () => {
  return (
    <LocalStoragerProvaider>
      <ShowcaseNote />
    </LocalStoragerProvaider>
  )
}

const ShowcaseFoldersWithStoragerProvider = () => {
  return (
    <LocalStoragerProvaider>
      <ShowcaseFolders />
    </LocalStoragerProvaider>
  )
}

const FormCreateRecallWithStoragerProvider = () => {
  return (
    <LocalStoragerProvaider>
      <FormCreateRecall />
    </LocalStoragerProvaider>
  )
}
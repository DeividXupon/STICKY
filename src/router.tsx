import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from 'pages/home';
import Create from 'pages/create';
import FormCreateNote from 'pages/formCreateNote';
import FormCreateRecall from 'pages/formCreateRecall';
import ShowcaseNote from 'pages/showcaseNotes';
import ShowcaseFolders from 'pages/showcaseFolders';
import Header from 'components/header';
import LocalStoragerProvaider from 'context/localStorager/localStoragerProvaider';
import NavigationProvaider from 'context/navigation/navigationProvaider';
import ShowcaseItensInFolder from 'pages/folder';
import NotFound from 'pages/notFound';
import RandomCard from 'pages/random';

const App = () => {
  return (
    <Router>
      <HeaderWithNavigationProvider />

      <Routes>
        <Route path='/' element={<HomeWithNavigationProvider />} />
        <Route path='/create' element={<Create />} />
        <Route path='/formNote' element={<FormCreateNoteWithStoragerProvider />} />
        <Route path='/formRecall' element={<FormCreateRecallWithStoragerProvider />} />
        <Route path='/notes' element={<ShowcaseNoteWithStoragerProvider />} />
        <Route path='/activeRecall' element={<ShowcaseFoldersWithStoragerProvider />} />
        <Route path='/folder' element={<ShowcaseItensInFolderWithStoragerProvider />} />
        <Route path='/random' element={<RandomWithStoragerProvider />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

const HeaderWithNavigationProvider = () => {
  return (
    <NavigationProvaider>
      <Header />
    </NavigationProvaider>
    
  )
}

const HomeWithNavigationProvider = () => {
  return (
    <NavigationProvaider>
      <Home />
    </NavigationProvaider>
    
  )
}

const ShowcaseItensInFolderWithStoragerProvider = () => {
  return (
    <LocalStoragerProvaider>
      <ShowcaseItensInFolder />
    </LocalStoragerProvaider>
  )
}

const RandomWithStoragerProvider = () => {
  return (
    <LocalStoragerProvaider>
      <RandomCard />
    </LocalStoragerProvaider>
  )
}

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
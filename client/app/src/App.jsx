// Importação do react Router para adicionar rotas //

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Importação das páginas

import MainPage from './Components/MainPage'
import ViewPage from './Components/ViewPage'
import Create from './Components/Create'

//Importação dos Layouts

import NavBar from './Layout/NavBar' // Importação da NavBar
import Footer from './Layout/Footer' // Importação do Footer

import './App.css' // Importação do Css




function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route path="/createnew" element={<Create/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
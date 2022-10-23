// Importação do react Router para adicionar rotas //

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Importação das páginas

import MainPage from './Components/MainPage'
import ViewPage from './Components/ViewPage'
import Create from './Components/Create'
import SubmitForm from './Components/SubmitForm'
import Editar from './Components/Editar'
import Updatedb from './Components/Updatedb'

//Importação dos Layouts

import NavBar from './Layout/NavBar' // Importação da NavBar
import Footer from './Layout/Footer' // Importação do Footer

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route path="/createnew" element={<Create/>}/>
        <Route path="/sucessform" element={<SubmitForm/>}/>
        <Route path="/sucessupdate" element={<Updatedb/>}/>
        <Route path="/views" element={<ViewPage/>}/>
        <Route path="/edit" element={<Editar/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
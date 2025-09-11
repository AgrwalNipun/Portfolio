
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './pages/home'
import NotFound from './pages/404_not_found'


function App() {

  return (
    <>
    <BrowserRouter>
    
      <Routes>
        
        <Route  index element = {<HomeScreen/>}></Route>
        <Route  path = '/' element = {<HomeScreen/>}></Route>

        <Route  path = '*' element = {<NotFound/>}></Route>
      </Routes>

    </BrowserRouter>
      
    </>
  )
}

export default App

import { Routes, Route } from "react-router-dom"
import AuthPage from './pages/Auth';
import HomePage from './pages/HomePage'
import MainNavigationComponent from "./components/MainNavigationComponent";
import './css/App.css'

function App() {
  return (
    <>
      <MainNavigationComponent/>
      <main className="main-content">
      <Routes>
        <Route path="/" element={ <AuthPage/> } />
        <Route path="auth" element={ <AuthPage/> } />
        <Route path="home" element={ <HomePage/> } />
      </Routes>
      </main>
    </>
  )
}

export default App
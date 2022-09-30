import { Routes, Route } from 'react-router-dom'

import Login from './components/Login'
import Challenge from './components/Challenges'

function App() {
    return (
        <>
        <h1 className='title has-text-centered'>Improvement Club</h1>
        <main className='section'>
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/challenge' element={<Challenge />}/>
        </Routes>
        </main>
        </>
    )
}

export default App
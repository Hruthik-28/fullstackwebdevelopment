import './App.css'
import Auth from './Components/Auth/Auth'
import Header from './Components/Header/Header'

function App() {
    return(
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 mt-20 border-gray-200 border-2">
            <Header />
            <Auth />
        </div>
    )
}

export default App
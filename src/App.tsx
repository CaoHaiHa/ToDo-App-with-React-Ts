import Header from './components/Header'
import ManageTask from './components/ManageTask'

const App = () => {

  return (
    <div className="app-container">
      <div className='header'>
        <Header />
      </div>
      <div className='body'>
        <ManageTask />
      </div>
    </div>
  )
}

export default App

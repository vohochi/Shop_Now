import useRoutesElement from './useRoutesElement'
import { ToastContainer } from 'react-toastify'

const App = () => {
  const routeElements = useRoutesElement()
  return (
    <div>
      {routeElements}
      <ToastContainer />
    </div>
  )
}

export default App

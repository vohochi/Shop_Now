import useRoutesElement from './useRoutesElement'

const App = () => {
  const routeElements = useRoutesElement()
  return <div> {routeElements}</div>
}

export default App

import store from "./redux/store"
import PlayGridRoutes from "./routes/PlayGridRoutes"
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <PlayGridRoutes />
    </Provider>
  )
}

export default App

import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/Home'
import CreatePage from './pages/Create'

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage/>
      </Route>
      <Route exact path="/create">
        <CreatePage/>
      </Route>
    </Switch>
  );
}

export default App;

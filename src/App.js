import { Provider } from 'react-redux';

import AppContainer from './containers/App';
import configureStore from './config/store';

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;

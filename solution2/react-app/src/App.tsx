import React from 'react';
import 'antd/dist/antd.css';
import { Entries } from './pages/Entries';
import { Provider } from 'react-redux';
import { store } from './state/store';

function App () {
  return (
    <Provider store={store}>
      <Entries />
    </Provider>
  )
}

export default App;
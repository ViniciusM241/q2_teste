import React from "react";
import Layout from "./layout/Layout";
import store from "./boot/store";
import { Provider } from 'react-redux';

function App () {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;

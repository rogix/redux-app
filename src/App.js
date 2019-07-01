import React from "react";
import { Provider } from "react-redux";

import Video from "./components/Video";
import Sidebar from "./components/Sidebar";

import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Video />
        <Sidebar />
      </Provider>
    </div>
  );
}

export default App;

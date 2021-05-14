import {BrowserRouter as Router, Route} from 'react-router-dom'
import Join from "./components/Join/join"
import Chat from './components/chatbox/chat'
import React from 'react'
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Join}/>
        <Route path="/chat" component={Chat}/>
      </Router>
    </div>
  );
}

export default App;

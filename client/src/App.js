import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import SuggestionList from "./components/suggestion-list.component";
import EditSuggestion from "./components/edit-suggestion.component";
import CreateSuggestion from "./components/create-suggestion.component";
import CreateUser from "./components/create-user.component"

function App() {
  return (
    <Router>
    <div className="container">
      <Navbar/>
      <br/>
      <Route path="/" exact component={SuggestionList} />
      <Route path="/edit/:id" component={EditSuggestion} />
      <Route path="/create" component={CreateSuggestion} />
      <Route path="/user" component={CreateUser} />
    </div>
    </Router>
  );
}

export default App;

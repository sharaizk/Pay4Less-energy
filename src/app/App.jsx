import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

//Custom Components

import Home from "../pages/home";
import About from "../pages/about";

import Service from "../pages/service";
import Contact from "../pages/contact";
import Error from "../pages/404";
import LoadTop from "../components/ScrollTop/LoadTop";
import FAQ from "../pages/faq";
import Complaint from "../pages/complaint";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <LoadTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/service" exact component={Service} />
          <Route path="/contact" component={Contact} />
          <Route path="/faqs" component={FAQ} />
          <Route path="/complaint-handling-procedure" component={Complaint} />
          <Route component={Error} />
        </Switch>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </div>
  );
};

export default App;

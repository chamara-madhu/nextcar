import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DetailPage from "./pages/DetailPage";
import CreateAd from "./pages/CreateAd";

// admin
import AddMake from "./pages/admin/AddMake";
import ViewMake from "./pages/admin/ViewMake";
import AddModel from "./pages/admin/AddModel";
import ViewModel from "./pages/admin/ViewModel";
// import Shop from "./pages/Shop";

// // load isAuthenticated method
// import { isAuthenticated } from "./auth/auth";

// // create a private route for customers
// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       isAuthenticated() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//       )
//     }
//   />
// );

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/create-an-account" exact component={Register} />
        <Route path="/my-account/create-an-ad" exact component={CreateAd} />
        <Route path="/cars" exact component={Home} />

        <Route path="/admin/add-make" exact component={AddMake} />
        <Route path="/admin/manage-make" exact component={ViewMake} />
        <Route path="/admin/add-model" exact component={AddModel} />
        <Route path="/admin/manage-model" exact component={ViewModel} />
        {/* <Route path="/shop" exact component={Shop} /> */}
        <Route path="/:id" exact component={DetailPage} />
      </Switch>
    </Router>
  );
}

export default App;

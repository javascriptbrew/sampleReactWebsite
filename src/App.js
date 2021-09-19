import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./components/aboutus/AboutUs";
import Home from "./components/Home";
import MainLayout from "./layouts/MainLayout";
import "bootstrap/dist/css/bootstrap.min.css";

function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
  console.log({ ...rest }, "rest");
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
function App() {
  return (
    <>
      <Router>
        <Switch>
          <RouteWrapper exact path="/" component={Home} layout={MainLayout} />
          <RouteWrapper
            path="/aboutus"
            component={AboutUs}
            layout={MainLayout}
          />
          <RouteWrapper
            path="/contactus"
            component={AboutUs}
            layout={MainLayout}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;

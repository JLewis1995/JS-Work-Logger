import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import Landing from "./pages/Landing";
import LogIn from "./pages/LogIn";
import Nav from "./Nav";
import Register from "./pages/Register";
import CreateForm from "./pages/CreateForm";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import AllProfiles from "./pages/AllProfiles";
import Protected from "./components/Protected";
import Redirect from "./components/Redirect";
import SingleLog from "./pages/SingleLog"
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route path="/"
              element={
                <Redirect>
                  {<Landing />}
                </Redirect>
              }
            />
            <Route path="/login" element={<LogIn />} />
            <Route
              path="/profile"
              element={
                <Protected>
                  {" "}
                  <Profile />{" "}
                </Protected>
              }
            />
            <Route
              path="/allProfiles"
              element={
                <Protected>
                  {" "}
                  <AllProfiles />{" "}
                </Protected>
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/createform" element={<CreateForm />} />
            <Route path="*" element={<NotFound />} />
            <Route 
                path="/logs/:logId" 
                element={<SingleLog />}
              />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

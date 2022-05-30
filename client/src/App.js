import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Landing from './pages/Landing';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import CreateForm from './pages/CreateForm';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route 
              path="/" 
              element={<Landing />}
            />
            <Route 
              path="/login" 
              element={<LogIn />}
            />
            <Route 
              path="/profile" 
              element={<Profile />}
            />
             <Route 
              path="/register" 
              element={<Register />}
            />
             <Route 
              path="/createform" 
              element={<CreateForm />}
            />
            <Route 
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

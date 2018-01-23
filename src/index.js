import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {GRAPHQL_URL} from "./constants"

import {BrowserRouter as Router} from "react-router-dom";
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

const client = new ApolloClient({
    link: new HttpLink({uri: GRAPHQL_URL}),
    cache: new InMemoryCache()
});

const ApolloApp = () => <ApolloProvider client={client}>
    <Router>
        <App/>
    </Router>
</ApolloProvider>

ReactDOM.render(
    <ApolloApp/>, document.getElementById('root'));
registerServiceWorker();

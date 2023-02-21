import './App.css';
import Title from './components/layout/Title';
import 'antd/dist/reset.css';
import AddContact from './components/forms/AddContact';
import Contacts from './components/lists/Contacts';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <Title />
        <AddContact />
        <Contacts />
      </div>
    </ApolloProvider>
  );
};

export default App;

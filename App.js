import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './src/reducers';
import {Header} from './src/components/common';
import LibraryList from './src/components/LibraryList';

const App = () => {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{flex: 1}}>
        <Header name="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;

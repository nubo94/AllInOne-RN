import React from 'react';

// Custom Components
import {Screen} from '../molecules';
import ToDo from '../templates/ToDo';

function HomeScreen() {
  return (
    <Screen>
      <ToDo />
    </Screen>
  );
}

export default HomeScreen;

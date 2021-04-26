import React from 'react';

// HOC
import {withOrientation} from '../HOC';

// Custom Components
import {Screen} from '../molecules';
import ToDo from '../templates/ToDo';

function TODOScreen({orientation}: any) {
  return (
    <Screen>
      <ToDo orientation={orientation} />
    </Screen>
  );
}

export default withOrientation(TODOScreen);

import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';

require('../node_modules/semantic-ui/dist/semantic.min.css');
require('../node_modules/semantic-ui/dist/semantic.min');


render(
    <Root />,
    document.getElementById('root')
);

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Layout>
      <span>Hello world</span>
    </Layout>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

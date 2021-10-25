import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

App.PropTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;

/*
 - <Component/> 안에 index.js의 return코드가 해당된다.
 - _app.js는 pages들의 공통 부분이다.

*/

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import React from 'react';
 import { Amplify } from 'aws-amplify';
 import awsExports from './aws-exports';
Amplify.configure(awsExports);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
,rootElement

);

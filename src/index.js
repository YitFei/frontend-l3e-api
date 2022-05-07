import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import React from 'react';
import axios from 'axios';
import { Authenticator, View } from '@aws-amplify/ui-react';
 import { Amplify } from 'aws-amplify';
 import awsExports from './aws-exports';

Amplify.configure(awsExports);

const rootElement = document.getElementById("root");


ReactDOM.render(
  <BrowserRouter>
 <Authenticator.Provider>
<App/>
 </ Authenticator.Provider>
  </BrowserRouter>
,rootElement

);

import React from 'react';
import ReactDOM from 'react-dom';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync'
import AppSyncConfig from './aws-exports'
import { ApolloProvider } from 'react-apollo'

import App from './App';
import './index.css';

const client = new AWSAppSyncClient({
  disableOffline: true,
  url: AppSyncConfig.aws_appsync_graphqlEndpoint,
  region: AppSyncConfig.aws_appsync_region,
  auth: {
    type: AppSyncConfig.aws_appsync_authenticationType as AUTH_TYPE.API_KEY,
    apiKey: AppSyncConfig.aws_appsync_apiKey
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);

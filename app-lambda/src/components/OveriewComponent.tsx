import React from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { overview } from '../graphql/queries';
import { OverviewQuery } from 'src/API';

const OverviewComponent = () => {
  return (
    <Query<OverviewQuery, any> query={gql(overview)}>
      {({ data, loading})=>{
        if (
          loading ||
          !data ||
          !data.mostCommon ||
          !data.topremediations ||
          !data.topremediations.data ||
          !data.mostCommon.data
        ) {
          return null;
        }
        console.log(data);
        return <>
        </>
      }}
    </Query>
  )
}

export default OverviewComponent;
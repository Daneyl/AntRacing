//@flow
import Config from 'react-native-config';

const request = async (gql: string, variables: Object, type: 'query' | 'mutation') => {
  const req = await fetch(Config.GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      [type]: gql,
      variables,
    })
  });

  const response = await req.json();

  return response;
};

export const query = async (gql: string, variables: Object) => request(gql, variables, 'query');

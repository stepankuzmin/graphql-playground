import { gql } from 'apollo-boost';

export default gql`
  query Points($limit: Int) {
    points(limit: $limit) {
      gid
      geom
    }
  }
`;

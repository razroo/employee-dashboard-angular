import gql from 'graphql-tag';



export const EmployeeQuery = gql`
query getEmployees ($type: FeedType!, $offset: Intm = 0, $limit: Int;) {
    employees (type: $type, offset: $offset, limit: $limit) {
  
      Name
      Position
      Location
      Permission
      Action
      ReportTo
      }
    }
`;
import gql from 'graphql-tag';



export const EmployeeQuery = gql`
query getEmployees ( $start: Int, $limit: Int) {
    employees (start: $start, limit: $limit) {
  
      Name
      Position  
      Location
      Permission
      Action
      ReportTo
      }
    }
`;
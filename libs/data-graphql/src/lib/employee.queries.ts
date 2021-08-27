import gql from 'graphql-tag';

export const EmployeeQuery = gql`
query getEmployees ( $start: Int, $limit: Int, $sort: String, $where: JSON ) {
    employees (start: $start, limit: $limit, sort: $sort, where: $where) {
      Name
      Position
      Location
      Permission
      Action
      ReportTo
      }
    }
`;

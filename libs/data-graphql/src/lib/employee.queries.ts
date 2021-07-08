import gql from 'graphql-tag';



export const EmployeeQuery = gql`
query getEmployees{
    employees {
  
      Name
      Position
      Location
      Permission
      Action
      ReportTo
      }
    }
`;
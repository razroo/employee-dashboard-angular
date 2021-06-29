import gql from 'graphql-tag';



export const GetAllEmployees = gql`
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
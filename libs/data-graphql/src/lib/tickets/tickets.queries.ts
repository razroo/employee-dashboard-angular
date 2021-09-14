import gql from 'graphql-tag';

export const TicketsQuery = gql`
query getTickets ( $start: Int, $limit: Int, $sort: String, $where: JSON ) {
    tickets (start: $start, limit: $limit, sort: $sort, where: $where) {
      id
      employeeName
      projectName
      shortDescription
      ticketNumber
      ticketLink
      reporterName
      designLink
    }
  }
`;

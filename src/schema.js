import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    farmer: [Farmer]
    farmInfo: [FarmInfo]
  }

  type Farmer {
    id: ID!
    firstName: String
    lastName: String
    age: Int
  }

  type FarmInfo {
    name: String
    location: Location
  }

  type Location {
    country: String
    geoLocation: GeoLocation
  }

  type GeoLocation {
    latitude: Int
    longitude: Int
  }
`

module.exports = typeDefs

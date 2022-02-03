const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Booking {
    _id: ID
    bookedTimeSlots: String
    totalHours: Int
    totalAmount: Int
    transactionId: String
    driverRequired: Boolean
    user: User
    car: Car
  }

  type Car {
    _id: ID
    name: String
    image:String
    capacity:Int
    fuelType:String
    bookedTimeSlots:String
    rentPerHour:Int
  }

  type User {
    _id: ID
    userName: String
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    booking: [Booking]
    booking(car: ID, name: String): [Booking]
    car(_id: ID!): Car
    user: User
    booking(_id: ID!): Booking
  }

  type Mutation {
    addUser(userName: String!, password: String!): Auth
    addBooking(car: [ID]!): Booking
    updateUser(userName: String, password: String): User
    updateCar(_id: ID!, quantity: Int!): Car
    login(userName: String!, password: String!): Auth
    signup(userName: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

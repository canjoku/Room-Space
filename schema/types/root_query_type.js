const graphql = require('graphql');
const BookingQueryType = require('./booking_query_type');
const RoomQueryType = require('./room_query_type');
const UserQueryType = require('./user_query_type');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} = graphql;


const users = [
    {id: '33', firstName: 'Chiama', email: 'cniamak@newman.com', department: 'COCA'  },
    {id: '45', firstName: 'Dennis', email: 'dennis@newman.com', department: 'COCA'  },
    {id: '786', firstName: 'Chidi', email: 'chidi@nejdhan.com', department: 'COCA'  },
    {id: '378', firstName: 'Hola', email: 'hola@newman.com', department: 'COCA'  },
    {id: '83', firstName: 'Jide', email: 'jide@netheydan.com', department: 'PEPSI'  },
    {id: '13', firstName: 'Dreams', email: 'dreams@newman.com', department: 'COCA'  },
    {id: '33', firstName: 'Femi', email: 'femi@newman.com', department: 'COCA'  },
    {id: '303', firstName: 'Ola', email: 'ola@newman.com', department: 'PEPSI'  },
    {id: '3653', firstName: 'Akin', email: 'akin@newman.com', department: 'COCA'  }
];

const rooms = [
    {id: '402', size: 34, status: 'booked', roomNumber: 'FF-001', location: 'first floor' },
    {id: '4023', size: 34, status: 'booked', roomNumber: 'FF-002', location: 'first floor' },
    {id: '40945', size: 34, status: 'vacant', roomNumber: 'FF-003', location: 'first floor' },
    {id: '409985', size: 34, status: 'vacant', roomNumber: 'FF-004', location: 'first floor' },
    {id: '49', size: 34, status: 'booked', roomNumber: 'FF-005', location: 'first floor' },
    {id: '405539', size: 34, status: 'booked', roomNumber: 'SF-001', location: 'first floor' ,},
    {id: '402349', size: 34, status: 'booked', roomNumber: 'SF002', location: 'first floor' },
    {id: '408909', size: 34, status: 'vacant', roomNumber: 'SF003', location: 'first floor' },
    {id: '2099', size: 34, status: 'booked', roomNumber: 'SF004', location: 'first floor' },
    {id: '406879', size: 34, status: 'booked', roomNumber: 'FF005', location: 'first floor' },
    {id: '403469', size: 34, status: 'booked', roomNumber: 'FF001', location: 'first floor' },
    {id: '48909', size: 34, status: 'booked', roomNumber: 'FF002', location: 'first floor' },
    {id: '40579', size: 34, status: 'vacant', roomNumber: 'FF003', location: 'first floor' },
    {id: '435709', size: 34, status: 'booked', roomNumber: 'SF004', location: 'first floor' },
    {id: '446809', size: 34, status: 'booked', roomNumber: 'SF005', location: 'first floor'},
    {id: '40936', size: 34, status: 'vacant', roomNumber: 'FF001', location: 'first floor' },
    {id: '403659', size: 34, status: 'booked', roomNumber: 'FF002', location: 'first floor' },
    {id: '40369', size: 34, status: 'booked', roomNumber: 'FF003', location: 'first floor' },
    {id: '4036e9', size: 34, status: 'vacant', roomNumber: 'FF004', location: 'first floor' },
    {id: '40936', size: 34, status: 'booked', roomNumber: 'FF005', location: 'first floor' }
]

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserQueryType,
            args: {id: {type: GraphQLString}},
            resolve(parentValue, args) {
                return _.find(users, {id: args.id});
            }
        },
        room: {
            type: RoomQueryType,
            args: {id: {type: GraphQLString}},
            resolve(parentValue, args) {
                return _.find(rooms, {id: args.id})
            }
        },
        booking: {
            type: BookingQueryType,
            args: {id: {type: GraphQLString}},
            resolve(parentValue, args) {
                return _.find(bookings, {id: args.id})
            }
        }
    }
});



module.exports = RootQuery;
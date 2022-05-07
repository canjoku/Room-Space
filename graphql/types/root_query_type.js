const graphql = require('graphql');
const BookingQueryType = require('./booking_type');
const RoomQueryType = require('./room_type');
const UserQueryType = require('./user_type');
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
]

const bookings = [
    {id: "45", room: {id: '40945', size: 34, status: 'vacant', roomNumber: 'FF-003', location: 'first floor' }, user: {id: '83', firstName: 'Jide', email: 'jide@netheydan.com', department: 'PEPSI'  }, date: "03-04-2021", startTime: "12:00", endTime: "14:00" }
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
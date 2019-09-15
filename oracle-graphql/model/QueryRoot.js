const Employee = require('./Employee')
const Department = require('./Department')
const graphql = require('graphql')

const database = require('../services/database')
const joinMonster = require('join-monster').default
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} = graphql;
const QueryRoot = new GraphQLObjectType({
    description: 'global query object',
    name: 'RootQuery',
    fields: () => ({
      employee: {
        type: Employee,
        args: {
          id: {
            description: 'The employee\'s ID number',
            type: new GraphQLNonNull(GraphQLInt)
          }
        },
        where: (emp, args, context) => {
          return `${emp}."EMPLOYEE_ID" = :id`;
        },
        resolve: (parent, args, context, resolveInfo) => {
          return joinMonster(resolveInfo, context, sql => {
            console.log('joinMonster', sql);
            return database.simpleExecute(sql, args);
          });
        }
      },
      employees: {
        type: new GraphQLList(Employee),
        resolve: (parent, args, context, resolveInfo) => {
          return joinMonster(resolveInfo, context, sql => {
            console.log('joinMonster', sql);
            return database.simpleExecute(sql);
          });
        }
      }

    })
}
)

module.exports.QueryRoot = QueryRoot;
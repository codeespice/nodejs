const graphql = require('graphql')
const Department = require('./Department')
const{
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
}=graphql
const Employee = new GraphQLObjectType({
    desciption : 'An Employee of the company',
    name:'Employee',
    fields:()=>({
       id:{
           type: GraphQLInt,
           sqlColumn: 'EMPLOYEE_ID'
       },
       name:{
        type: GraphQLString,
        sqlColumn: 'FIRST_NAME'
       },
       jobId:{
        
            type: GraphQLString,
            sqlColumn: 'JOB_ID'
          
       },
    
       department: {
        type: Department,
        sqlJoin: (emp, dept) => `${emp}.DEPARTMENT_ID= ${dept}.DEPARTMENT_ID`
      }

    }) 
})

Employee._typeConfig={
    sqlTable:'EMPLOYEES',
    uniqueKey:'EMPLOYEE_ID'
}

module.exports=Employee
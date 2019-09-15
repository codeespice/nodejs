const graphql = require('graphql')
const{
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
}=graphql

const Department = new GraphQLObjectType({
    desciption : 'A department of the company',
    name:'Department',
    fields:()=>({
       id:{
           type: GraphQLInt,
           sqlColumn: 'DEPARTMENT_ID'
       },
       name:{
        type: GraphQLString,
        sqlColumn: 'DEPARTMENT_NAME'
       },
       location:{
        
            type: GraphQLInt,
            sqlColumn: 'LOCATION_ID'
          
       }

    }) 
})

Department._typeConfig={
    sqlTable:'DEPARTMENTS',
    uniqueKey:'DEPARTMENT_ID'
}

module.exports=Department
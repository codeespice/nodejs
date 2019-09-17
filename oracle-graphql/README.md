# nodejs
1. Modify services/database.js as shown below

const dbConfig = {
  user: 'USERNAME',
  password: 'PASSWORD',
  connectString : "localhost:1521/SID",
  poolMin: 10,
  poolMax: 10,
  poolIncrement: 0
}

2. npm install
3. node .
4. open browser , enter localhost:3031/graphql

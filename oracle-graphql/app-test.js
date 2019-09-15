var oracledb = require('oracledb');
var oracledb = require('oracledb');
oracledb.getConnection(
  {
    user          : "hr",
    password      : "oracle",
    connectString : "localhost/orcl"
  },
  function(err, connection)
  {
    if (err) { console.error(err); return; }
    connection.execute(
      "SELECT department_id, department_name "
    + "FROM departments "
    + "WHERE department_id < 70 "
    + "ORDER BY department_id",
      function(err, result)
      {
        if (err) { console.error(err); return; }
        console.log(result.rows);
      });
  });
const express = require('express');
var cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

let port = process.env.PORT || 3000;

app.post('/signup', (req, res) => {
  var signup_details = req.body;

  res.statusCode = 200;
  return res.send({
    "message": "Account successfully created",
    "user": {
      "user_id": signup_details.user_id,
      "nickname": signup_details.user_id
    }
  })
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));



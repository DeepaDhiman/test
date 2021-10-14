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


app.get('/users/:user_id', (req, res) => {
  // plain-text string
  const str = 'TaroYamada';
  // create a buffer
  const buff = Buffer.from(str, 'utf-8');
  // decode buffer as Base64
  const base64 = buff.toString('base64');
  // print Base64 string
  console.log(base64);


  // create a buffer
  const buff1 = Buffer.from(base64, 'base64');

  // decode buffer as UTF-8
  const str1 = buff1.toString('utf-8');

  if (str1 == "TaroYamada" && req.params.user_id == "TaroYamada") {
    res.statusCode = 200;
    return res.send({
      "message": "User details by user_id",
      "user": {
        "user_id": "TaroYamada",
        "nickname": "Taro",
        "comment": "I’m happy."
      }
    })
  } else if (str1 == "TaroYamada" && req.params.user_id != "TaroYamada"){
    res.statusCode = 404;
    return res.send({
      "message": "No User found"
    })
  } else {
    res.statusCode = 401;
    return res.send({
      "message": "Authentication Faild"
    })
  }
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));



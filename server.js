const path = require("path");
const express = require("express");
const history = require("connect-history-api-fallback");
const  compression = require('compression');
const options = {
    maxAge: 1200000
};
const app = express();
app.use(compression());// 这个插件是用来选择dist里面的gz文件的,不加这个选择的是js文件
app.use(history());// 这个history必须放在express.static上面,不然history会失效

app.use('/', express.static(path.join(__dirname, "/dist"), options));

app.get("/", function(req, res) {
  res.sendFile(path.resolve(__dirname, "dist/index.html"), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  });
});

// server.use(express.static('dist'));
// server.use('/', express.static(__dirname, '/dist'));

// server.get('/d', (req, res) => {
//   res.sendFile(path.join(__dirname,'/dist/index.html'));
// });

app.listen(3456, () => {
  console.log("the server is listening at 3456 !");
});

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 5000,function () {
    console.log('Example app listening on port 5000!');
});

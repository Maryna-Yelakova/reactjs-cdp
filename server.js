const express = require('express');
const app = express();
import { store } from './src/core/store/rootReducer.tsx';

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  const context = {};
  const content = render(req.path, store, context);

  res.send(content);
});


app.listen(process.env.PORT || 5000,function () {
    console.log('Example app listening on port 5000!');
});

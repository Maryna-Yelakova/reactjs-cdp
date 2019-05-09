const express = require('express');
const app = express();
// import  store  from './src/core/store/rootReducer.tsx';
// import matchRoutes  from 'react-router-config';
// import render from './render';
// import Routes from './src/router/routes';

app.use(express.static(__dirname + '/dist'));

// app.get('*', async (req, res) => {
//
//
//   const actions = matchRoutes(Routes, req.path)
//     .map(({ route }) => route.component.fetching ? route.component.fetching({...store, path: req.path }) : null)
//     .map(async actions => await Promise.all(
//       (actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch(resolve)))
//       )
//     );
//
//   await  Promise.all(actions);
//   const context = {};
//   const content = render(req.path, store, context);
//
//   res.send(content);
// });


app.listen(process.env.PORT || 5000,function () {
    console.log('Example app listening on port 5000!');
});

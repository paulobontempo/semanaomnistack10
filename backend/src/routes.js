const { Router } = require('express');

const routes = Router();


routes.post('/devs', (request, response) => {
  console.log(request.body);
  return response.json({ message: 'hello Bontempo'});
});

module.exports = routes;
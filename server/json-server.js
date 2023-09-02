const jsonServer = require('json-server');
const utils = require('./utils');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const PORT = 3000;
const localhostUrl = `http://localhost:${PORT}`;

server.get('/', (req, res) => {
  const data = {
    status: 'UP',
    message: 'Please use following endpoints',
    data: [
      {
        useCase: 'Get all hotels',
        url: `${localhostUrl}/v1/hotels`
      },
      {
        useCase: 'Get hotel by Id',
        url: `${localhostUrl}/v1/hotel/:id`
      },
      {
        useCase: 'Get by hotel Id - Category wise Objects',
        url: `${localhostUrl}/v2/hotel/:id`
      }
    ]
  };

  res.json(data);
});

// avoid these routes (missed out on adding version support) ----------------------------------

// Add a custom route for /hotels
// @deprecated
server.get('/hotels', utils.getAllHotels);

// Fetch based on id
// @deprecated
server.get('/hotel/:id', utils.getHotelById);
// -------------------------------------------------------------------------------------------

// Get all - v1
server.get('/v1/hotels', utils.getAllHotels);

// Fetch based on id - v1:returns a combined foodItem list with category as object key inside each foodItem
server.get('/v1/hotel/:id', utils.getHotelById);

// Fetch based on id - v2:returns a category->foodItem object map
server.get('/v2/hotel/:id', utils.getHotelByIdWithCategory);

const router = jsonServer.router({});

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`Mock JSON Server is running on port ${PORT}`);
});

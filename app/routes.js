module.exports = function(app) {

  // server ruotes

  app.get('/api/hotels', function(req, res) {

    Hotel.find( function(err, hotels) {
      if (err)
        res.send(err);

      res.json(hotels);
    });
  });

  // save api
  app.post('/api/addHotel', function(req, res) {

  });

  // frontend routes
  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });
}

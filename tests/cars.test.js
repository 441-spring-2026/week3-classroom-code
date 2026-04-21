const request = require("supertest");
const app = require('../app.js')

describe('GET /cars', function() {
  it('requires params', function(done) {
    request(app)
      .get('/cars')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422, done);
  });
});
// all the cases:
// 1. post /cars missing any one of name, mpg, weight, origin, year expect 422
// 2. post /cars with all that, expect 201 with returned data including an id field
// 3. get /cars without id, expect 422
// 4. get /cars with id, expect 200 with returned data including id and other important fields
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app/app'); // Import your Express app

chai.use(chaiHttp);
const expect = chai.expect;

describe('Categories API Tests', () => {
    it('should return all categories successfully', (done) => {
        chai.request(app)
            .get('/category/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                expect(res.body.length).equals(10);
                done();
            });
    });

    it('should return filtered categories successfully', (done) => {
        chai.request(app)
            .get('/category/8')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                expect(res.body.length).equals(3);
                done();
            });
    });

    it('category not found input - should return error', (done) => {
        chai.request(app)
            .get('/category/44')
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body).not.to.be.an('array');
                expect(res.body.errorCode).equals(21);
                done();
            });
    });

    it('invalid input - should return error', (done) => {
        chai.request(app)
            .get('/category/x')
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body).not.to.be.an('array');
                done();
            });
    });
});

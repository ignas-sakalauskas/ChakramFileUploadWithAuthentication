var chakram = require('chakram'),
    expect = chakram.expect,
    fs = require('fs');

var apiEndpoint = 'http://localhost:5000/api/values';
var requestObject = {
    'formData': {
        'file': fs.createReadStream('./package.json'),
    },
    'headers': {
        'Authorization': 'auth_key'
    }
}

describe("Chakram File Upload Tests", function () {
    it("should upload file to API using authorization header", function () {
        return chakram
            .post(apiEndpoint, undefined, requestObject)
            .then(function (res) {
                expect(res).to.have.status(200);
                expect(res.body).to.be.equal('package.json');
            });
    });
});


/**
 * MobileController
 *
 * @description :: Server-side logic for managing Mobiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var fs = require('fs');
var path = require('path');

var policyFixtureData = null;

module.exports = {
	_config: {
        model: "mobile",
        actions: true,
        shortcuts: true,
        rest: true
    },
    
    policy:function(req, res){
        if (policyFixtureData == null){
            
            var pathToFile = path.join(__dirname, "..", "..", "test", "fixtures", "Policy.json");
            fs.readFile(pathToFile, {encoding:'utf8'}, function(err, data){ 
                
                if (err) {
                    res.serverError(err);
                } else {
                    policyFixtureData = JSON.parse(data);
                    res.json(policyFixtureData);
                }
            })
            
        } else {
            res.send(policyFixtureData);
        }
    }
};


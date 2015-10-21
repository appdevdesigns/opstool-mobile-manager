
module.exports = {


	config:function(module) {

		var config = {};

		if (sails.config[module]) {
            
                config.url = sails.config[module].url;
                config.method = sails.config[module].method;
        }

        return config;
	}



}
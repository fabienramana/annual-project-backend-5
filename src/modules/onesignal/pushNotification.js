  const config = require('config')
  
  module.exports = (typeProduit) => {
    console.log("app id " + config.get('one_signal_app_id'))
    console.log("app id " + config.get('one_signal_api_key'))
    var message = { 
      app_id: config.get('one_signal_app_id'),
      contents: {"en": `Vous pouvez désormais acheter/vendre des ${typeProduit} sur Green Repack !`},
      included_segments: ["Subscribed Users"]
    };

    var headers = {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": `Basic ${config.get('one_signal_api_key')}`
    };
    
    var options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers: headers
    };
    
    var https = require('https');
    var req = https.request(options, function(res) {  
      res.on('data', function(data) {
        console.log("Response:");
        console.log(JSON.parse(data));
      });
    });
    
    req.on('error', function(e) {
      console.log("ERROR:");
      console.log(e);
    });
    
    req.write(JSON.stringify(message));
    req.end();
  }
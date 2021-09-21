  module.exports = (typeProduit) => {
    var message = { 
      app_id: "c1502e68-2f67-4e54-8fcd-a0a44b22b291",
      contents: {"en": `Vous pouvez désormais acheter/vendre des ${typeProduit} sur Green Repack !`},
      included_segments: ["Subscribed Users"]
    };

    var headers = {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Basic MTdhNzk3ZDctNjM0OC00ZDAzLTliNzMtZmMxYWI0ZDExZjFj"
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
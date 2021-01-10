// Dependencies
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');

// Simple HTTP server
http.createServer(function (req,res)
{
  // file upload url
  if (req.url == '/fileupload') {

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {

      var oldpath = files.filetoupload.path;
      //console.log(oldpath);

      var newpath = path.join("upload/"+files.filetoupload.name);
      //console.log(newpath);

      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved! You can close this window.');
        res.end();
      });
    });
  } else {

    // read the index.html file
    fs.readFile('index.html',function(err,data) {

      res.writeHead(200,{'Content-Type':'text/html'});
      if(err) throw err;
      console.log("Read successful!");

      // render file to response
      res.write(data);
      res.end();

    });
  }  
}).listen(8080); 

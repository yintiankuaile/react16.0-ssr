let express=require('express');
let app=express();
import React from 'react';
import {renderToString,renderToStaticMarkup} from 'react-dom/server';
import HomePage from '../src/components/homepage/index.js';
var server=app.listen(8080,()=>{
  var host=server.address().address;
  var port=server.address().port;
  console.log('server is start at',host,port);
});
//static
app.use('/dist',express.static('dist'));
app.get('/',(req,res)=>{
  res.write('<!DOCTYPE html><html><head><title>Hello HomePage</title></head><body>');
  res.write('<div id="app">');
  res.write(renderToString(<HomePage/>));
  res.write('</div></body>');
  res.write('<script type="text/javascript" src="../dist/vendor.bundle.js"></script><script type="text/javascript" src="../dist/js/app.js"></script>');
  res.write('</html>');
})

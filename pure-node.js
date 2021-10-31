const http = require('http');

const server = http.createServer((request, response) => {
  let body = [];
  // console.log(request); huge object;
  // console.log(request.method, request.url);
  request.on('data', chunk => {
    body.push(chunk);
  });
  request.on('end', () => {
    body = Buffer.concat(body).toString();
    // console.log('body-->', body);
    let userName = 'Unknown User';
    if (body) {
      userName = body.split('=')[1];
    }
    response.setHeader('Content-Type', 'text/html');
    response.write(
      `<h1>Hi ${userName}</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>`
    );
    response.end();
  });
});

//   response.setHeader('Content-Type', 'text/html');
//   response.write(
//     '<form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>'
//   );
//   response.end();
// });

server.listen(3000);

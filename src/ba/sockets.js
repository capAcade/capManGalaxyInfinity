import expressWs from 'express-ws'

export default (app) => {
  expressWs(app);
  app.ws('/', function (ws, req) {
    ws.on('message', function (msg) {
      console.log(msg);
    });
    console.log('socket');
  });
};

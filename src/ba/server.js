import express from 'express';
import {resolve} from 'path';

import sockets from './sockets';
import routes from './routes';

const serverConfig = {
  port: 8081,
  static: resolve(__dirname, 'public'),
};

const app = express();

// Static file serve
app.use('/', express.static(serverConfig.static));

// Websockets
// sockets(app);

app.use(routes);

const port = serverConfig.port || 8080;
app.listen(port, () => console.log(`WebApp + RESTAPI listening on port ${port}!`.green));

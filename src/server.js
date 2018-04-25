import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './client/App';
import Html from './client/Html';
import { ServerStyleSheet } from 'styled-components';

const port = 3003;
const server = express();

server.set('json spaces', 4);

server.get('/', (req, res) => {
  const sheet = new ServerStyleSheet();
  const body = renderToString(sheet.collectStyles(<App />));
  const styles = sheet.getStyleTags();
  const title = 'Server side Rendering with Styled Components';

  res.send(
    Html({
      body,
      styles,
      title
    })
  );
});

server.get('/json', (req, res) => {
  console.log(req.body, req.headers)
  res.json(
    {
      data: 'Here is JSON reply',
    }
  )
})

server.post('/json', (req, res) => {
  console.log(req.body, req.headers)
  res.json(
    {
      data: 'You posted, so I returned JSON',
    }
  )
})

server.listen(port);
console.log(`Serving at http://localhost:${port}`);

import express from 'express';
import faunadb from 'faunadb';
import { TerminalColors } from './terminal-colors';

const app = express();

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`API on http://localhost:${PORT}`);
  const hasKeys = !!process.env.FAUNA_KEY;
  console.log(
    hasKeys
      ? TerminalColors.FgGreen + 'Keys are good'
      : TerminalColors.FgRed + TerminalColors.Reverse + 'KEYS ARE BAD'
  );
  console.log(TerminalColors.Reset);
});

const fauna = new faunadb.Client({ secret: process.env.FAUNA_KEY! });

const {
  Paginate,
  Get,
  Ref,
  Select,
  Match,
  Index,
  Create,
  Collection,
  Lambda,
  Var,
  Join,
} = faunadb.query;

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Pickles</title>
    </head>
    <body>
    Hello world
    </body>
  </html
  `);
});

app.get('/recipes', async (req, res) => {
  const doc = await fauna
    .query(
      // prettier-ignore
      Get(
        Ref(
          Collection('recipes'), req.query.name
        )
      )
    )
    .catch((err) => res.send(err));

  if (!res.headersSent) {
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(doc, undefined, 4));
  }
});

app.get('/recipes/:id', async (req, res) => {
  const doc = await fauna
    .query(
      // prettier-ignore
      Get(
        Ref(
          Collection('recipes'), req.params.id
        )
      )
    )
    .catch((err) => res.send(err));

  if (!res.headersSent) {
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(doc, undefined, 4));
  }
});

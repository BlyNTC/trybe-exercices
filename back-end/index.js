const express = require('express');

const bodyParser = require('body-parser');

const app = express(); // 1

const simpsonsUtils = require('./utils');

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.json({"message": "pong"})
})


app.post('/hello', (req, res) => {
  const { name } = req.body
  res.json({ "message": `Hello, ${name}!` })
})

app.post('/greetings', (req, res) => {
  const { name, age } = req.body
  if(age > 17)return  res.json({ "message": `Hello, ${name}!` })
  res.json({ "message": "Unauthorized" })
})

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params
  res.json({ "message": "Seu nome é"+ name+" e você tem "+age+" anos de idade" })
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3

app.get('/simpsons', async (_req, res) => {
  const simpsons = await simpsonsUtils.getSimpsons();
  res.status(200).json(simpsons)
})

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  const simpsons = (await simpsonsUtils.getSimpsons()).find(elem => elem.id === id);
  if(simpsons) return res.status(200).json(simpsons)
  res.json({ "message": "simpson not found" })
})

app.post('/simpsons', async (req, res) => {
  const simpsons = await simpsonsUtils.getSimpsons();
  const { name, id } = req.body
  if(simpsons.some(pers => pers.id === id)) res.status(404).json({ "message": "id already exists" })
  simpsons.push({ id: id, name})
  await simpsonsUtils.addSimpsons(simpsons)
  res.status(204).end();
})
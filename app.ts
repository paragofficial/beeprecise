import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

const pets = [
  {
    name: 'PNut',
    age: 1,
  },
  {
    name: 'Bashi',
    age: 2,
  },
  {
    name: 'Charlie',
    age: 3,
  },
  {
    name: 'Buddy',
    age: 4,
  },
  {
    name: 'Milo',
    age: 5,
  },
  {
    name: 'Rocky',
    age: 6,
  },
  {
    name: 'Molly',
    age: 7,
  },
  {
    name: 'Scout',
    age: 8,
  },
  {
    name: 'Bruno',
    age: 9,
  },
  
];

app.get('/pets', (req: Request, res: Response) => {
  const { sort } = req.query;
  let sortedPets = [...pets];

  if (sort === 'ASC') {
    sortedPets.sort((a, b) => a.age - b.age);
  } else if (sort === 'DESC') {
    sortedPets.sort((a, b) => b.age - a.age);
  }

  res.json(sortedPets);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

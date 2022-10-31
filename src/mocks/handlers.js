const { rest } = require('msw');

export const handlers = [
  rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: 'Vanilla',
          imagePath: '/images/vanilla.png'
        },
        {
          name: 'Chocolate',
          imagePath: '/images/chocolate.png'
        }
      ])
    );
  }),
  rest.get('http://localhost:3030/notscoops', (req, res, ctx) => {
    return res(ctx.json([]));
  })
];

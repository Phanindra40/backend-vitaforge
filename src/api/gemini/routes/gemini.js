// /src/api/gemini/routes/gemini.js

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/gemini/generate',
      handler: 'gemini.generate',
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
};

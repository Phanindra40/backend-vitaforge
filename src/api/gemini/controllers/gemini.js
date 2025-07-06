'use strict';
const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

module.exports = {
  async generate(ctx) {
    try {
      const { prompt } = ctx.request.body;

      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' }); // FIXED HERE

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      ctx.send({ response: text }); // Matches frontend expectation
    } catch (err) {
      console.error("Gemini generation failed:", err);
      ctx.status = 500;
      ctx.body = { error: "Failed to generate with Gemini" };
    }
  },
};

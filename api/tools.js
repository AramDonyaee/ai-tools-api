const express = require('express');
const app = express();

const toolsData = {
  chat: [
    { name: 'ChatGPT', desc: 'Latest conversational AI by OpenAI', link: 'https://chat.openai.com/' },
    { name: 'Gemini', desc: 'Google’s cutting-edge AI model', link: 'https://gemini.google.com/' },
    { name: 'Grok', desc: 'xAI’s truth-seeking AI', link: 'https://x.ai/' }
  ],
  writing: [
    { name: 'Grammarly', desc: 'AI-powered writing assistant', link: 'https://www.grammarly.com/' },
    { name: 'Jasper', desc: 'Content creation with AI', link: 'https://www.jasper.ai/' }
  ],
  image: [
    { name: 'DALL·E 3', desc: 'Advanced image generation', link: 'https://openai.com/dall-e-3' },
    { name: 'Midjourney', desc: 'Stunning AI art', link: 'https://www.midjourney.com/' }
  ]
};

app.get('/tools', (req, res) => {
  res.json(toolsData);
});

module.exports = app;
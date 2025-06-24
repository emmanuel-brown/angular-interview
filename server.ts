import express from 'express';
import path from 'path';
const app = express();

const distPath = path.join(__dirname, 'dist/YOUR_PROJECT_NAME');

app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const port = process.env.PORT || 4200;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

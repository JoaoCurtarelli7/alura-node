import App from './src/App.js'

const port = process.env.PORT || 3000;

App.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
})

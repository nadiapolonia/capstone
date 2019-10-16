const development = {
  API_URL: 'https://localhost:5001',
  env: process.env.NODE_ENV
}

const production = {
  API_URL: 'https://tranquil-health.herokuapp.com/',
  env: process.env.NODE_ENV
}

const config = {
  development,
  production
}

export default config[process.env.NODE_ENV || 'development']

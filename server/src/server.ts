import express from 'express'

const app = express();

app.get('/dev', (request, response) => {
 console.log('list users')

 response.json([
     'test_1',
     'test_2',
     'test_3'
 ])
})

app.listen(3333)
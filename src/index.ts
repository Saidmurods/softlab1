import * as express from 'express';
// import userRoutes from './routes/userRoutes'

const app = express();

app.get('/', (a,b) => {
    b.json({"success": true});
})

const port = 3000;

app.listen(port, () => {
    console.log('server is running at port : ' + port);
    
})
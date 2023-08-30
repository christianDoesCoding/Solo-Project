import express from 'express';
import path from 'path';
import router from './router';
import apiRoutes from './routes';  // Assuming you have a default export in your 'routes' file
// import profileModel from './profileModel'; // Uncomment if you use it later

const app = express();
const port = process.env.PORT || 3000; 

app.use(express.json());
app.use('/', router);

//Routes
app.use('/api', router);

//global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler - unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
const errorObj = { ...defaultErr,...err };
console.log(errorObj.log);
return res.status(errorObj.status).json(errorObj.message);
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
import express from 'express';
import axios from 'axios'
import path from 'path';
import cors from 'cors'
const app = express();
const port = process.env.PORT || 3000; //if PORT environment exist, use that port... otherwise, use ____ (environment variable)


app.use(
    cors({
        origin: "http://localhost:3000",
    }));
app.use(express.json());
//app.use('/', router);

app.get('/api:targetURL', async (req, res) => {//req.body, req.params, req.query
    //window.open(passed-in URL)
    console.log('GET /proxy')
    try {
        console.log('this is req.params...', req.params);
        console.log('this is req.query...', req.query);
        const targetURL = req.query.targetURL;
        console.log(req.query)
        const response = await axios.get(targetURL);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred :(' });
    }
});


//Routes
//app.use('/api', router);

//add 404 error handler


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
    console.log(`Server is running on port ${port} 👌👌👌`);
});
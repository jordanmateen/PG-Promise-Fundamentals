//imports
const express = require('express');
const DBFactory = require('./utils/dbUtils')

const app = express()
const PORT = 2340

const apiResponse = (res, dataToSend) => {
    return res.send(dataToSend)
}

app.get('/', async (req, res, next) => {
    let resObject;
    try{
        const dbFactory = new DBFactory()
        const result = await dbFactory.all()
        resObject = {
            result,
            meta:{
                success: true,
                request: req.route
            }
        }
        apiResponse(res, resObject)
    }catch(error){
        resObject = {
            status: {
                success: false,
                error
            },
            msg: "There was an error with the query or the table does not exist",
            method: req.route.stack[0].method
        };
        next(error)
        apiResponse(res,resObject)
    }   
})
app.listen(PORT)

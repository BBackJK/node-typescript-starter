import { Request, Response } from 'express';

export default ( (req : Request, res : Response ) => {
    console.log(req.body);
    res.status(200).json(req.body);
});

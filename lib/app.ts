import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as compression from 'compression';

import { Routes } from './routes/endpoints'; 

class App {
    public app : express.Application;
    public router : Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.router.routes(this.app);
    }

    private config() : void {
        this.app.use(
            bodyParser.json(),
            bodyParser.urlencoded({ extended : true }),
            cors(),
            compression()
        );
    }
}

export default new App().app;

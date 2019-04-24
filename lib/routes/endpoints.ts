import getTest from './test/getTest';
import postTest from './test/postTest';

export class Routes {

    public routes(app): void {

        app.route('/get-test').get(getTest);
        app.route('/post-test').post(postTest);
    }
}

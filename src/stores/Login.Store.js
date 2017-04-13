import Reflux from 'reflux'

import {Actions} from './../actions/Login.Actions'

class LoginStore extends Reflux.Store {
    constructor() {
        super();
        this.state = {
            loggedIn: false
        };
        this.listenToMany(Actions);
    }

    logIn() {
        this.state.loggedIn = true;
        this.setState(this.state);
    }

    logOut() {
        this.state.loggedIn = false;
        this.setState(this.state);
    }
}

export default LoginStore
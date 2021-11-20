class Auth {
    constructor() { 
        this.autenticated = false
    }

    logIn(cb){
        this.autenticated = true
        cb()
    }


    logOut(cb){
        this.autenticated = false
        cb()
    }

    isAutenticated() {
        return this.autenticated
    }
}

export default new Auth()
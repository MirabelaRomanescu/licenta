import firebaseApp from "./config"

export const handleLogin = async (data) => {
    const { email, password } = data;
    const user = await firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => Object.assign({}, { id: res.user.uid, error: false }))
        .catch(err => Object.assign({}, { error: true, message: err.message }))
    console.log(user);
    if (user.error) {
        localStorage.setItem("error", 1)
        localStorage.setItem("errorMessage", user.message)
    } else {
        localStorage.setItem("id", user.id);
        localStorage.setItem("error", 0);
    }

    return user
}

export const handleRegister = async (data) => {
    const { email, password } = data;
    const result = await firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => Object.assign({}, { email: res.user.email, id: res.user.uid, error: false }))
        .catch(err => Object.assign({}, { error: true, message: err.message }))

    if (result.error) {
        localStorage.setItem("error", 1)
        localStorage.setItem("errorMessage", result.message)
    } else {
        localStorage.setItem("id", result.id);
        localStorage.setItem("error", 0);
    }

    return result
}
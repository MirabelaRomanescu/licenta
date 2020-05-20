import firebaseApp from "./config";

export const handleLogin = async (data) => {
  const { email, password } = data;
  const user = await firebaseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      localStorage.setItem("id", res.user.uid);
      localStorage.setItem("user", res.user.email);
      localStorage.setItem("error", 0);
      return Object.assign(
        {},
        { email: res.user.email, id: res.user.uid, error: false }
      );
    })
    .catch((err) => {
      localStorage.setItem("error", 1);
      localStorage.setItem("errorMessage", err.message);
      return Object.assign({}, { error: true, message: err.message });
    });
  return user;
};

export const handleRegister = async (data) => {
  const { email, password } = data;
  const result = await firebaseApp
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      localStorage.setItem("id", res.user.uid);
      localStorage.setItem("user", res.user.email);
      localStorage.setItem("error", 0);
      return Object.assign(
        {},
        { email: res.user.email, id: res.user.uid, error: false }
      );
    })
    .catch((err) => {
      localStorage.setItem("error", 1);
      localStorage.setItem("errorMessage", result.message);
      return Object.assign({}, { error: true, message: err.message });
    });

  return result;
};

export const handleSignOut = async () => {
  const response = await firebaseApp
    .auth()
    .signOut()
    .then((res) => {
      localStorage.clear();
      return res;
    })
    .catch((err) => {
      localStorage.setItem("error", 1);
      localStorage.setItem("errorMessage", err.message);
      return Object.assign({}, { error: true, message: err.message });
    });

  return response;
};

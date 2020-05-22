import firebaseApp from "./config";
import database from "firebase/database"
import { formatAlimentatieData, formatParametrii } from "../helper";
import firebase from "firebase/app";

export const handleLogin = async (data) => {
  const { email, password } = data;
  const user = await firebaseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res);
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

export const handleLoginWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const user = await firebaseApp
    .auth()
    .signInWithPopup(provider)
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
}

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

export const addToDatabase = async (typeData, data) => {
  const response = await firebaseApp.database().ref().child(typeData).push(data)
    .then(res => res)
    .catch(err => err);
  return (response)
}

export const readFromDatabase = async (typedata) => {
  const response = await firebaseApp.database().ref().child(typedata).once("value")
    .then(snap => snap.val())
    .catch(err => err)
  return formatAlimentatieData(response);
}

export const addUserdata = async (data, typedata) => {
  const id = localStorage.getItem("id");
  const updates = {};
  updates[`/profile/${typedata}/${id}`] = data;
  await firebaseApp.database().ref().update(updates)
    .then(res => res)
    .catch(err => console.log(err));
}

export const readUserdata = async (typeData) => {
  const id = localStorage.getItem("id");
  const res = firebaseApp.database().ref()
    .child("profile").child(typeData)
    .child(id).once("value")
    .then(snap => snap.val())
    .catch(err => err);
  return res
}
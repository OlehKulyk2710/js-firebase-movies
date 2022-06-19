import { usersData } from '../index';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { LocStorage } from './local-storage';
import { LocStorageMovies, convertDataFromFrbToLs } from './locstr-movies';

// -------------------------------------
const URL =
  'https://filmoteka-project2-default-rtdb.europe-west1.firebasedatabase.app';
const API = 'AIzaSyB6zHPU06WTT-Wfbp-gtmlww2BBH4EyQx0';
const folder = 'library-test';
// const folder = 'library_olehkul@ukr_net';

export function getDatafromFirebase() {
  const userDtbName = getUserDtbName();
  if (!userDtbName) {
    return;
  }
  fetch(`${URL}/${userDtbName}.json`)
    .then(response => response.json())
    .then(data => {
      if (!data) {
        Notify.failure('Your database is EMPTY. Push the POST data button.');
        LocStorageMovies.clearMoviesLists();
        return;
      }
      const convertedData = convertDataFromFrbToLs(data);
      LocStorageMovies.setItem(convertedData);

      Notify.success('Your database is UPDATED');
    });
}

export function postDataToFirebase(data) {
  const userDtbName = getUserDtbName();
  if (!userDtbName) {
    return;
  }
  fetch(`${URL}/${userDtbName}.json`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    if (!response.ok) {
      Notify.failure("Can't update your database. Try again.");
      return;
    }

    Notify.success('Your database is updated. Push the GET data button.');
  });
}

export function removeDataFromDb(id) {
  const userDtbName = getUserDtbName();
  if (!userDtbName) {
    return;
  }
  fetch(`${URL}/${userDtbName}/${id}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function clearDtbFirebase() {
  const userDtbName = getUserDtbName();
  if (!userDtbName) {
    return;
  }
  fetch(`${URL}/${userDtbName}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    if (response.ok) {
      Notify.success('Your database has been cleared.');
      return;
    }
  });
}

// DATBASE -------------------

export function createUserDtbName(currentUserData) {
  const { name, uid } = currentUserData;
  const dbName = `${name}_${uid.slice(0, 9)}`;
  return { ...currentUserData, dbName };
}

function getUserDtbName() {
  const userData = LocStorage.getItem();
  if (!userData || !userData.dbName) {
    Notify.failure(
      'You are not authorized. Please sign in to your account or register.'
    );
    return null;
  }

  return userData.dbName;
}

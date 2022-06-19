import './js/base';
import './js/local-storage';
import './js/firebase';

import { refs, defaultUserData, getOneMovieDetails } from './js/base';
import { LocStorage } from './js/local-storage';
// import { openModal } from './js/modal';
import { getUserProfile, signOutOfFirebase } from './js/firebase';
import {
  getDatafromFirebase,
  postDataToFirebase,
  clearDtbFirebase,
} from './js/firebase-db';

// -----------------------------------
import { LocStorageMovies, checkMovieInLs } from './js/locstr-movies';
import { renderMoviesList } from './js/render-list';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { checkUserAuthState, checkAuthUser } from './js/auth-state';
import { getMovieId } from './js/base';
import { removeDataFromDb } from './js/firebase-db';

// -----------------------------------

// alert(
//   'Hi there! After you see the contents of the web page, please open DevTools/Console.'
// );

checkUserAuthState();

const attempt = {
  name: 'Poppy',
  email: 'test@ukr.net',
  accessId: '',
};

// LocStorage.setItem(attempt);
// checkUserAuthState();

// LocStorage.removeItem();
// checkUserAuthState();

// refs.authLine.addEventListener('click', onAuthLineClick);

export const usersData = {
  name: 'Pupkin',
  age: 100500,
};
// let counterId = 0;

// refs.form.addEventListener('submit', onFormSubmit);

refs.btnGetUserProfile.addEventListener('click', onBtnGetUserProfile);
refs.btnSignOutExtra.addEventListener('click', onBtnSignOutExtra);
refs.btnGet.addEventListener('click', onBtnGetClick);
refs.btnPost.addEventListener('click', onBtnPostClick);
refs.btnClear.addEventListener('click', onBtnClearClick);

function onBtnGetUserProfile() {
  console.log('GET userProfile');
  getUserProfile();
}

function onBtnSignOutExtra() {
  signOutOfFirebase();
  console.log('User state');
}

function onBtnGetClick() {
  console.log('GET');
  getDatafromFirebase();
}

function onBtnPostClick() {
  console.log('POST');
  postDataToFirebase();
}

function onBtnClearClick() {
  console.log('Clear');
  clearDtbFirebase();
}

// -----------------------------------------

refs.btnAddToQueue.addEventListener('click', onAddBtn);
refs.btnAddToWatched.addEventListener('click', onAddBtn);
refs.btnQueue.addEventListener('click', onQueueWatchedBtn);
refs.btnWatched.addEventListener('click', onQueueWatchedBtn);
refs.btnDelFromWatched.addEventListener('click', onBtnDel);
refs.btnDelFromQueue.addEventListener('click', onBtnDel);

function onAddBtn(event) {
  const isUserAuthorised = checkAuthUser();
  if (!isUserAuthorised) {
    Notify.failure(
      '"You are not authorized. Please sign in to your account or register."'
    );
    return;
  }

  const jsAttrValue = event.target.attributes.js_add.value;
  const value = getMovieValueState(jsAttrValue);

  const movieDetails = getOneMovieDetails();
  const isMovieInLs = LocStorageMovies.findMovieById(movieDetails.id, value);
  if (isMovieInLs) {
    Notify.failure('This movie is already in the library.');
    return;
  }

  movieDetails.preftype = value;
  postDataToFirebase(movieDetails);
}

function onQueueWatchedBtn(event) {
  const isUserAuthorised = checkAuthUser();
  if (!isUserAuthorised) {
    Notify.failure(
      'You are not authorized. Please sign in to your account or register.'
    );
    return;
  }

  const jsAttrValue = event.target.attributes.js_state.value;
  const value = getMovieValueState(jsAttrValue);

  const moviesList = LocStorageMovies.getMoviesList(value);
  if (!moviesList) {
    Notify.failure('Movie list is empty.');
    LocStorageMovies.removeMovieList(value);
  }
  renderMoviesList(moviesList, value);
}

function onBtnDel(event) {
  const isUserAuthorised = checkAuthUser();
  if (!isUserAuthorised) {
    Notify.failure(
      'You are not authorized. Please sign in to your account or register.'
    );
    return;
  }

  const jsAttrValue = event.target.attributes.js_del.value;
  const value = getMovieValueState(jsAttrValue);

  const movieId = getMovieId();
  const frbId = LocStorageMovies.getFrbKeyByMovieId(movieId, value);
  if (!frbId) {
    Notify.failure('Something went wrong.');
    return;
  }
  removeDataFromDb(frbId);
}

function getMovieValueState(value) {
  if (value === 'watched') {
    return 'watched';
  } else if (value === 'queue') {
    return 'queue';
  } else {
    return;
  }
}

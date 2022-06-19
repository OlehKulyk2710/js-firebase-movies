export const refs = {
  btnGetUserProfile: document.querySelector('.get-userProfile'),
  btnSignOutExtra: document.querySelector('.signOut-extra'),
  btnGet: document.querySelector('.get'),
  btnPost: document.querySelector('.post'),
  btnClear: document.querySelector('.del'),
  // btnDelete: document.querySelector('.del'),
  userName: document.querySelector('.auth-username'),
  authLine: document.querySelector('[js-auth]'),
  btnSignOut: document.querySelector('.auth-signOut'),
  backdropModal: document.querySelector('.backdrop'),
  titleModal: document.querySelector('.modal-title'),
  btnModalClose: document.querySelector('.btn-close'),
  form: document.querySelector('.form'),
  formUserName: document.querySelector('.username-label'),
  // btnModalSubmit: document.querySelector('.form-submit'),

  // -----------------------------------------
  btnWatched: document.querySelector('.btn-watched'),
  btnQueue: document.querySelector('.btn-queue'),
  btnAddToWatched: document.querySelector('.btn-watched__list'),
  btnAddToQueue: document.querySelector('.btn-queue__list'),
  watchedList: document.querySelector('div[js-watched]'),
  queueList: document.querySelector('div[js-queue]'),
  btnDelFromWatched: document.querySelector('.btn__delete-w'),
  btnDelFromQueue: document.querySelector('.btn__delete-q'),
};

export const defaultUserData = {
  name: 'Anonymous',
  email: 'test@test.com',
  uid: 'USsPfcF0kUZ7u3BIzTca8upTQO03',
};

export const defaultMovieList = [
  {
    overview: 'A prisoner in a state-of-the-art',
    release_date: '2022',
    adult: false,
    backdrop_path: '/5tmjv1moohN65IuHAbYjKw3cw7I.jpg',
    id: 615469,
  },
  {
    adult: false,
    backdrop_path: '/1LMGpNSUekWg3XCPweN33knQPW9.jpg',
    id: 814340,
    genre_ids: Array(3),
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/qBu6blwnOA75Hz61QHrNe8unUNw.jpg',
    genre_ids: Array(2),
    id: 975714,
    original_language: 'en',
  },
  {
    vote_count: 17,
    id: 880313,
    adult: false,
    backdrop_path: '/cpcDNWL2OgtCCcH7DDRjY8oxUsn.jpg',
    genre_ids: Array(2),
  },
  {
    vote_average: 6.9,
    title: 'Lightyear',
    id: 718789,
    adult: false,
    backdrop_path: '/tqUD26YGjKmFqOJAgbNBah1gX0N.jpg',
  },
];

//  ------------------------------

export function getOneMovieDetails() {
  const max = 4;
  const mathRnd = Math.random();
  const random = Math.ceil(mathRnd * max);
  return defaultMovieList[random];
}

// console.log();

// const x = localStorage.getItem('popa');

// console.log(JSON.parse(x));

export function getMovieId() {
  const { id } = getOneMovieDetails();
  return id;
}

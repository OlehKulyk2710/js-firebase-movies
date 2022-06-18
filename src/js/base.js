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
};

export const defaultUserData = {
  name: 'Anonymous',
  email: 'test@test.com',
  uid: 'USsPfcF0kUZ7u3BIzTca8upTQO03',
};

export const defaultMovieList = [
  {
    overview:
      "A prisoner in a state-of-the-art penitentiary begi…g drugs he's testing for a pharmaceutical genius.",
    release_date: '2022',
    adult: false,
    backdrop_path: '/5tmjv1moohN65IuHAbYjKw3cw7I.jpg',
    id: 615469,
  },
  {
    poster_path: '/aRvwJoqO7121AIpEnIMgP0omNj6.jpg',
    video: false,
    vote_average: 0,
    overview:
      'A father coming to grips with his daughter’s upcom…ips within a big, sprawling Cuban-American family',
    release_date: '2022',
  },
  {
    adult: false,
    backdrop_path: '/1LMGpNSUekWg3XCPweN33knQPW9.jpg',
    id: 814340,
    genre_ids: Array(3),
    original_language: 'en',
  },
  {
    release_date: '2022',
    adult: false,
    backdrop_path: '/4OjoH07cxYQbnGiJzJxto0NUejH.jpg',
    genre_ids: Array(1),
    vote_count: 3,
  },
  {
    adult: false,
    backdrop_path: '/v7hdWmLh6VLgZQgkbHDxAa17M47.jpg',
    genre_ids: Array(3),
    original_language: 'es',
    original_title: 'Centauro',
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
  {
    vote_count: 576,
    id: 507086,
    adult: false,
    backdrop_path: '/wo3l9p0S7pcvwlzlndtKgq0peRJ.jpg',
    genre_ids: Array(3),
  },
  {
    adult: false,
    backdrop_path: '/uZTxMG8VJqt5krHuX5VwVtrdquY.jpg',
    id: 758330,
    genre_ids: Array(3),
    original_language: 'en',
  },
  {
    vote_average: 6.3,
    title: 'Heart Parade',
    id: 982939,
    adult: false,
    backdrop_path: '/dsGDdoWBiL7VzTAXoH6q3kh1VKW.jpg',
  },
  {
    poster_path: '/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg',
    video: false,
    vote_average: 6.4,
    overview:
      'Dangerously ill with a rare blood disorder, and de…o be a remedy potentially worse than the disease.',
    id: 526896,
  },
  {
    release_date: '2022',
    adult: false,
    backdrop_path: '/p8LPe9bxy70OGRhy5x9vdsvbTXY.jpg',
    genre_ids: Array(1),
    vote_count: 9,
  },
  {
    adult: false,
    backdrop_path: '/3pmwggVfKVmbG6dY0uelypTuDRs.jpg',
    genre_ids: Array(4),
    original_language: 'en',
    original_title: 'Mad God',
  },
  {
    vote_count: 503,
    id: 705861,
    adult: false,
    backdrop_path: '/hGr0FrLI74vqpBWTBOPloDBwOAK.jpg',
    genre_ids: Array(2),
  },
  {
    vote_count: 1072,
    id: 361743,
    adult: false,
    backdrop_path: '/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg',
    genre_ids: Array(2),
  },
  {
    adult: false,
    backdrop_path: '/m0YjB4VfghKey8Ppsmz8qCd0v1m.jpg',
    genre_ids: Array(3),
    original_language: 'en',
    original_title: 'The Unbearable Weight of Massive Talent',
  },
  {
    overview:
      "The Crawley family goes on a grand journey to the … of the dowager countess's newly inherited villa.",
    release_date: '2022',
    adult: false,
    backdrop_path: '/nBHKT3pm5DmidZd5VS4bD5Hc2S3.jpg',
    id: 820446,
  },
  {
    adult: false,
    backdrop_path: '/AnmfRV7X0kwEn96pg0lAVopV8YK.jpg',
    genre_ids: Array(1),
    original_language: 'en',
    original_title: 'The Good Neighbor',
  },
  {
    video: false,
    vote_average: 6.9,
    overview:
      "Professor Albus Dumbledore knows the powerful, dar…h with Grindelwald's growing legion of followers.",
    release_date: '2022',
    adult: false,
  },
];

console.log(defaultMovieList);

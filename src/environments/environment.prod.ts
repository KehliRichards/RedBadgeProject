export const environment = {
  production: true
};

export let APIURL = '';

switch (window.location.hostname) {
  
  case 'sits-rbproject.herokuapp.com':
      // this is the full url of your deployed API
      APIURL = 'https://red-badge-server-kja.herokuapp.com'
      break;
  default:
      // this is the local host name of your API
      APIURL = 'http://localhost:3000';
}
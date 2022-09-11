import axios from 'axios'
export default function MyAxios(url, method = 'get', request_data = {}) {
  // const fetch = require('sync-fetch')
  // var data = fetch('/constant.json').json()
  // const currentUrl ='url' in data ? data['url'] + url : '/license/api/v1/' + url;
  // console.log('url', currentUrl)
  const currentUrl = 'http://192.168.20.18:3008/api/' + url;
  // const currentUrl = 'http://192.168.43.227:8000/' + url;

  if (localStorage.getItem('token') !== null) {
    console.log('token in axios', localStorage.getItem("token"));
    // var basicAuth =
    //   'Basic ' +
    //   btoa(
    //     localStorage.getItem('username') +
    //       ':' +
    //       localStorage.getItem('password'),
    //   )
    return axios({
      method: method,
      url: currentUrl,
      data: request_data,
      headers: {
        "x-auth-token": localStorage.getItem("token"),
        "content-type": "application/json",
        
      },
    })
  } else {
    return axios({
      method: method,
      url: currentUrl,
      data: request_data,
    })
  }
}

export default class IPData {
  getIP() {
    return new Promise((resolve, reject) => {
      var request = new XMLHttpRequest();
      request.open(
        'GET',
        'https://api.ipdata.co/?api-key=29076b003870950fa52f17a6313e39dbeb105e4f7fc61a2a4626717c'
      );
      request.timeout = 10000;
      request.ontimeout = () => {
        reject();
      };
      request.setRequestHeader('Accept', 'application/json');
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          if (request.status === 200) {
            if (request.responseType === 'json') {
              resolve(request.response);
              return;
            }
          }
        }
        reject();
      };
      request.send();
    });
  }
}

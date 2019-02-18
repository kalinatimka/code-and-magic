(function () {
  var Code = {
    SUCCESS: 200,
    CACHED: 302,
    NOT_FOUND_ERROR: 404,
    SERVER_ERROR: 500
  }
  window.backend = {
    load: function (onLoad, onError) {
      var URL = 'https://js.dump.academy/code-and-magick/data';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.addEventListener('load', function () {
        switch (xhr.status) {
          case Code.SUCCESS:
            onLoad(xhr.response);
            break;
          default:
            onError(xhr.status);
        }
      });
      xhr.open('GET', URL);
      xhr.send();
    },
    save: function (data, onLoad, onError) {
      var URL = 'https://js.dump.academy/code-and-magick';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.addEventListener('load', function () {
        switch (xhr.status) {
          case Code.SUCCESS:
            onLoad("Данные переданы успешно!");
            break;
          default:
            onError(xhr.status);
        }
        onLoad(xhr.response);
      });
      xhr.open('POST', URL);
      xhr.send(data);
    }
  }
})();

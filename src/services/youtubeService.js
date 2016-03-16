import YTSearch from 'youtube-api-search';

const API_KEY = "AIzaSyDXQ1H2iW0GC1wlN5X_U55Lhv2VX3QSjc4";
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

class YoutubeService {
  constructor($http) {
    this.http = $http;
    this.videos = [];
    this.subscribers = [];
  }

  search(term) {
    var params = {
      part: 'snippet',
      key: API_KEY,
      q: term,
      type: 'video'
    };

    this.http.get(ROOT_URL, { params: params }).then(this._successCallback.bind(this), this._errorCallback.bind(this));
  }

  _successCallback(response) {
    this.videos = response.data.items;
    this._publish();
  }

  _errorCallback(response) {
    console.log(response)
  }

  subscribe(callback) {
    this.subscribers.push(callback);
  }

  _publish() {
    for(let i=0;i<this.subscribers.length;i++) {
      this.subscribers[i](this.videos);
    }
  }
}

export default YoutubeService;

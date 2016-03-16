class ListController {
  constructor($scope, youtubeService, youtubeFactory) {
    this.youtubeFactory = youtubeFactory;
    this.scope = $scope;
    this.scope.selectedVideo = this.selectedVideo.bind(this);
    youtubeService.subscribe(this.setScope.bind(this));
  }

  setScope(videos) {
    this.scope.videos = videos;
  }

  selectedVideo(video) {
    this.youtubeFactory.selectedVideo = video;
  }
}

export default ListController;

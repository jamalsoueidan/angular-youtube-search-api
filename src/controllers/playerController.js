class PlayerController {
  constructor($scope, youtubeService, youtubeFactory) {
    this.youtubeService = youtubeService;
    this.youtubeFactory = youtubeFactory;
    this.scope = $scope;
    this.scope.$watch(() => youtubeFactory.selectedVideo, this.factoryUpdated.bind(this))
    youtubeService.subscribe(this.serviceUpdated.bind(this));
  }

  factoryUpdated(newVideo, oldVideo) {
    if (!newVideo) return;
    if (!oldVideo || newVideo.id.videoId !== oldVideo.id.videoId) {
      this.updatePlayer(newVideo);
    }
  }

  serviceUpdated(videos) {
    this.updatePlayer(videos[0]);
  }

  updatePlayer(video) {
    const videoId = video.id.videoId;
    this.scope.url = 'https://www.youtube.com/embed/' + videoId;
  }
}

export default PlayerController;

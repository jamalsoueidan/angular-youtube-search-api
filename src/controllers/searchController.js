class SearchController {
  constructor($scope, youtubeService) {
    this.scope = $scope;
    this.youtubeService = youtubeService;
    this.scope.search = () => this.search();
    this.scope.term = "angularjs";
    this.search();
  }

  search() {
    this.youtubeService.search(this.scope.term)
  }
}

export default SearchController;

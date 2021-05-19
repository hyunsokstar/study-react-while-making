const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView, searchResultView }) {
    console.log(tag);
    console.log("searchFormView : ", searchFormView);
    console.log("searchResultView : ", searchResultView);
    this.store = store;

    // TODO
    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;

    this.subscribeViewEvents();
  }

  subscribeViewEvents() {
    this.searchFormView.on("@submit", (event) => this.search(event.detail.value));
    this.searchFormView.on("@reset", () => this.reset());
  }

  search(searchKeyword) {
    console.log(tag, "search", searchKeyword);
    this.store.search(searchKeyword);
    this.render();
  }

  reset() {
    console.log(tag, "reset");
    this.store.searchKeyword = "";
  }

  render() {
    if(this.store.searchKeyword.length > 0) {
      console.log("렌더 실행");
      console.log(this.searchResultView);
      this.searchResultView.show(this.store.searchResult)
      return
    }
    this.searchResultView.hide()
  }

}

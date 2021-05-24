const tag = "[Controller]";


export default class Controller {
  constructor(store, { searchFormView, searchResultView, tabView }) {
    console.log(tag);
    console.log("tabView.show : ", tabView.show);

    this.store = store;
    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;
    this.tabView = tabView;

    this.subscribeViewEvents();
    this.render();    
  }

  subscribeViewEvents() {
    this.searchFormView.on("@submit", (event) => {
      console.log("event : ", event);
      this.search(event.detail.value);  
    }); 
    this.searchFormView.on("@reset", () => this.reset());
  }

  search(keyword) {
    console.log(tag, "search", keyword);
    this.store.search(keyword);
    this.render();
  }

  reset() {
    console.log(tag, "reset");
    this.store.searchKeyword = "";
    this.store.searchResult = [];
    this.render();
  }

  render() {
    if (this.store.searchKeyword.length > 0) {
      this.tabView.hide();
      return this.renderSearchResult();
    } else {

      // 55 탭뷰를 열때 활성화 탭 정보를 넘기자 
      this.tabView.show(this.store.selectedTab);
      this.searchResultView.hide();
    }

  }

  renderSearchResult() {
    this.searchFormView.show(this.store.searchKeyword);
    this.searchResultView.show(this.store.searchResult);
  }
  
}

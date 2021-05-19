import Controller from "./Controller.js";
import Store from "./store.js";
import storage from "./storage.js";
import SearchFormView from "./views/SearchFormView.js";
import searchResultView from "./views/SearchResultView.js";


const tag = '[main]'
document.addEventListener("DOMContentLoaded", main);

function main() {
  console.log(tag, "main");
  const store = new Store(storage);

  const views = {
    searchFormView: new SearchFormView(),
    searchResultView: new searchResultView()
  };

  new Controller(store, views);

}

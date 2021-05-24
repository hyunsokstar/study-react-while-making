const tag = "[store]";

// 33 TabType 가져 오기 
import { TabType } from "./views/TabView.js";


export default class Store {
  constructor(storage) {
    console.log(tag);
    if (!storage) throw "no storage";
    this.storage = storage;

    this.searchKeyword = "";
    this.searchResult = [];
    // 44 기본 선택 탭 정보 설정 하기 
    this.selectedTab = TabType.KEYWORD;
  }

  search(keyword) {
    this.searchKeyword = keyword;
    console.log("this.searchKeyword : ", this.searchKeyword);
    this.searchResult = this.storage.productData.filter((product) =>
      product.name.includes(keyword)
    );
    console.log("this.serarchResult : ", this.searchResult);

  }

}

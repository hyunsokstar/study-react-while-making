import { qs } from "../helpers.js";
import View from "./View.js";

export default class searchResultView extends View {
    constructor() {
        super(qs("#search-result-view"));

        this.template = new Template();
    }


    // data 가 있을 경우 List 출력  data 가 없을 경우 빈 메세지 출력
    // 나중에 controller 에서 실행될 함수
    show(data = []) {
        this.element.innerHTML =
            data.length > 0
                ? this.template.getList(data)
                : this.template.getEmptyMessage();

        super.show();
    }
}

class Template {
    getEmptyMessage() {
        return `
            <div class="empty-box">검색 결과 없다. </div>
        `
    }
    getList(data = []) {
        return`
            <ul class="result">
                ${data.map(this._getItem).join("")}
            </ul>
        `;
    }

    _getItem({ imageUrl, name }) {
        return `
            <li>
                <img src="${imageUrl}" alt="${name}" />
                <p>${name}</p>
            </li>
        `;
    }

}
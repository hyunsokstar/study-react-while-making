import { on , qs } from "../helpers.js";
import View from "./View.js";
const tag = "[SearchFormView]";



export default class SearchFormView extends View {
    constructor() {
        super(qs("#search-form-view")); // dom 을 찾아서 this.element 로 초기화
        this.resetElement = qs("[type=reset", this.element); // 그밑의 하위 컴퍼넌트인 x버튼 돔을 찾아서 this.resetElement 에 저장
        this.inputElement = qs("[type=text]", this.element); // search-form-view 밑의 input box에 대해 this.inputElement 로 관리
        
        this.showResetButton(false); // this.showResetButton(false) 를 호출해서 x 버튼 돔에 보이지 않도록 css 설정 하기

        this.bindEvents(); // 이벤트 등록 하기 
    }

    bindEvents() {
        on(this.inputElement, "keyup", () => this.handleKeyup());
        on(this.element, "submit", (event) => this.handleSubmit(event)); // 검색 submit 이벤트

        this.on("reset", () => this.handleReset());
        
    }

    showResetButton(visible = true) {
        // console.log("showResetButton() 확인 ");
        this.resetElement.style.display = visible ? "block" : "none";
    }

    handleKeyup() {
        // console.log(tag, "handleKeyup", this.inputElement.value);
        const { value } = this.inputElement
        this.showResetButton(value.length > 0);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { value } = this.inputElement
        this.emit("@submit", { value });
    }

    handleReset() {
        console.log("reset 이벤트 발생");
        this.emit("@reset");
    }

    show(value = "") {
        console.log("show from SearchFormView");
        this.inputElement.value = value;
        this.showResetButton(this.inputElement.value.length > 0);
        super.show();
    }

}

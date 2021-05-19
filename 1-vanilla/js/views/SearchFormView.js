import { on, qs } from "../helpers.js";
import View from "./View.js";
const tag = "[SearchFormView]";


export default class SearchFormView extends View {
    constructor() {
        super(qs("#search-form-view")); // dom 을 찾아서 this.element 로 초기화
        console.log("this.element : ", this.element);

        this.inputElement = qs("[type=text]", this.element);
        this.resetElement = qs("[type=reset]", this.element);

        this.showResetButton(false); // this.showResetButton(false) 를 호출해서 x 버튼 돔에 보이지 않도록 css 설정 하기 
        this.bindEvents();
    }

    showResetButton(visible = true) {
        // console.log("showResetButton() 확인 ");
        this.resetElement.style.display = visible ? "block" : "none";
    }

    bindEvents() {
        on(this.inputElement, "keyup", () => this.handleKeyup());
        on(this.element, "submit", (event) => this.handleSubmit(event));

        // reset 이벤트 추가 11
        this.on("reset", () => this.handleReset());
    }

    handleKeyup() {
        console.log("keyup event 발생");
        const { value } = this.inputElement
        this.showResetButton(value.length > 0);

        if(value.length <=0) {
            this.handleReset();
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(tag, "handleSubmit");
        const { value } = this.inputElement
        this.emit("@submit", { value });
    }

    handleReset() {
        console.log("reset 이벤트 발생");
        this.emit("@reset");
    }
    
}
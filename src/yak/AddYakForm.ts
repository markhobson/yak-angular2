import {Component, EventEmitter, FORM_DIRECTIVES} from "angular2/angular2";
import {Yak} from "./YakItem";

@Component({
	selector: "add-yak",
	events: ["add"],
	template: `
		<h2>Shave a yak</h2>
		<input [(ng-model)]="yak.name" placeholder="What's next?"/>
		<button (click)="onAdd()">Shave</button>
	`,
	directives: [FORM_DIRECTIVES]
})
export class AddYakForm {
	yak: Yak = new Yak();
	add: EventEmitter = new EventEmitter();
	
	onAdd() {
		this.add.next(this.yak);
	}
}

import {Component, CORE_DIRECTIVES} from "angular2/angular2";
import {Yak, YakList} from "./YakList";
import {AddYakForm} from "./AddYakForm";

@Component({
	selector: "app",
	template: `
		<h1>Yak Shaving</h1>
		<add-yak (add)="addYak($event)"></add-yak>
		<yaks *ng-if="yaks.length" [yaks]="yaks"/>
		`,
	directives: [CORE_DIRECTIVES, AddYakForm, YakList]
})
export class AppComponent {
	public yaks: Yak[] = [];
	
	addYak(yak: Yak) {
		this.yaks.push({name: yak.name});
	}
}

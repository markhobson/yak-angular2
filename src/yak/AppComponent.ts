import {Component, EventEmitter, CORE_DIRECTIVES, FORM_DIRECTIVES} from "angular2/angular2";

class Yak {
	public name: string;
}

@Component({
	selector: "yak",
	properties: ["yak"],
	template: "{{yak.name}}"
})
class YakItem {
	public yak: Yak;
}

@Component({
	selector: "yaks",
	properties: ["yaks"],
	template: `
		<h2>Yaks</h2>
		<ul>
			<li *ng-for="#yak of yaks">
				<yak [yak]="yak"/>
			</li>
		</ul>
	`,
	directives: [CORE_DIRECTIVES, YakItem]
})
class YakList {
	public yaks: Yak[] = [];
}

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
class AddYakForm {
	yak: Yak = new Yak();
	add: EventEmitter = new EventEmitter();
	
	onAdd() {
		this.add.next(this.yak);
	}
}

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

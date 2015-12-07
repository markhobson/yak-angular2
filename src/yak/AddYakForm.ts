import {Component, EventEmitter, CORE_DIRECTIVES, FORM_DIRECTIVES} from "angular2/angular2";

export class Yak {
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
export class YakList {
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
export class AddYakForm {
	yak: Yak = new Yak();
	add: EventEmitter = new EventEmitter();
	
	onAdd() {
		this.add.next(this.yak);
	}
}

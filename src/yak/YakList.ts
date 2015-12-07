import {Component, CORE_DIRECTIVES} from "angular2/angular2";

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

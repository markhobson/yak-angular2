import {Component, CORE_DIRECTIVES} from "angular2/angular2";
import {Yak, YakItem} from "./YakItem";

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

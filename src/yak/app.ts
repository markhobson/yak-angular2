import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from "angular2/angular2";

class Yak {
	public name: string;
}

@Component({
	selector: "yak",
	properties: ["yak"],
	template: "{{yak.name}}"
})
class YakComponent {
	public yak: Yak;
}

@Component({
	selector: "yaks",
	properties: ["yaks"],
	template: `
		<ul>
			<li *ng-for="#yak of yaks">
				<yak [yak]="yak"/>
			</li>
		</ul>
	`,
	directives: [CORE_DIRECTIVES, YakComponent]
})
class YaksComponent {
	public yaks: Yak[] = [];
}

@Component({
	selector: "app",
	template: `
		<h1>Yak Shaving</h1>
		<h2>Shave a yak</h2>
		<input [(ng-model)]="newYakName" placeholder="What's next?"/>
		<button (click)="addYak(newYakName)">Shave</button>
		<div *ng-if="yaks.length">
			<h2>Yaks</h2>
			<yaks [yaks]="yaks"/>
		</div>
		`,
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, YaksComponent]
})
class AppComponent {
	public newYakName: string;
	public yaks: Yak[] = [];
	
	addYak(name: string) {
		this.yaks.push({name: name});
	}
}

bootstrap(AppComponent);

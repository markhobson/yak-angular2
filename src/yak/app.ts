import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from "angular2/angular2";

class Yak {
	public name: string;
}

@Component({
	selector: "app",
	template: `
		<h1>Yak Shaving</h1>
		<h2>Shave a yak</h2>
		<input [(ng-model)]="newYakName" placeholder="What's next?"/>
		<button (click)="addYak(newYakName)">Shave</button>
		<h2>Yaks</h2>
		<ul>
			<li *ng-for="#yak of yaks">
				{{yak.name}}
			</li>
		</ul>
		`,
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
class AppComponent {
	public newYakName: string;
	public yaks: Yak[] = [
		{name: "x"},
		{name: "y"},
		{name: "z"}
	];
	
	addYak(name: string) {
		this.yaks.push({name: name});
	}
}

bootstrap(AppComponent);

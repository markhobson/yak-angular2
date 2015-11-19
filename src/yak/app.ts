import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
	selector: 'app',
	template: `
		<h1>Yak Shaving</h1>
		<h2>Yaks</h2>
		<ul>
			<li *ng-for="#yak of yaks">
				{{yak}}
			</li>
		</ul>
		`,
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
class AppComponent {
	public yaks = ["x", "y", "z"];
}

bootstrap(AppComponent);

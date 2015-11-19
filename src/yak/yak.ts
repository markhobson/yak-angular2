import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
	selector: 'yak',
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
class YakComponent {
	public yaks = ["x", "y", "z"];
}

bootstrap(YakComponent);

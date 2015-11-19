import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
	selector: 'yak',
	template: `
		<h1>Yak Shaving</h1>
		`,
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
class YakComponent {
}

bootstrap(YakComponent);

import {Component} from "angular2/angular2";

export class Yak {
	public name: string;
}

@Component({
	selector: "yak",
	properties: ["yak"],
	template: "{{yak.name}}"
})
export class YakItem {
	public yak: Yak;
}

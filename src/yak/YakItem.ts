import {Component} from "angular2/angular2";
import {Yak} from "./Yak";

@Component({
	selector: "yak",
	properties: ["yak"],
	template: "{{yak.name}}"
})
export class YakItem {
	public yak: Yak;
}

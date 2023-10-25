import {NgModule} from "@angular/core";
import { headercomponent } from "./header/header.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [
        headercomponent
    ],
    exports: [
        headercomponent
    ]
})
export class componentModule{

}
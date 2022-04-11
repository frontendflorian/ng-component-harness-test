import { AsyncFactoryFn, ComponentHarness, TestElement } from "@angular/cdk/testing";
import { MatButtonHarness } from "@angular/material/button/testing";

export class HomeHarness extends ComponentHarness {
    static hostSelector = 'app-home'
}
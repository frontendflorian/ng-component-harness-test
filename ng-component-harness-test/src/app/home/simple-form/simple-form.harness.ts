import { AsyncFactoryFn, ComponentHarness, TestElement } from "@angular/cdk/testing";
import { MatInputHarness } from "@angular/material/input/testing";

export class SimpleFormHarness extends ComponentHarness {
    static hostSelector = 'app-simple-form';

    getLastNameInput = this.locatorFor('input#lastName');
    getFirstNameInput = this.locatorFor(MatInputHarness);

    async getLastNameInputValue(): Promise<string | null> {
        const lastName: TestElement = await this.getLastNameInput();
        return lastName.getProperty('value');
    }
}
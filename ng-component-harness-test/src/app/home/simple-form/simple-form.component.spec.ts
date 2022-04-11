import { HarnessLoader, TestElement } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SimpleFormComponent } from './simple-form.component';
import { SimpleFormHarness } from './simple-form.harness';

describe('SimpleFormComponent', () => {
  let component: SimpleFormComponent;
  let fixture: ComponentFixture<SimpleFormComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatButtonModule, MatInputModule, FormsModule, MatSnackBarModule, NoopAnimationsModule],
      declarations: [ SimpleFormComponent ],
      providers: []
    })
    .compileComponents();
  });

  beforeEach(async() => {
    fixture = TestBed.createComponent(SimpleFormComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have button disabled', async() => {
    const matButton = await loader.getHarness(MatButtonHarness);
    const buttonIsDisabled = await matButton.isDisabled();
    expect(buttonIsDisabled).toBe(true);   
  });

});

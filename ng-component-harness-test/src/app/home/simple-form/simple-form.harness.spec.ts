import { HarnessLoader, TestElement } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from '../home.component';
import { HomeHarness } from '../home.harness';

import { SimpleFormComponent } from './simple-form.component';
import { SimpleFormHarness } from './simple-form.harness';

describe('SimpleFormHarness', () => {

  let component: SimpleFormComponent;
  let fixture: ComponentFixture<SimpleFormComponent>;
  let harness: SimpleFormHarness;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatButtonModule, MatInputModule, FormsModule, MatSnackBarModule, NoopAnimationsModule, CommonModule],
      declarations: [ SimpleFormComponent ],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(async() => {
    fixture = TestBed.createComponent(SimpleFormComponent);
    fixture.detectChanges();

    component = fixture.componentInstance;
    harness = await TestbedHarnessEnvironment.harnessForFixture(fixture, SimpleFormHarness);
  });

  it('should create home harness', () => {
    expect(harness).toBeTruthy();
  });

  it('should have mat-input with value', async() => {
    const firstName = 'Hugo';

    const matInput = await harness.getFirstNameInput();
    await matInput.setValue(firstName);
    const value = await matInput.getValue();

    expect(value).toBe(firstName);
    
    const loader = TestbedHarnessEnvironment.loader(fixture)
    const matButton = await loader.getHarness(MatButtonHarness);
    const buttonIsDisabled = await matButton.isDisabled();
    expect(buttonIsDisabled).toBe(false);  
  })

  it('should have standard input field with value', async() => {
    const lastName = 'Meyer';

    const inputField: TestElement = await harness.getLastNameInput();
    await inputField.setInputValue(lastName);
    
    const value: string | null = await harness.getLastNameInputValue();
    
    expect(value).toBe(lastName);
  });
});

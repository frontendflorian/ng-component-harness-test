import { HarnessLoader } from '@angular/cdk/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SimpleFormHarness } from './simple-form/simple-form.harness';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let harness: SimpleFormHarness;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(async() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    loader = TestbedHarnessEnvironment.loader(fixture);
    harness = await loader.getHarness(SimpleFormHarness);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have harness not null',async () => {
    expect(harness).not.toBeNull();
  })
});

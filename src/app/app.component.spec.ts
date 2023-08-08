import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('AppComponent', () => {
  let app:AppComponent;
  let fixture:ComponentFixture<AppComponent>;
  let dom;
  let button;

  beforeEach(async () => {await TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      MatListModule,
      MatToolbarModule
    ],
    declarations: [
      AppComponent
    ],
  }).compileComponents();
});

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.autoDetectChanges(true);
    app = fixture.debugElement.componentInstance;
    dom = fixture.debugElement.nativeElement;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-demo'`, () => {
    expect(app.title).toEqual('ng-demo');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-toolbar')?.textContent).toContain('Welcome to ng-demo!');
  });
});

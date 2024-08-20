import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSidenavMattableComponent } from './material-sidenav-mattable.component';

describe('MaterialSidenavMattableComponent', () => {
  let component: MaterialSidenavMattableComponent;
  let fixture: ComponentFixture<MaterialSidenavMattableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialSidenavMattableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialSidenavMattableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

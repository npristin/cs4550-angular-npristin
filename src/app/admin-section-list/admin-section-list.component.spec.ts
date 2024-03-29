import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionListComponent } from './admin-section-list.component';

describe('AdminSectionListComponent', () => {
  let component: AdminSectionListComponent;
  let fixture: ComponentFixture<AdminSectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSectionListComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

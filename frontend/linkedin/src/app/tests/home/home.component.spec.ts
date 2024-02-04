import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it("contains home is cool title", () => {
    const componentElement = fixture.nativeElement as HTMLElement;
    expect(componentElement.querySelector("p")?.textContent).toContain("home is cool");
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

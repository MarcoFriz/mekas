import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
// given -> when -> then
fdescribe('Given: LoginComponent', () => {

  let nombre = "test"
  let contrasena = "1234"
  /////////////////////
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /////////////////////



  describe("When: el componente se crea ", () => {
    it('THEN: should create corectamente', () => {
      expect(component).toBeTruthy();
    });
  })

  describe("WHEN: el usuario ingresa un nombre y contraseña", () => {


    it("THEN: debería logearse", () => {
      let result = component.login(nombre, contrasena);
      expect(result).toBeTrue();
    })
  })
});

import { NbSelectModule, NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
// Component parts
import { SELECT_LITERALS, ISelectLiterals, ISelectItem } from '../select.model';
import { defaultLiterals } from '../default.literals';
import { SelectComponent } from './select.component';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          CommonModule,
          NbThemeModule.forRoot({name: 'default'}),
          NbLayoutModule,
          NbSelectModule
        ],
        providers: [
          {
            provide: SELECT_LITERALS,
            useValue: new BehaviorSubject<ISelectLiterals>(defaultLiterals)
          }
        ],
        declarations: [SelectComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return value', () => {
    const item: ISelectItem = {
      name: 'Dog',
      value: 'dog'
    };
    const value = component.trackBy(0, item);
    expect(value).toEqual(item.value);
  });

});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
// UI
import { SELECT_LITERALS, SelectModule } from '../../../../../projects/select/src/public-api';
import { PHOTO_LITERALS, PhotoModule } from '../../../../../projects/photo/src/public-api';

import { FinderComponent } from './finder.component';

describe('FinderComponent', () => {
  let component: FinderComponent;
  let fixture: ComponentFixture<FinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          TranslateModule.forRoot(),
          StoreModule.forRoot({}),
          NbThemeModule.forRoot({name: 'default'}),
          NbLayoutModule,
          SelectModule,
          PhotoModule
        ],
        providers: [
          {
            provide: SELECT_LITERALS,
            useValue: new BehaviorSubject<any>({})
          },
          {
            provide: PHOTO_LITERALS,
            useValue: new BehaviorSubject<any>({})
          }
        ],
        declarations: [FinderComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

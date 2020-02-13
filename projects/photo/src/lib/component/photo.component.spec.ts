import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
// UI
import { PHOTO_LITERALS, IPhotoLiterals } from '@ui/photo';

import { defaultLiterals } from '../default.literals';
import { PhotoComponent } from './photo.component';

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [CommonModule],
        providers: [
          {
            provide: PHOTO_LITERALS,
            useValue: new BehaviorSubject<IPhotoLiterals>(defaultLiterals)
          }
        ],
        declarations: [PhotoComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

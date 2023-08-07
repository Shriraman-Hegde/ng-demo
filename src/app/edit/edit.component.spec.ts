import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from './edit.component';
import {Address, Person, SearchService} from "../shared";
import {ActivatedRoute} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {of} from "rxjs";
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('EditComponent', () => {
  let mockSearchService: SearchService;

  beforeEach( async () => {
    await TestBed.configureTestingModule({
      declarations: [EditComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot:{
              params: {id: 1}
            }
          }
        }
      ],
      imports: [FormsModule, HttpClientTestingModule,MatInputModule,NoopAnimationsModule]
    }).compileComponents();
    mockSearchService = TestBed.inject(SearchService);
  })


  it('should fetch a single record', () => {
    const fixture = TestBed.createComponent(EditComponent);
    const person = new Person({id: 1, name:'Michael Porter Jr.'});
    person.address = new Address({city:'Denver'});
    spyOn(mockSearchService, 'get').and.returnValue(of(person));
    fixture.detectChanges();
    expect(mockSearchService.get).toHaveBeenCalledWith(1);
    const editComponent = fixture.componentInstance;
    expect(editComponent.person.address.city).toBe('Denver');
    const complied = fixture.nativeElement;
    expect(complied.querySelector('h3').innerHTML).toBe('Michael Porter Jr.');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import {SearchService} from "../shared";
import {ActivatedRoute} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {of} from "rxjs";
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let mockSearchService : SearchService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {term: 'nikola'}
            }
          }
        }
      ],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule,
      MatListModule, MatIconModule, MatInputModule, NoopAnimationsModule]
    }).compileComponents();
  });

  beforeEach(()=>{
    mockSearchService = TestBed.inject(SearchService);
    mockSearchService.search = jasmine.createSpy().and.returnValue(of([]));
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search when a term is set and search() is called', () => {
    component = fixture.componentInstance;
    component.query = 'J';
    component.search();
    expect(mockSearchService.search).toHaveBeenCalledWith('J');
  });

  it('should search automatically when a term is on URL', () => {
    fixture.detectChanges();
    expect(mockSearchService.search).toHaveBeenCalledWith('nikola');
  });
});

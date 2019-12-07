import { PostComponent } from "./post-component";
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('Post Component', () => {

    let component: PostComponent;
    let fixture;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [PostComponent]
        }).compileComponents();
    })
    
    beforeEach(() => {
        fixture = TestBed.createComponent(PostComponent);

       component = fixture.componentInstance;

       fixture.detectChanges();

    });

    afterAll(() => {
        component = null;
    })

    it('Should Create', () => {
        expect(component).toBeTruthy();
    });


    // it('Should Display Global total likes', () => {
    //     let debugElement = fixture.debugElement.query()
    // })

});

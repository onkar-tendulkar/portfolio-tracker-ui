import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { PortfolioSecuritiesListComponent } from './portfolio-security-list.component';
import { By } from '@angular/platform-browser';

describe ('PortfolioSecuritiesListComponent', () => {
    let fixture:ComponentFixture<PortfolioSecuritiesListComponent>,
    component:PortfolioSecuritiesListComponent,
    element:HTMLElement,
    debugEl:DebugElement

    /*async will make asynchronous function execute synchronously*/
    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports:[],
            declarations:[ PortfolioSecuritiesListComponent],
            providers:[],
            schemas:[]
        })

    }))

    beforeEach(() =>
    {
        fixture = TestBed.createComponent(PortfolioSecuritiesListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    })

    describe('Initial display', () => 
    {
        it('should have first symbol as GOOGL', () => {
            component.portfolio =
            {"id":289,"userId":1,"name":"Onkar's portfolio","createdTime":new Date("2019-09-06T05:57:53.955+0000"),
            "securities":
                [{"symbol":"MSFT", sector:"Software","units":2,"costPerUnit":140.05,"datePurchased":new Date("2019-09-05"),"portfolioId":289,"portfolioName":"Onkar's portfolio"},
                {"symbol":"GOOGL", sector:"Software","units":1,"costPerUnit":1212.19,"datePurchased":new Date("2019-09-05"),"portfolioId":289,"portfolioName":"Onkar's portfolio"},
                {"symbol":"AAPL", sector:"Hardware","units":3,"costPerUnit":220.05,"datePurchased":new Date("2019-09-05"),"portfolioId":289,"portfolioName":"Onkar's portfolio"}
                ]};
            
            component.sectorFilter = 'Software';
            component.sortBy = 'symbol'

            component.ngOnChanges();
            fixture.detectChanges();

            expect(element.querySelector(".well").querySelector("h3").textContent).toContain('GOOGL');
        }
        )
        
        
        it('should have first symbol as AAPL', () => {
            component.portfolio =
            {"id":289,"userId":1,"name":"Onkar's portfolio","createdTime":new Date("2019-09-06T05:57:53.955+0000"),
            "securities":
                [{"symbol":"MSFT","units":2,"costPerUnit":140.05,"datePurchased":new Date("2019-09-05"),"portfolioId":289,"portfolioName":"Onkar's portfolio"},
                {"symbol":"GOOGL","units":1,"costPerUnit":1212.19,"datePurchased":new Date("2019-09-05"),"portfolioId":289,"portfolioName":"Onkar's portfolio"},
                {"symbol":"AAPL","units":3,"costPerUnit":220.05,"datePurchased":new Date("2019-09-05"),"portfolioId":289,"portfolioName":"Onkar's portfolio"}
                ]};
            
            component.sectorFilter = 'All';
            component.sortBy = 'symbol'

            component.ngOnChanges();
            fixture.detectChanges();

            expect(element.querySelector(".well").querySelector("h3").textContent).toContain('AAPL');
        }
        )

        it('should have first symbol as MSFT', () => {
            component.portfolio =
            {"id":289,"userId":1,"name":"Onkar's portfolio","createdTime":new Date("2019-09-06T05:57:53.955+0000"),
            "securities":
                [{"symbol":"MSFT","units":2,"costPerUnit":140.05,"datePurchased":new Date("2019-09-05"),"portfolioId":289,"portfolioName":"Onkar's portfolio"},
                {"symbol":"GOOGL","units":1,"costPerUnit":1212.19,"datePurchased":new Date("2019-09-05"),"portfolioId":289,"portfolioName":"Onkar's portfolio"},
                {"symbol":"AAPL","units":3,"costPerUnit":220.05,"datePurchased":new Date("2019-09-05"),"portfolioId":289,"portfolioName":"Onkar's portfolio"}
                ]};
            
            component.sectorFilter = 'All';
            component.sortBy = 'price'

            component.ngOnChanges();
            fixture.detectChanges();

            expect(element.querySelector(".well").querySelector("h3").textContent).toContain('AAPL');
        }
        )
    })
})


describe('Draw Line Graph', function(){
    describe("It should calculate min/max date correctly", function(){
        let data = [
            {id:1, month:'2018-09', town:'GEYLANG', resale_price:160000},
            {id:2, month:'2018-08', town:'BUKIT MERAH', resale_price:168000},
            {id:3, month:'2018-05', town:'MARINE PARADE', resale_price:180000},
            {id:4, month:'2018-04', town:'SERANGOON', resale_price:170000},
        ]
    
        it("should get max date and end date", function(){
            let ndx = crossfilter(data);
            let dates = getMinAndMaxDate(ndx);  
            expect(dates.min_date).toBe('2018-04');
            expect(dates.max_date).toBe('2018-09');
        })
        
    } )
})
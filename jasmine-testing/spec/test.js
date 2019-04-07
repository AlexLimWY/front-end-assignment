describe('Draw Line Graph', function() {
    describe("It should calculate min/max date correctly", function() {
        let data_1 = [
            { id: 1, month: '2018-09', town: 'GEYLANG', resale_price: 160000 },
            { id: 2, month: '2018-08', town: 'BUKIT MERAH', resale_price: 168000 },
            { id: 3, month: '2018-05', town: 'MARINE PARADE', resale_price: 180000 },
            { id: 4, month: '2018-04', town: 'SERANGOON', resale_price: 170000 },
        ]

        it("should get max date and end date", function() {
            let ndx = crossfilter(data_1);
            let dates = getMinAndMaxDate(ndx);
            expect(dates.min_date).toBe('2018-04');
            expect(dates.max_date).toBe('2018-09');
        })

        it("should get min and max date if all dates are the same", function() {
            let data_2 = [
                { id: 1, month: '2019-02' },
                { id: 2, month: '2019-02' },
                { id: 3, month: '2019-02' },
                { id: 4, month: '2019-02' }
            ];

            let ndx = crossfilter(data_2);
            let dates = getMinAndMaxDate(ndx);
            expect(dates.min_date == dates.max_date).toBe(true)
        })
    })
    describe("Convert 'month' column data to date", function() {
        it("Should convert 2019-02 such that month is 02 and year is 2019", function() {
            let data_3 = [
                { id: 1, month: '2019-02' }
            ]

            data_3 = massageDates(data_3);
            expect(moment(data_3[0].month).format('YYYY')).toBe('2019')
            expect(moment(data_3[0].month).format("MM")).toBe('02')

        })

        it("Should not crash on invalid dates", function() {
            let data_4 = [
                { id:1 , month: '2019-333' }
            ]
            data_4 = massageDates(data_4);
            expect(data_4[0].month).toBeNull();
        })
    })
})

describe('Draw Scatter Plot', function() {
    describe("It should calculate min/max date correctly", function() {
        let data_5 = [
            { id: 1, lease_commence_date: '2016', town: 'BUKIT MERAH', resale_price: 1088000 },
            { id: 2, lease_commence_date: '2015', town: 'QUEENSTOWN', resale_price: 550000 },
            { id: 3, lease_commence_date: '2014', town: 'PUNGGOL', resale_price: 349000 },
            { id: 4, lease_commence_date: '2013', town: 'TAMPINES', resale_price: 260000 },
        ]

        it("should get max date and end date", function() {
            let ndx = crossfilter(data_5);
            let dates = getMinAndMaxDate1(ndx);
            expect(dates.min_date1).toBe('2013');
            expect(dates.max_date1).toBe('2016');
        })

        it("should get min and max date if all dates are the same", function() {
            let data_5 = [
                { id: 1, lease_commence_date: '2016' },
                { id: 2, lease_commence_date: '2016' },
                { id: 3, lease_commence_date: '2016' },
                { id: 4, lease_commence_date: '2016' }
            ];

            let ndx = crossfilter(data_5);
            let dates = getMinAndMaxDate1(ndx);
            expect(dates.min_date1 == dates.max_date1).toBe(true)
        })
    })
    describe("Convert 'lease_commence-date' column data to date", function() {
        it("Should not crash on invalid dates", function() {
            let data_6 = [
                { id:1 , lease_commence_date: '2019-333' }
            ]
            data_6 = massageDates1(data_6);
            expect(data_6[0].lease_commence_date).toBeNull();
        })
    })
})
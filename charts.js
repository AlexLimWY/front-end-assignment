queue()
    .defer(d3.json, "https://data.gov.sg/api/action/datastore_search?resource_id=1b702208-44bf-4829-b620-4615ee19b57c&limit=81960")
    .await(makeGraphs);

function makeGraphs(error, data) {
    console.log(data.result.records);


    var ndx = crossfilter(data.result.records);
    var town_dim = ndx.dimension(dc.pluck('town'))
    var total_resale_price_per_town = town_dim.group().reduceSum(dc.pluck('resale_price'));
    dc.barChart("#bar-chart")
        .width(2500)
        .height(1250)
        .margins({ top: 10, right: 10, bottom: 50, left: 80 })
        .dimension(town_dim)
        .group(total_resale_price_per_town)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Town")
        .yAxis().ticks(4);

    // var parseDate = d3.time.format("%d/%m/%Y").parse;
    // month.forEach(function(d) {
    //     d.month = parseDate(d.month);
    // });
    // var date_dim = ndx.dimension(dc.pluck('month'));
    // var total_resale_price_per_year = date_dim.group().reduceSum(dc.pluck('resale_price'));
    // var minDate = date_dim.bottom(1)[0].month;
    // var maxDate = date_dim.top(1)[0].month;
    // dc.lineChart("#line-graph")
    //     .width(1000)
    //     .height(300)
    //     .margins({ top: 10, right: 50, bottom: 30, left: 50 })
    //     .dimension(date_dim)
    //     .group(total_resale_price_per_year)
    //     .transitionDuration(500)
    //     .x(d3.time.scale().domain([minDate, maxDate]))
    //     .xAxisLabel("Year")
    //     .yAxis().ticks(4);
    dc.renderAll();
}


// http://dc-js.github.io/dc.js/resizing/

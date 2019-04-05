// we create a new function named getData and pass
// it a callback function. When the queue() finished
// retriving the data, it will trigger our callback function
// (which is the second parameter of getData() )
 function getData(callback)
 {
      queue()
        .defer(d3.json, "https://data.gov.sg/api/action/datastore_search?resource_id=1b702208-44bf-4829-b620-4615ee19b57c&limit=81960")
        .await(callback);
 }
 
 // Given a crossfilter as the first parameter,
 // retrieve the minimum and maximum date
 function getMinAndMaxDate(ndx)
 {
       
    var date_dim = ndx.dimension(function(d){
        return d.month;
    });
    
    var min_date = date_dim.bottom(1)[0].month;
    var max_date = date_dim.top(1)[0].month;
    
    // return the result as a literal object,
    // because there is no way to return more than
    // one variable from a function. So we use
    // an object to store the possible 
    return {
        'min_date' : min_date,
        'max_date' : max_date
    }
 }

function makeGraphs(error, data) {
    var ndx = crossfilter(data.result.records);

    //Bar Chart    
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

    //Line Graph
    var parseDate = d3.time.format("%Y-%m").parse;
    data.result.records.forEach(function(d) {
        d.month = parseDate(d.month);
    });
    var date_dim = ndx.dimension(dc.pluck('month'));
    var total_resale_price_per_month = date_dim.group().reduceSum(dc.pluck('resale_price'));
    var minDate = date_dim.bottom(1)[0].month;
    var maxDate = date_dim.top(1)[0].month;
    dc.lineChart("#line-graph")
        .width(1000)
        .height(330)
        .margins({ top: 10, right: 10, bottom: 50, left: 80 })
        .dimension(date_dim)
        .group(total_resale_price_per_month)
        .transitionDuration(500)
        .x(d3.time.scale().domain([minDate, maxDate]))
        .xAxisLabel("Month")
        .yAxis().ticks(4);

    //Pie Chart
    var flat_type_dim = ndx.dimension(dc.pluck('flat_type'));
    var resale_volume_per_flat_type = flat_type_dim.group().reduceSum(dc.pluck('resale_price'));
    dc.pieChart('#pie-chart')
        .height(350)
        .radius(200)
        .transitionDuration(1500)
        .dimension(flat_type_dim)
        .group(resale_volume_per_flat_type);

    // Scatter Plot
    var parseDate1 = d3.time.format("%Y").parse;
    data.result.records.forEach(function(d) {
        d.lease_commence_date = parseDate1(d.lease_commence_date);
    });

    var lease_commence_date_dim = ndx.dimension(function(d) {
        return d.lease_commence_date;
    });

    var minDate1 = lease_commence_date_dim.bottom(1)[0].lease_commence_date;
    var maxDate1 = lease_commence_date_dim.top(1)[0].lease_commence_date;

    var resale_price_dim = ndx.dimension(function(d) {
        return parseFloat(d.resale_price)   
    });
    
    var resale_price_group = resale_price_dim.group();
    var minPrice = resale_price_dim.bottom(1)[0].resale_price;
    var maxPrice = resale_price_dim.top(1)[0].resale_price;
    console.log(minPrice, maxPrice)
      var resale_price_dim2 = ndx.dimension(function(d) {
        return [d.lease_commence_date, parseFloat(d.resale_price)];
    });
    
    
     var resale_price_group2 = resale_price_dim2.group();
    
 console.log(resale_price_dim.top(1));
    var linearScale = d3.scale.linear()
        .domain([minPrice, maxPrice])
        .range([maxPrice, minPrice]);

    dc.scatterPlot("#scatter-plot")
        .width(1000)
        .height(2100)
        .margins({ top: 10, right: 10, bottom: 50, left: 80 })
        .brushOn(false)
        .symbolSize(8)
        .clipPadding(10)
        .xAxisLabel("Lease Commencement Date")
        .yAxisLabel("Resale Price ($)")
        .dimension(resale_price_dim2)
        .group(resale_price_group2)
        .x(d3.time.scale().domain([minDate1, maxDate1]))
        .y(linearScale)
        .yAxis().ticks(13);


    dc.renderAll();
}


$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } 
  });
});

 
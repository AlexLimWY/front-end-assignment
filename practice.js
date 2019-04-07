// queue()
//     .defer(d3.json, "https://data.gov.sg/api/action/datastore_search?resource_id=1b702208-44bf-4829-b620-4615ee19b57c&limit=81960")
//     .await();

$(document).ready(function(){
  $("button").click(function(){
    $.get("https://data.gov.sg/api/action/datastore_search?resource_id=1b702208-44bf-4829-b620-4615ee19b57c&limit=81960", function(data){
      console.log(data);
    });
  });
});

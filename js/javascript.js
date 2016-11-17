function addCircles() {
    var data = 
    [{x:75, y:75, r:35, class:"red"},
    {x:325, y:75, r:25, class:"green"},
    {x:200, y:200, r:50, class:"blue"},
    {x:75, y:325, r:25, class:"red"},
    {x:325, y:325, r:35, class:"green"}
    ];

    var vis = d3.select("#vis");

    var circles = vis.selectAll("circle")
        .data(data);
    
    circles.enter()
        .append("circle")
        .attr("class", function(d){return d.class;})
        .attr("cx", function(d){return d.x;})
        .attr("cy", function(d){return d.y;})
        .attr("r", function(d){return d.r;});


}


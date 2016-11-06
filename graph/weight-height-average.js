
google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Month');
      data.addColumn('number', 'Height');
      data.addColumn('number', 'Weight');
      data.addColumn('number', 'Average');

      data.addRows([
        [1,  30.8, 3.8, 31.8],
        [2,  30.9, 4.5, 32.4],
        [3,  40.4,   5.7, 45.7],
        [4,  40.7, 5.8, 46.5],
        [5,  40.9, 6.6, 47.4],
        [6,   50.8, 7.6,  47.7],
        [7,   60.6, 8.3,  59.6],
        [8,  70.3, 9.2, 63.6],
        [9,  70.9, 9.9, 70.8],
        [10, 80.8, 10.9, 81.6],
        [11,  90.3,  11.2,  84.7],
        [12,  90.6,  11.4,  90.2],
        [13,  90.8,  12.3,  93.6],
        [14,  100.2,  13.2,  99.4]
      ]);

      var options = {
        chart: {
          title: 'Baby Infant Growth Charts',
          subtitle: 'each unit'
        },
        width: '100%',
        height: '100%',
        axes: {
          x: {
            0: {side: 'bottom'}
          }
        },
        chartArea : {width : '60%'}
      };

      var chart = new google.charts.Line(document.getElementById('line_top_x'));

      chart.draw(data, options);
    }
    
    $(window).resize(function(){
      drawChart();
    });
        
    /*
    function resize () {
      chart.draw(data, options);
    }
    if (window.addEventListener) {
      window.addEventListener('resize', resize);
    }
    else {
      window.attachEvent('onresize', resize);
    }
    */


    Highcharts.chart('container', {
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'Analytics'
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Exchange rate'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                step: 'left', // or 'center' or 'right'
            		marker: {
                	radius: 8
            		}
            }
        },

        series: [{
            type: 'line',
            name: 'Offer',
            color: 'red',
            marker: {
                	radius: 0
            		},
            data: [[Date.UTC(2015,5,7),0.9004],
                [Date.UTC(2015,5,8),0.8857],
                [Date.UTC(2015,5,9),0.8862],
                [Date.UTC(2015,5,10),0.8829],
                [Date.UTC(2015,5,11),0.8882],
                [Date.UTC(2015,5,12),0.8873],
                [Date.UTC(2015,5,14),0.8913],
                [Date.UTC(2015,5,15),0.8862],
                [Date.UTC(2015,5,16),0.8891],
                [Date.UTC(2015,5,17),0.8821],
                [Date.UTC(2015,5,18),0.8802],
                [Date.UTC(2015,5,19),0.8808],
                [Date.UTC(2015,5,21),0.8794],
                [Date.UTC(2015,5,22),0.8818],
                [Date.UTC(2015,5,23),0.8952],
                [Date.UTC(2015,5,24),0.8924],
                [Date.UTC(2015,5,25),0.8925],
                [Date.UTC(2015,5,26),0.8955],
                [Date.UTC(2015,5,28),0.9113],
                [Date.UTC(2015,5,29),0.8900],
                [Date.UTC(2015,5,30),0.8950]]
        },
        {
            type: 'line',
            name: 'Bid',
            color: 'lightgreen',
             marker: {
                	radius: 0
            		},
            data: [[Date.UTC(2015,5,7),0.9904],
                    [Date.UTC(2015,5,8),0.9857],
                    [Date.UTC(2015,5,9),0.9862],
                    [Date.UTC(2015,5,10),0.9829],
                    [Date.UTC(2015,5,11),0.9882],
                    [Date.UTC(2015,5,12),0.9873],
                    [Date.UTC(2015,5,14),0.9913],
                    [Date.UTC(2015,5,15),0.9862],
                    [Date.UTC(2015,5,16),0.9891],
                    [Date.UTC(2015,5,17),0.9821],
                    [Date.UTC(2015,5,18),0.9802],
                    [Date.UTC(2015,5,19),0.9808],
                    [Date.UTC(2015,5,21),0.9794],
                    [Date.UTC(2015,5,22),0.9818],
                    [Date.UTC(2015,5,23),0.9952],
                    [Date.UTC(2015,5,24),0.9924],
                    [Date.UTC(2015,5,25),0.9950],
                    [Date.UTC(2015,5,26),0.9955],
                    [Date.UTC(2015,5,28),0.9913],
                    [Date.UTC(2015,5,29),0.9900],
                    [Date.UTC(2015,5,30),0.9950]]
        }
        ,
        {
            type: 'scatter',
            name: 'Market Fills',
            marker: {
                	radius: 4,
                  symbol: 'circle'
            		},
            data: [[Date.UTC(2015,5,7),0.9504],
                  [Date.UTC(2015,5,8),0.9457],
                  [Date.UTC(2015,5,9),0.9562],
                  [Date.UTC(2015,5,10),0.9429],
                  [Date.UTC(2015,5,11),0.9582],
                  [Date.UTC(2015,5,12),0.9473],
                  [Date.UTC(2015,5,14),0.9613],
                  [Date.UTC(2015,5,15),0.9562],
                  [Date.UTC(2015,5,16),0.9491],
                  [Date.UTC(2015,5,17),0.9521],
                  [Date.UTC(2015,5,18),0.9602],
                  [Date.UTC(2015,5,19),0.9508],
                  [Date.UTC(2015,5,21),0.9694],
                  [Date.UTC(2015,5,22),0.9518],
                  [Date.UTC(2015,5,23),0.9652],
                  [Date.UTC(2015,5,24),0.9524],
                  [Date.UTC(2015,5,25),0.9625],
                  [Date.UTC(2015,5,26),0.9555],
                  [Date.UTC(2015,5,28),0.9413],
                  [Date.UTC(2015,5,29),0.9700],
                  [Date.UTC(2015,5,30),0.9650]]
        }
        ]
    });

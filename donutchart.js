var ultimateColors = [
  ['#737373', '#998782', '#D4A173', '#AFCA9C', '#737373', '#DDCDC8', '#D9805F', '#BABE8F', '#998782', '#776762'],
];
var data = [{
    values: [383, 75, 73, 73, 71, 71, 70, 66, 62, 60],
    labels: ['Lainnya', 'X360', 'Wii', 'XB', 'PS3', 'PS2', 'DS','GBA', 'BC', 'PS' ],
    domain: {column: 0},
    name: 'Platform',
    hoverinfo: 'label+percent+name',
    marker: {
      colors: ultimateColors[0]
    },
    hole: .6,
    type: 'pie'
  }];
  
  var layout = {
    title: 'Critic Score by Platform',
    annotations: [
      {
        font: {
          size: 20
        },
        showarrow: false,
        text: 'Platform',
        x: 0.5,
        y: 0.5
      },
    ],
    height: 400,
    width: 600,
    showlegend: true,
    grid: {rows: 1, columns: 1}
  };
  
  Plotly.newPlot('donutchart', data, layout);
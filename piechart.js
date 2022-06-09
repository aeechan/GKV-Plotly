// var data = [{
//     values: [1958, 1379, 1330, 1227, 1062, 825, 772, 730, 613, 1672],
//     labels: ['Action', 'Sports', 'Misc', 'Role-playing', 'Adventure', 'Shooter', 
//     'Racing', 'Simulation', 'Fighting', 'Lainnya'],
//     type: 'pie',

//   }];
  
//   var layout = {
//     title: 'GLobal Sales by Genre',
//     height: 400,
//     width: 500
//   };

var allLabels = ['Action', 'Sports', 'Misc', 'Role-playing', 'Adventure', 'Shooter', 
'Racing', 'Simulation', 'Fighting', 'Lainnya'];

var allValues = [
  [1958, 1379, 1330, 1227, 1062, 825, 772, 730, 613, 1672],
];

var ultimateColors = [
  ['#737373', '#998782', '#D4A173', '#AFCA9C', '#737373', '#DDCDC8', '#D9805F', '#BABE8F', '#998782', '#776762'],
  
];

var data = [{
  values: allValues[0],
  labels: allLabels,
  type: 'pie',
  textinfo: "percent",
  name: 'Genre',
  marker: {
    colors: ultimateColors[0]
  },
  domain: {
    row: 0,
    column: 0
  },
  hoverinfo: 'label+percent+name',
}];

var layout = {
  title: 'Global Sales by Genre',
  height: 400,
  width: 500,
  showlegend: true,
  grid: {rows: 1, columns: 1}
};

  
Plotly.newPlot('piechart', data, layout);
// Plot by Genre

var barGen1 = {
    x: ['Action', 'Sports', 'Shooter', 'Racing', 'Misc', 'Platform', 'Role-Playing', 'Simulation', 'Fighting', 'Adventure'],
    y: [1745.27, 1332, 1052.94, 728.9, 803.18, 828.08, 934.4, 390.42, 447.48, 237.69],
    type: 'bar',
    name: 'Global Sales',
    marker: {
        color: 'rgb(87, 72, 67);',
        opacity: 0.7,
    }
};

var barGen2 = {
    x: ['Action', 'Sports', 'Shooter', 'Racing', 'Misc', 'Platform', 'Role-Playing', 'Simulation', 'Fighting', 'Adventure'],
    y: [879.01, 684.43, 592.24, 359.35, 407.27, 445.5, 330.81, 182.19, 223.36, 105.26],
    type: 'bar',
    name: 'NA Sales',
    marker: {
        color: 'rgb(119, 103, 98)',
        opacity: 0.7,
    }
};

var barGen3 = {
    x: ['Action', 'Sports', 'Shooter', 'Racing', 'Misc', 'Platform', 'Role-Playing', 'Simulation', 'Fighting', 'Adventure'],
    y: [519.13, 376.79, 317.34, 236.51, 212.74, 200.35, 188.71, 113.52, 100.33, 63.54],
    type: 'bar',
    name: 'EU Sales',
    marker: {
        color: 'rgb(153, 135, 130)',
        opacity: 0.7,
    }
};

var barGen4 = {
    x: ['Action', 'Sports', 'Shooter', 'Racing', 'Misc', 'Platform', 'Role-Playing', 'Simulation', 'Fighting', 'Adventure'],
    y: [161.44, 135.54, 38.76, 56.71, 108.11, 130.83, 355.46, 63.8, 87.48, 52.3],
    type: 'bar',
    name: 'JP Sales',
    marker: {
        color: 'rgb(187, 169, 163)',
        opacity: 0.7,
    }
};

var barGen5 = {
    x: ['Action', 'Sports', 'Shooter', 'Racing', 'Misc', 'Platform', 'Role-Playing', 'Simulation', 'Fighting', 'Adventure'],
    y: [184.6, 134.51, 104.11, 76.1, 74.39, 51.09, 59.63, 30.75, 36.36, 52.3],
    type: 'bar',
    name: 'Other Sales',
    marker: {
        color: 'rgb(221, 205, 200)',
        opacity: 0.7
    }
};


var dataPlotGen = [barGen1, barGen2, barGen3, barGen4, barGen5];

var layoutPlotGen = {
    "titlefont": {
        "size": 30,
        "color": '#212121',
        "weight": 'bold',
        "family": 'Montserrat'
    },
    title: 'Top Sales By Genre',
    xaxis: {
        tickangle: -40
    },
    barmode: 'group'
};

Plotly.newPlot('barGen', dataPlotGen, layoutPlotGen);

/* ------------------------------------------------------------------------- */
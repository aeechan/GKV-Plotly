// Plot by Platform

var barPlat1 = {
    x: ['PS2', 'PS3', 'X360', 'Wii', 'PS', 'DS', 'PC', 'PS4', 'GBA', 'PSP'],
    y: [1255.64, 939.43, 971.63, 908.13, 730.68, 807.1, 260.3, 314.23, 318.5, 294.3],
    type: 'bar',
    name: 'Global Sales',
    marker: {
        color: 'rgb(87, 72, 67);',
        opacity: 0.7,
    }
};

var barPlat2 = {
    x: ['PS2', 'PS3', 'X360', 'Wii', 'PS', 'DS', 'PC', 'PS4', 'GBA', 'PSP'],
    y: [583.84, 393.49, 602.47, 496.9, 336.52, 382.67, 94.53, 108.74, 187.54, 109.17],
    type: 'bar',
    name: 'NA Sales',
    marker: {
        color: 'rgb(119, 103, 98)',
        opacity: 0.7,
    }
};

var barPlat3 = {
    x: ['PS2', 'PS3', 'X360', 'Wii', 'PS', 'DS', 'PC', 'PS4', 'GBA', 'PSP'],
    y: [339.29, 330.29, 270.76, 262.21, 213.61, 188.89, 142.44, 141.09, 75.25, 66.68],
    type: 'bar',
    name: 'EU Sales',
    marker: {
        color: 'rgb(153, 135, 130)',
        opacity: 0.7,
    }
};

var barPlat4 = {
    x: ['PS2', 'PS3', 'X360', 'Wii', 'PS', 'DS', 'PC', 'PS4', 'GBA', 'PSP'],
    y: [139.2, 80.19, 12.43, 69.33, 139.82, 175.57, 0, 16, 47.33, 76.78],
    type: 'bar',
    name: 'JP Sales',
    marker: {
        color: 'rgb(187, 169, 163)',
        opacity: 0.7,
    }
};

var barPlat5 = {
    x: ['PS2', 'PS3', 'X360', 'Wii', 'PS', 'DS', 'PC', 'PS4', 'GBA', 'PSP'],
    y: [193.44, 135.68, 85.76, 79.07, 40.91, 59.28, 22.38, 48.35, 0, 41.42],
    type: 'bar',
    name: 'Other Sales',
    marker: {
        color: 'rgb(221, 205, 200)',
        opacity: 0.7
    }
};


var dataPlotPlat = [barPlat1, barPlat2, barPlat3, barPlat4, barPlat5];

var layoutPlotPlat = {
    "titlefont": {
        "size": 30,
        "color": '#212121',
        "weight": 'bold',
        "family": 'Montserrat'
    },
    title: 'Top Sales By Platform',
    xaxis: {
        tickangle: -40
    },
    barmode: 'group'
};

Plotly.newPlot('barPlat', dataPlotPlat, layoutPlotPlat);
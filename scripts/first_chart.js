Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Pineapple', 'Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Susan and Scott\'s house'
      }
    },
    series: [{
      name: 'Malyna',
      data: [6, 1, 0, 4]
    }, {
      name: 'Khoi',
      data: [6, 5, 7, 3]
    }]
  });

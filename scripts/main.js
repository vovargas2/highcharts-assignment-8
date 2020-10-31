Highcharts.chart('container1', {
  chart: {
    type: 'tilemap',
    inverted: true,
    height: '80%'
  },

  accessibility: {
    description: 'A tile map represents the states of the USA by transgender population in 2016. The hexagonal tiles are positioned to geographically echo the map of the USA.',
    screenReaderSection: {
      beforeChartFormat: '<h5>{chartTitle}</h5>' +
        '<div>{chartSubtitle}</div>' +
        '<div>{chartLongdesc}</div>' +
        '<div>{viewTableButton}</div>'
    },
    point: {
      valueDescriptionFormat: '{index}. {xDescription}, {point.value}.'
    }
  },

  title: {
    text: 'Transgender Population in the U.S. by State, 2017'
  },

  subtitle: {
    text: 'Source:<a href="https://williamsinstitute.law.ucla.edu/publications/age-trans-individuals-us/"> Williams Institute Report "Age of Individuals Who Identify as Transgender in the United States," </a>'
  },

  xAxis: {
    visible: false
  },

  yAxis: {
    visible: false
  },

  colorAxis: {
    dataClasses: [{
      from: 0,
      to: 10000,
      color: '#5CD7F2',
      name: '< 10K'
    }, {
      from: 10000,
      to: 50000,
      color: '#8BBBD9',
      name: '10K-50K'
    }, {
      from: 50000,
      to: 100000,
      color: '#F2DFE4',
      name: '50k - 100k'
    }, {
      from: 100000,
      color: '#F2ACBF',
      name: '> 100k'
    }]
  },

  tooltip: {
    headerFormat: '',
    pointFormat: 'The transgender population in <b> {point.name}</b> is <b>{point.value}</b>'
  },

  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '{point.hc-a2}',
        color: '#000000',
        style: {
          textOutline: false
        }
      }
    }
  },

  series: [{
    name: '',
    data: [{
      'hc-a2': 'AL',
      name: 'Alabama',
      region: 'South',
      x: 6,
      y: 7,
      value: 22500
    }, {
      'hc-a2': 'AK',
      name: 'Alaska',
      region: 'West',
      x: 0,
      y: 0,
      value: 2700
    }, {
      'hc-a2': 'AZ',
      name: 'Arizona',
      region: 'West',
      x: 5,
      y: 3,
      value: 30550
    }, {
      'hc-a2': 'AR',
      name: 'Arkansas',
      region: 'South',
      x: 5,
      y: 6,
      value: 13400
    }, {
      'hc-a2': 'CA',
      name: 'California',
      region: 'West',
      x: 5,
      y: 2,
      value: 218400
    }, {
      'hc-a2': 'CO',
      name: 'Colorado',
      region: 'West',
      x: 4,
      y: 3,
      value: 20850
    }, {
      'hc-a2': 'CT',
      name: 'Connecticut',
      region: 'Northeast',
      x: 3,
      y: 11,
      value: 12400
    }, {
      'hc-a2': 'DE',
      name: 'Delaware',
      region: 'South',
      x: 4,
      y: 9,
      value: 4550
    }, {
      'hc-a2': 'DC',
      name: 'District of Columbia',
      region: 'South',
      x: 4,
      y: 10,
      value: 14550
    }, {
      'hc-a2': 'FL',
      name: 'Florida',
      region: 'South',
      x: 8,
      y: 8,
      value: 100300
    }, {
      'hc-a2': 'GA',
      name: 'Georgia',
      region: 'South',
      x: 7,
      y: 8,
      value: 55650
    }, {
      'hc-a2': 'HI',
      name: 'Hawaii',
      region: 'West',
      x: 8,
      y: 0,
      value: 8450
    }, {
      'hc-a2': 'ID',
      name: 'Idaho',
      region: 'West',
      x: 3,
      y: 2,
      value: 4750
    }, {
      'hc-a2': 'IL',
      name: 'Illinois',
      region: 'Midwest',
      x: 3,
      y: 6,
      value: 49750
    }, {
      'hc-a2': 'IN',
      name: 'Indiana',
      region: 'Midwest',
      x: 3,
      y: 7,
      value: 27600
    }, {
      'hc-a2': 'IA',
      name: 'Iowa',
      region: 'Midwest',
      x: 3,
      y: 5,
      value: 7400
    }, {
      'hc-a2': 'KS',
      name: 'Kansas',
      region: 'Midwest',
      x: 5,
      y: 5,
      value: 9300
    }, {
      'hc-a2': 'KY',
      name: 'Kentucky',
      region: 'South',
      x: 4,
      y: 6,
      value: 17700
    }, {
      'hc-a2': 'LA',
      name: 'Louisiana',
      region: 'South',
      x: 6,
      y: 5,
      value: 20900

    }, {
      'hc-a2': 'ME',
      name: 'Maine',
      region: 'Northeast',
      x: 0,
      y: 11,
      value: 5350
    }, {
      'hc-a2': 'MD',
      name: 'Maryland',
      region: 'South',
      x: 4,
      y: 8,
      value: 22300
    }, {
      'hc-a2': 'MA',
      name: 'Massachusetts',
      region: 'Northeast',
      x: 2,
      y: 10,
      value: 29900
    }, {
      'hc-a2': 'MI',
      name: 'Michigan',
      region: 'Midwest',
      x: 2,
      y: 7,
      value: 32900
    }, {
      'hc-a2': 'MN',
      name: 'Minnesota',
      region: 'Midwest',
      x: 2,
      y: 4,
      value: 24250
    }, {
      'hc-a2': 'MS',
      name: 'Mississippi',
      region: 'South',
      x: 6,
      y: 6,
      value: 13650
    }, {
      'hc-a2': 'MO',
      name: 'Missouri',
      region: 'Midwest',
      x: 4,
      y: 5,
      value: 25050
    }, {
      'hc-a2': 'MT',
      name: 'Montana',
      region: 'West',
      x: 2,
      y: 2,
      value: 2700
    }, {
      'hc-a2': 'NE',
      name: 'Nebraska',
      region: 'Midwest',
      x: 4,
      y: 4,
      value: 5400
    }, {
      'hc-a2': 'NV',
      name: 'Nevada',
      region: 'West',
      x: 4,
      y: 2,
      value: 12700
    }, {
      'hc-a2': 'NH',
      name: 'New Hampshire',
      region: 'Northeast',
      x: 1,
      y: 11,
      value: 4500
    }, {
      'hc-a2': 'NJ',
      name: 'New Jersey',
      region: 'Northeast',
      x: 3,
      y: 10,
      value: 30100
    }, {
      'hc-a2': 'NM',
      name: 'New Mexico',
      region: 'West',
      x: 6,
      y: 3,
      value: 11750
    }, {
      'hc-a2': 'NY',
      name: 'New York',
      region: 'Northeast',
      x: 2,
      y: 9,
      value: 78600
    }, {
      'hc-a2': 'NC',
      name: 'North Carolina',
      region: 'South',
      x: 5,
      y: 9,
      value: 44750
    }, {
      'hc-a2': 'ND',
      name: 'North Dakota',
      region: 'Midwest',
      x: 2,
      y: 3,
      value: 1650
    }, {
      'hc-a2': 'OH',
      name: 'Ohio',
      region: 'Midwest',
      x: 3,
      y: 8,
      value: 39950
    }, {
      'hc-a2': 'OK',
      name: 'Oklahoma',
      region: 'South',
      x: 6,
      y: 4,
      value: 18350
    }, {
      'hc-a2': 'OR',
      name: 'Oregon',
      region: 'West',
      x: 4,
      y: 1,
      value: 19750
    }, {
      'hc-a2': 'PA',
      name: 'Pennsylvania',
      region: 'Northeast',
      x: 3,
      y: 9,
      value: 43800
    }, {
      'hc-a2': 'RI',
      name: 'Rhode Island',
      region: 'Northeast',
      x: 2,
      y: 11,
      value: 4250
    }, {
      'hc-a2': 'SC',
      name: 'South Carolina',
      region: 'South',
      x: 6,
      y: 8,
      value: 21000
    }, {
      'hc-a2': 'SD',
      name: 'South Dakota',
      region: 'Midwest',
      x: 3,
      y: 4,
      value: 2150
    }, {
      'hc-a2': 'TN',
      name: 'Tennessee',
      region: 'South',
      x: 5,
      y: 7,
      value: 31200
    }, {
      'hc-a2': 'TX',
      name: 'Texas',
      region: 'South',
      x: 7,
      y: 4,
      value: 125350
    }, {
      'hc-a2': 'UT',
      name: 'Utah',
      region: 'West',
      x: 5,
      y: 4,
      value: 7200
    }, {
      'hc-a2': 'VT',
      name: 'Vermont',
      region: 'Northeast',
      x: 1,
      y: 10,
      value: 3000
    }, {
      'hc-a2': 'VA',
      name: 'Virginia',
      region: 'South',
      x: 5,
      y: 8,
      value: 34500
    }, {
      'hc-a2': 'WA',
      name: 'Washington',
      region: 'West',
      x: 2,
      y: 1,
      value: 32850
    }, {
      'hc-a2': 'WV',
      name: 'West Virginia',
      region: 'South',
      x: 4,
      y: 7,
      value: 6100
    }, {
      'hc-a2': 'WI',
      name: 'Wisconsin',
      region: 'Midwest',
      x: 2,
      y: 5,
      value: 19150
    }, {
      'hc-a2': 'WY',
      name: 'Wyoming',
      region: 'West',
      x: 3,
      y: 3,
      value: 1400
    }]
  }]
});

Highcharts.chart('container2', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Attempted Suicide Rates, Transgender Population in the U.S.'
  },
  subtitle: {
    text: 'Source: <a href="http://www.ustranssurvey.org/reports#USTS"> 2015 U.S. Transgender Survey </a>'
  },
  xAxis: {
    categories: [
      '18 to 25',
      '26 to 29',
      '30 to 34',
      '35 to 39',
      '40 to 44',
      '45 to 49',
      '50 to 54',
      '55 to 59',
      '60 to 64',
      '65 and older',
      'Total'
    ],
    title: {
      text: 'Age'
    },
    crosshair: true
  },
  yAxis: {
    min: 0.0,
    max: 10.0,
    title: {
      text: 'Percent'
    }
  },

  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Percent in Transgender Adults Surveyed',
    data: [10, 7, 5, 5, 4, 3, 3, 2, 2, 1, 7]

  }, {
    name: 'Total U.S. population',
    data: [1.6, 0.7, 0.6, 0.4, 0.5, 0.4, 0.6, 0.3, 0.3, 0.2, 0.6]

  }]

});

const request = require('request')

// after object destructuring
const forecast = (lat, lon, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=/*your access key*/=' + lat + ',' + lon + '&units=m'
  request({url, json: true}, (error, { body }) => {
    if(error) {
      callback('Unable to connect to weather service', undefined)
    } else if (body.error){
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degrees out. '+ 'It feels like ' + body.current.feelslike + ' degrees. The humidity is ' + body.current.humidity + '%.')
    }
  })
}

module.exports = forecast

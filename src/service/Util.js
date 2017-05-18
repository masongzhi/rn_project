/**
 * Created by masongzhi on 17-4-22.
 */
'use strict'
const url = 'http://192.168.43.93:7001/api/location/'
module.exports = {
  getLocationFind: function (params) {
    // 有可能ip换了，因为是wifi
    return fetch(`${url}FindAround${params}`)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.error(error);
      });
  },
  getLocationTextFind: function (params) {
    // 有可能ip换了，因为是wifi
    return fetch(`${url}FindText${params}`)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
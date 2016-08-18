(function() {

  exports.dataProvider = {

    getData: function getData(context, callback) {
      var data;
      console.log('getData()');
      data = {
        time: new Date().getTime(),
        items: [
          {
            time: '12:00',
            source: 'ynet',
            text: 'YNET item 1',
            link: 'http://google.com'
          },
          {
            time: '12:34',
            source: 'nrg',
            text: 'NRG item 2',
            link: 'http://google.com'
          }
        ]
      };
      callback(context, data);
    }
  };

})();

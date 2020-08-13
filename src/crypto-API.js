function coinMarket() {
  // set up spreadsheet
  var app = SpreadsheetApp;
  var ss = app.openById('1ooCvdupKHcVx_p6sWTMGf9_AL7EOq2nPWOYcw3A2LIQ');
  var activeSheet = ss.getSheetByName('crypto_beta');

  // call the crypto API
  var response = UrlFetchApp.fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=250'
  );

  // get content
  var json = response.getContentText();

  // parsing to object
  var data = JSON.parse(json);

  // MAIN CRYPTO and show crypto prices
  for (i = 0; i < [data.length]; i++) {
    if ([data[i].symbol] == 'btc') {
      activeSheet.getRange('D2').setValue([data[i].current_price]);
    }

    if ([data[i].symbol] == 'eth') {
      activeSheet.getRange('G2').setValue([data[i].current_price]);
    }

    if ([data[i].symbol] == 'usdt') {
      activeSheet.getRange('I2').setValue([data[i].current_price]);
    }

    if ([data[i].symbol] == 'erd') {
      activeSheet.getRange('E2').setValue([data[i].current_price]);
    }
  }

  // ALT COIN
  function altCoin(curr, laCase) {
    var response = UrlFetchApp.fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=' + curr);
    var json = response.getContentText();
    var data = JSON.parse(json);
    activeSheet.getRange(laCase).setValue(data[0].current_price);
  }

  altCoin(
    'crypto20',
    'F2'
  );

  altCoin(
    'polis',
    'H2'
  );
}

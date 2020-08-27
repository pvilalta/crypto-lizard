function coinMarket() {
  // set up spreadsheet
  var app = SpreadsheetApp;
  var ss = app.openById('1ooCvdupKHcVx_p6sWTMGf9_AL7EOq2nPWOYcw3A2LIQ');
  var activeSheet = ss.getSheetByName('crypto_beta');

  // ALT COIN
  function altCoin(curr, laCase) {
    var response = UrlFetchApp.fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=' +
        curr
    );
    var json = response.getContentText();
    var data = JSON.parse(json);
    activeSheet.getRange(laCase).setValue(data[0].current_price);
  }
  
  altCoin('bitcoin', 'D2');
  
  altCoin('ethereum', 'G2');
  
  altCoin('tether', 'I2');

  altCoin('elrond', 'E2');

  altCoin('crypto20', 'F2');

  altCoin('polis', 'H2');
}

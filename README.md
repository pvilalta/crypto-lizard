# Crypto Lizard

## **Project**

This program permit to get the value of any crypto-currencies automaticly in a Google spreadsheet.
Every hours the program will call the API to get the newest informations from the market.

You can find thereafter a tutorial to deploy it by your self

This program is powered by [Coin Gecko](https://www.coingecko.com/en/api) (API), and developed with [clasp](https://github.com/google/clasp) plugin on VSC

## **Tutorial**

1. Copy and past the code from **crypto-API.js** in the google.scrypt IDE

2. Set up your spreedsheet informations

   - line 4 : spreedsheet ID
   - line 5 : sheet name

3. Modify as you need the **MAIN CRYPTO** bloc

   - crypto's symbol
   - the case where you want it to

   /!\ this part concern the top 250 of the market, if you need to follow a crypto above this rank, you have to follow the next instructions

4. Use the altCoin function adding 2 parameters
   - crypto symbol
   - the case where you want it to

v1.0

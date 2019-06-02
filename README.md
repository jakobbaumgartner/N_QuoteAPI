# N_QuoteAPI

Ta program nam na podlagi http requesta vrne citat iz enega od treh različnih seznamov. Citat je generiran random s pomočjo modula Math in vrnjen preko http. Vrne nam tudi status code.

Zahtevamo lahko:
 * /great - za citate znanih ljudi
 * /tv - za citate iz tv serij
 * /rickandmorty - za citate iz Rick and Morty
 * /help za pomoč.
 * (/ vrne 404)
 
 ## Tehnologije:
  * nodejs
    * MATH
    * fs
  * Express

## Viri seznamov citatov:

* https://github.com/sys99/quotes
* https://github.com/msramalho/json-tv-quotes
* https://github.com/AndrewReitz/rick-and-morty-quotes-json

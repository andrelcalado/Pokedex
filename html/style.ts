export const style = () => {
    return '<style>\
* {\
    margin: 0px;\
    padding: 0px;\
}\
\
body {\
    padding: 50px;\
    font-family: sans-serif;\
    justify-content: center;\
    flex-wrap: wrap;\
}\
\
.pokemonCard {\
    cursor: pointer;\
    position: relative;\
    bottom: 0;\
    box-shadow: 0px 0px 25px rgba(54, 54, 54, 0.2);\
    border-radius: 5px;\
    overflow: hidden;\
    margin: 10px;\
    width: 200px;\
    transition: 0.4s;\
}\
\
.pokemonCard:hover{\
    bottom: 10px;\
    box-shadow: 0px 0px 25px rgba(1, 157, 201, 0.2);\
}\
\
.pokemonCard:hover .saibaMaisContainer > .saibaMaisButton > button {\
    background-color: rgb(0, 132, 255);\
}\
\
.cardHeader {\
    padding: 20px 20px 0px 20px;\
}\
\
.pokemonTitleContainer {\
    justify-content: space-between;\
    align-items: center;\
    color: rgb(70, 70, 70)\
}\
\
.pokemonImg {\
    margin-bottom: -25px;\
}\
\
.pokemonImg > img {\
    width: 100%;\
}\
\
.pokemonDesc {\
    padding: 30px 20px 10px 20px;\
    flex-direction: column;\
    background-color: #fff;\
    border-radius: 15px;\
}\
\
.descLabels {\
    justify-content: space-between;\
    margin-bottom: 10px;\
    font-size: 15px;\
    padding-bottom: 5px;\
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\
}\
\
.attribute {\
    color: rgb(80, 80, 80);\
}\
\
.pokemonTypesContainer > .type {\
    margin: 3px;\
    padding: 5px 13px;\
    background-color: rgba(0, 0, 0, 0.1);\
    color: rgb(241, 241, 241);\
    font-size: 12px;\
    border-radius: 20px;\
}\
\
.pokemonTypesContainer {\
    flex-wrap: wrap;\
    margin-bottom: -20px;\
}\
\
.saibaMaisContainer {\
    justify-content: center;\
}\
\
.saibaMaisContainer > .saibaMaisButton {\
    margin-top: -10px;\
}\
\
.saibaMaisContainer > .saibaMaisButton > button {\
    background-color: rgb(0, 89, 255);\
    border: none;\
    margin-bottom: 10px;\
    padding: 10px 20px;\
    border-radius: 5px;\
    color:#fff;\
    transition: 0.4s;\
}\
\
.pokemonTitleContainer, .descLabels, .pokemonDesc, body, .pokemonTypesContainer,\
.saibaMaisContainer {\
    display: flex;\
}\
</style>'};
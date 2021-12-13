export const style = '<style>\
* {\
    margin: 0px;\
    padding: 0px;\
}\
\
body {\
    flex-wrap: wrap;\
    padding: 50px;\
    font-family: sans-serif;\
    justify-content: center;\
}\
\
.pokemonCard {\
    margin: 20px;\
    position: relative;\
    bottom: 0;\
    box-shadow: 0px 0px 25px rgba(54, 54, 54, 0.2);\
    border-radius: 5px;\
    overflow: hidden;\
    width: 200px;\
    height: 450px;\
    transition: 0.4s;\
}\
\
.pokemonCard:hover {\
    bottom: 10px;\
    box-shadow: 0px 0px 25px rgba(1, 157, 201, 0.2);\
}\
\
.cardHeader {\
    padding: 20px 20px 0px 20px;\
    background-color: rgb(179, 222, 243);\
    \
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
.pokemonTitleContainer, .descLabels, .pokemonDesc, body {\
    display: flex;\
}\
</style>';
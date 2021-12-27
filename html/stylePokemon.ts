export const stylePokemon = `<style>
* {
    margin: 0px;
    padding: 0px;
}

body {
    font-family: sans-serif;
    justify-content: center;
    align-items: center;
    padding: 50px;
}

.pokemonCard {
    box-shadow: 0px 0px 25px rgba(54, 54, 54, 0.2);
    width: 70%;
    display: flex;
}

.cardHeader {
    width: 50%;
    padding: 20px 20px 0px 20px;
    background-color: #ff9fd9;
}

.pokemonTitleContainer {
    justify-content: space-between;
    align-items: center;
    color: rgb(70, 70, 70)
}

.pokemonImg {
    margin-bottom: -30px;
}

.pokemonImg > img {
    width: 100%;
}

.pokemonDesc {
    padding: 30px 20px 10px 20px;
    flex-direction: column;
    background-color: #fff;
    border-radius: 15px;
    width: 50%;
}

.descLabels {
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 15px;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.attribute {
    color: rgb(80, 80, 80);
}

.pokemonTypesContainer > .type {
    margin: 3px;
    padding: 5px 13px;
    background-color: rgba(0, 0, 0, 0.1);
    color: rgb(241, 241, 241);
    font-size: 12px;
    border-radius: 20px;
}

.saibaMaisContainer {
    justify-content: center;
}

.saibaMaisContainer > .saibaMaisButton {
    margin-top: 10px;
}

.saibaMaisContainer > .saibaMaisButton > button:hover {
    background-color: rgb(0, 140, 255);
}

.saibaMaisContainer > .saibaMaisButton > button {
    cursor: pointer;
    background-color: rgb(0, 89, 255);
    border: none;
    margin-bottom: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    color:#fff;
    transition: 0.4s;
}

.pokemonTitleContainer, .descLabels, .pokemonDesc, body, .pokemonTypesContainer,
.saibaMaisContainer {
    display: flex;
}
</style>`
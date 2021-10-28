import { createGlobalStyle } from 'styled-components'
import background from './images/background.jpg'

const GlobalStyles = createGlobalStyle `
    
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-image: url(${background});
        background-size: cover;
        background-repeat: no-repeat;
    }

    .App {
        margin: 0;
        padding: 0;
    }
    
    * {
        box-sizing: border-box;
    }

    .main {
    max-width: 555px;
    height: auto;
    max-height: 64vh;
    min-height: 64vh;
    position: relative;
    margin: 0 auto;
    padding: 8px 0px;
    padding-bottom: 2em;
    z-index: 1;
    background: #4b6c80;;
    box-shadow: 1px 1px 24px #00000038;
    background-size: contain;
    background-attachment: fixed;    
    overflow: hidden;
    overflow-y: scroll;
    padding-bottom: 3em;
}

.main__container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: .55em;
}

.main__title {
    text-align: center;
    font-weight: 300;
    color: white;
    margin: 0;
    margin-bottom: .5em;
}


.main__subcontainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}

.main__box {
    width: 38%;
    margin: .15em;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #588091;
    border-radius: 15px;
    color: white;
    font-weight: 400;
    font-size: 60px;
    transition:.5s;
    flex-direction: column;
    padding: 25px 16px;
}


.main__box:hover {
    background: #2a4b5e;
}

.main__box h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    margin: 7px 0;
}

@media screen and (max-width: 992px) {
    .header, .main, .footer {
        min-width: 100%;
    }
}

`
export default GlobalStyles
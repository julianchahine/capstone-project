import { createGlobalStyle } from 'styled-components'
import background from './images/background.jpg'

const GlobalStyles = createGlobalStyle`
    
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-image: url(${background});
        background-size: 100% 100%;
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
        min-height: 73vh;
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
        width: 44%;
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

    @import url('https://fonts.googleapis.com/css?family=Varela+Round');

.sidebarMenu:focus + .main {
    filter: blur(3px)
}

.maine {
    margin: 0 auto;
    display: block;
    height: 100%;
    margin-top: 60px;
}
.mainInner{
    display: table;
    height: 100%;
    width: 100%;
    text-align: center;
}
.mainInner div{
    display:table-cell;
    vertical-align: middle;
    font-size: 3em;
    font-weight: bold;
    letter-spacing: 1.25px;
}
#sidebarMenu {
    height: 77%;
    background: #294454;
    position: fixed;
    left: 0;
    width: 250px;
    margin-top: 60px;
    transform: translateX(-250px);
    transition: transform 250ms ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
}
.sidebarMenuInner{
    margin:0;
    padding:0;
    border-top: 1px solid rgba(255, 255, 255, 0.10);
}
.sidebarMenuInner li{
    list-style: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, 0.10);
}
.sidebarMenuInner li span{
    display: block;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.50);
}
.sidebarMenuInner li a{
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
}
input[type="checkbox"]:checked ~ #sidebarMenu {
    transform: translateX(0);
}

input[type=checkbox] {
    transition: all 0.3s;
    box-sizing: border-box;
    display: none;
}
.sidebarIconToggle {
    transition: all 0.3s;
    box-sizing: border-box;
    cursor: pointer;
    position: absolute;
    z-index: 99;
    height: 100%;
    width: 100%;
    top: 22px;
    left: 15px;
    height: 22px;
    width: 22px;
}
.spinner {
    transition: all 0.3s;
    box-sizing: border-box;
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: #fff;
}
.horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 3px;
}
.diagonal.part-1 {
    position: relative;
    transition: all 0.3s;
    box-sizing: border-box;
    float: left;
}
.diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 3px;
}
input[type=checkbox]:checked ~ .sidebarIconToggle > .horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    opacity: 0;
}
input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-1 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(135deg);
    margin-top: 8px;
}
input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(-135deg);
    margin-top: -9px;
}

    `
export default GlobalStyles

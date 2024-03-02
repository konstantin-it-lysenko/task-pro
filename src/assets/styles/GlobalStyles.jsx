import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
    --easedTransition: 350ms ease-in-out;
}

html[data-theme='dark']{
  --text-color:#fff;
  --bar-color:#121212;
  --header-color:#161616;
  --background-color: #1f1f1f;
  --grey-text-color:rgba(255, 255, 255, 0.8);
  --lightgrey-text-color:rgba(255, 255, 255, 0.5);
  --accent-color:#bedbb0;
  --input-color:#bedbb0;
  --chose-color:#1f1f1f;
  --card-bg: #121212;
  --scroll-bar-color: #121212;
  --scroll-bar-bg: rgba(255, 255, 255, 0.08);
  --svg-back-color:#1f1f1f;
  --svg-color:#151515;
  --icon-stroke-color: #fff;
  --modal-background: #151515;
  --loader-color: #53cf17;
  --priority-blue: #8FA1D0;
  --priority-pink: #E09CB5;
  --priority-green: #BEDBB0;
  --priority-gray: rgba(255, 255, 255, 0.3);
  --btn-icon-bg: #161616;
  --btn-icon-color: #fff;
  --sidebar-add-btn:#bedbb0;
  --sidebar-icon-color:#fff;
  --sidebar-plus-icon: #161616;
  --sidebar-active-board:#1f1f1f;
  --sidebar-help-span:#bedbb0;
  --sidebar-logout:#bedbb0;
  --sidebar-lightning-fill: #fff;
  --sidebar-lightning-bg: rgba(255, 255, 255, 0.08);
  --sidebar-myboard-text:rgba(255, 255, 255, 0.5);
  --sedibar-text: #fff;
  --sidebar-help-container: #1f1f1f;
}

html[data-theme='light']{
  --text-color:#161616;
  --bar-color:#fff;
  --header-color:#fcfcfc;
  --background-color: #f6f6f7;
  --grey-text-color:rgba(22, 22, 22, 0.8);
  --lightgrey-text-color:rgba(22, 22, 22, 0.5);
  --accent-color:#bedbb0;
  --input-color:#bedbb0;
  --chose-color:#f6f6f7;
  --card-bg: #fff;
  --scroll-bar-color: rgba(22, 22, 22, 0.1);;
  --scroll-bar-bg: #e8e8e8;
  --svg-back-color:#FFFFFF;
  --svg-color:#f6f6f7;
  --icon-stroke-color: #161616;
  --modal-background: #fcfcfc;
  --loader-color: #53cf17;
  --priority-blue: #8FA1D0;
  --priority-pink: #E09CB5;
  --priority-green: #BEDBB0;
  --priority-gray: rgba(22, 22, 22, 0.3);
  --btn-icon-bg: #161616;
  --btn-icon-color: #fff;
    --sidebar-add-btn:#bedbb0;
	  --sidebar-icon-color:#161616;
 --sidebar-plus-icon: #161616;
 --sidebar-active-board:#f6f6f7;
 --sidebar-help-span:#bedbb0;
 --sidebar-logout:#bedbb0;
 --sidebar-lightning-fill: #fff;
 	--sidebar-lightning-bg: #161616;
--sidebar-myboard-text:rgba(22, 22, 22, 0.5);
--sedibar-text: #161616;
--sidebar-help-container:#f6f6f7;
}

html[data-theme='violet']{
  --text-color:#161616;
  --bar-color: #5255bc;
  --header-color:#fff;
  --background-color:  #B8BCFD;
  --grey-text-color:rgba(22, 22, 22, 0.8);
  --lightgrey-text-color:rgba(22, 22, 22, 0.5);
  --accent-color:#5255bc;
  --input-color:#5255bc;
  --chose-color:rgba(255, 255, 255, 0.5);
  --card-bg: #fff;
  --scroll-bar-color: #b8bcfd;
  --scroll-bar-bg: #fff;
  --svg-back-color:#ecedfd;
  --svg-color:#FFFFFF;
  --icon-stroke-color: #161616;
  --modal-background: #fcfcfc;
  --loader-color: #3d1780;
  --priority-blue: #8FA1D0;
  --priority-pink: #E09CB5;
  --priority-green: #BEDBB0;
  --priority-gray: rgba(22, 22, 22, 0.3);
  --btn-icon-bg: #fcfcfc;
  --btn-icon-color: #161616;
  --sidebar-add-btn:#b8bcfd;
  --sidebar-icon-color:#fff;
  --sidebar-plus-icon: #fff;
  --sidebar-active-board: rgba(255, 255, 255, 0.5);
  --sidebar-help-span:#5255bc;
  --sidebar-logout: #fff;
  --sidebar-lightning-fill: #5255bc;
  --sidebar-lightning-bg: #fff;
  --sidebar-myboard-text:rgba(255, 255, 255, 0.5);
  --sedibar-text: #fff;
  --sidebar-help-container:rgba(236, 237, 253, 0.4);
}

*,
*::before,
*::after  {
  box-sizing: border-box;
}

body {
    font-family: 'Poppins', 'Golos Text', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    margin: 0;
    color: var(--text-color);
    background-color: var(--background-color);
    transition: background-color var(--easedTransition), color var(--easedTransition);
}

#root {
  @media screen and (min-width: 1440px){
    display: grid;
    grid-template: "sidebar header header" 68px
        "sidebar main main" auto 
        / 260px auto auto;
  }
}

header {
  @media screen and (min-width: 1440px){
    grid-area: header;
    grid-column: 2 / -1;
  }
}

main {
  @media screen and (min-width: 1440px){
    grid-area: main;
    grid-column: 2 / -1;
    grid-row: 2 / -1;
  }
}

aside {
  @media screen and (min-width: 1440px){
    grid-area: sidebar;
    grid-column: 1 / 1;
    grid-row: 1 / -1;
  }
}

 ::-webkit-scrollbar {
  width: 7px;

  @media screen and (min-width: 768px){
    width: 10px;
  }
} 

::-webkit-scrollbar-thumb {
  background-color: var(--scroll-bar-color);
  border-radius: 7px;
}

::-webkit-scrollbar-track {
   background-color: var(--scroll-bar-bg);
   color: rgba(255, 255, 255, 0.4);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  font-family: inherit;
  border: none;
  cursor: pointer;
}

input {
  font-family: inherit;

  &:focus {
    outline: none;
  }
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  border: none;
}
`;

export default GlobalStyles;

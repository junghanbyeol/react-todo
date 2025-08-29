import { createGlobalStyle, ThemeProvider  } from "styled-components";
import ToDoList from "./component/ToDoList";
import { darkTheme, lightTheme } from "./theme";
import styled from "styled-components";
import React, { useEffect, useMemo, useState } from "react";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  /* font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
  line-height: 1.2; */
}
a {
  text-decoration:none;
  color:inherit;
}
body {
  font-weight: 400;
  font-family: 'Source Sans Pro', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  background:
    radial-gradient(1200px 500px at 10% -10%, rgba(120,166,255,0.25), transparent 60%),
    radial-gradient(1200px 600px at 100% 0%, rgba(110,231,183,0.15), transparent 55%),
    ${(p)=>p.theme.bgColor};
  color:${(p)=>p.theme.textColor};
}

:focus-visible {
  outline: 2px solid ${(p)=>p.theme.primary};
  outline-offset: 2px;
  border-radius: 10px;
}

::selection {
  background: ${(p)=>p.theme.primary};
  color: #0b0f14;
}
`;

const ThemeToggle = styled.button`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 50;
  height: 42px;
  min-width: 42px;
  padding: 0 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  border-radius: 999px;
  border: 1px solid ${(p)=>p.theme.cardBorder};
  background: ${(p)=>p.theme.surface};
  color: inherit;

  box-shadow: ${(p)=>p.theme.shadow};
  backdrop-filter: blur(${(p)=>p.theme.blur});
  cursor: pointer;
  transition: transform .08s ease, filter .2s ease, background .2s ease;

  &:hover { filter: brightness(1.05); }
  &:active { transform: translateY(1px); }

  /* 작은 점(상태 표시) */
  &::after{
    content: "";
    width: 8px; height: 8px;
    border-radius: 999px;
    background: ${(p)=>p.theme.primary};
    box-shadow: 0 0 0 4px rgba(59,130,246,.22);
  }
`;

function App() {
  const getInitial = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [mode, setMode] = useState<"light" | "dark">(getInitial);
  const theme = useMemo(() => (mode === "dark" ? darkTheme : lightTheme), [mode]);

  useEffect(() => {
    localStorage.setItem("theme", mode);
    // body data-attribute는 필요 시 전역 스타일 커스텀에 유용
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  const toggle = () => setMode((m) => (m === "dark" ? "light" : "dark"));
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ThemeToggle onClick={toggle} aria-label="테마 토글">
          {mode === "dark" ? "☀️ Light" : "🌙 Dark"}
        </ThemeToggle>
        <ToDoList />
      </ThemeProvider>
    </>
  );
}

export default App;
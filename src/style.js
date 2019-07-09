import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
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
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
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

  @font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1562471030722'); /* IE9 */
  src: url('./iconfont.eot?t=1562471030722#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAVsAAsAAAAACmwAAAUeAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDZAqHIIYnATYCJAMgCxIABCAFhG0HcBsZCVFUTwpkPyRJSuSTjechCBMGgHQAUAAAAABeHoiH/9/v2z73nidj2sTROB0RScRZP5E1UcUqLUGpsPpoJr8/5973ATfHMiP6pMakENI2aVNKL80fgp7QO7+bAlazJMwm5zbPe2ZyUMojGZyAdlDe7esobms7fkFcWlNdIFlXifEFbwjuvkToANX0aifUhANgB+g2IUGYCee3mFexg1N4UDb/TpcTGLeqWeD68OQMxCXYLhCvmY4hXrDJDnbojW3DoSl+avTlUzkCfrjfj1O5iFM0Fez6eDSkQe8B/I3q8UDzyjh8nc+D41FUXASS+Njo+yAUcheFjN/vlh4Ck3pFHsRBHnQHTw7o8J8DBXqrhUyYNC1Is9Wg06rj/vOEhmgxNElp+/mOA0qZcFCLluKkFpXilloUijtq0IWfUIMxeER7NKA3h8wC8yAWQfwCxJ4jyidnyPA11rcTOMTEqLw8PEIQhcDJTaVKF6GjOiy6/gTT/eCG694d3TEaMs5w28c9Dm2Q6t7GhmgmE2WxMAYDuXMnJS46MuoGWvEw6djFw8KRS5pBg+/ckbbiGxbRyghvQ/R+74rUCEZWCQZWCVXjIjG1IiG1gT0D9EG8n9ZH5kMJMF8KFBRcI83XJBoYtQjhADAO8q3x3TgB6RhGd6exRKb6AFo/hG+CYAmhq0+Uqzr3IER8UIS7ZqDwxoBw7SCE9wtV9WEETiJHPARCAAQXwMsMYCMREEbAPUTpTBTNV9EYftgK83JKAGl5HVPdprnk61s1jVXfgavqjHoZRr73094Vrdoz8VXsr/meErOtbL0ZEjH/4NrrflvW0lopZtt8ONXAq2v3OS8N1ObbfsgJJJ+9pZutVHBaevLZrM096RbN3cA/aHVl5evbN/hvF+ov7ytXWirnK+8/J2VWFmX5xf7ycw27cW6GBHjIuElnZkq7yXj0SJk1Z2byxR4yPfyo1m44RmqOAs5JGTvpc1Nj7rsIpUBRfAJgLd7lXNXxPI70X3FgJlv7IGz20UnWLI7f1jm526Y6IKeddoYamkQMgzxszZ+EY7mHYkK/xZU+KkkDKdVrD3AkpyI7UfeoTmRHogvpcTpJj0zgoBLNA1gKrqYPdIx2VKTTSsJKSvsXgd9LQUGPdHLs2K5OTV1ls62Ab9kuc/z5k8sh9h2ufl8ozP5HfTgM3T+7tPL15azi++39R3gkW6918hKXlA2Xt5tBY037Xn5TLutudRxrGuAAYBiuFcFrqH/K1EN0uW7WawDDf1bFW6zE+sCcW4Pqn/dXwb/ttqUIcud/HijB31tf8l1kyE3AIX9ADK36p6qQU/nQgL3P23DKJubC93PKOfXjYgn/0dC8X0YsoRsJvaUERWcFqt42KWkXoTFhD1q9SzDugpGjJywQQiLHcN4FgTDrBoppv6Ga9UFK2g80lv1DazZCMO5lFJ1ywm6w5IAgWBINKTuIqdyl0imTvnmK6Hkbi7zGceeI8FkSZVOZcnGEuETMsYe/qeekpIgK7qBhcjVi2xx5gptElSlDSq89naZNT5RSuQNJ1wgEJhEaRLEDYVSci5rlpWTl56cQujwbJjr63qXnEIKPrR7JSskgSCPIRfXdy9q+TbocSaJ8K0rgHMgw9RC2yHGI17yRiVBJKcaIjKddms2jWJRan3De6RUwDm7TR4kaGU200UUfY8ZH2NU1bDKzW0zBqiW5l9w1mItdcn/iBvtwoW/wvMm2Gd7FLOx7zI3t5B3MFQYAAAA=') format('woff2'),
  url('./iconfont.woff?t=1562471030722') format('woff'),
  url('./iconfont.ttf?t=1562471030722') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1562471030722#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


`



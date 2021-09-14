import {styles as imba_styles} from 'imba'/*$path$*/;

/*body*/
import 'imba/preflight.css'/*$path$*/;


imba_styles.register('xggm51',`
* {font-family: var(--font-sans,system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");}
body {margin: 0rem;
padding: 0rem;
font-family: var(--font-sans,system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
font-size: 16px;
line-height: 24px;
--u_lh: 24px;
color: hsla(217.24,32.58%,17.45%,100%);}
button {padding-left: 0.75rem;
padding-right: 0.75rem;
padding-top: 0.4rem;
padding-bottom: 0.4rem;
height: 2.2rem;
min-width: 2rem;
background: hsla(210.00,40.00%,96.08%,100%);
display: flex;
flex-direction: row;
column-gap: 0.5rem;
--u_cg: 0.5rem;
align-items: center;
border: 1px solid hsla(214.29,31.82%,91.37%,100%);
border-radius: 4px;
font-size: 12px;
line-height: 18px;
--u_lh: 18px;
color: hsla(240.00,5.88%,10.00%,100%);
font-weight: 500;
cursor: pointer;}
button:hover {background: hsla(214.29,31.82%,91.37%,100%);}
button.green {background: hsla(0.00,0.00%,100.00%,0%);
color: var(--brand-dark);
border-color: var(--brand-dark);}
button.submit {background: hsla(173.41,80.39%,40.00%,100%);
color: hsla(0.00,0.00%,100.00%,100%);
font-weight: 400;
letter-spacing: 0.2px;
transition: all 0.15s ease;}
button.submit:hover {background: hsla(174.67,83.85%,31.57%,100%);}

button.submit:disabled:hover {background: hsla(174.67,83.85%,31.57%,100%);}
button.unstyled {padding: 0rem;
background: hsla(0.00,0.00%,100.00%,100%);
border: none;
min-width: auto;}
button.link {padding: 0rem;
background: hsla(0.00,0.00%,100.00%,0%);
border: none;
color: hsla(240.00,3.83%,46.08%,100%);
font-weight: 400;}
button.link:hover {text-decoration: underline;}
button.link:disabled {background: hsla(173.41,80.39%,40.00%,100%);
color: hsla(0.00,0.00%,100.00%,100%);
opacity: 1;}
button.link:disabled:hover {background: hsla(173.41,80.39%,40.00%,100%);}
button:disabled {cursor: not-allowed;
opacity: 0.7;}
button:disabled:hover {background: hsla(240.00,5.88%,90.00%,100%);}
.button-links {display: flex;
column-gap: 0.25rem;
--u_cg: 0.25rem;}
.button-links .link:focus {outline: none;}
.button-links .link:not(:last-child)::after {content: "|";
margin-right: 0.25rem;}
label {display: block;
color: hsla(240.00,3.83%,46.08%,100%);
font-size: 14px;
line-height: 22px;
--u_lh: 22px;
margin-bottom: 0.25rem;}
input,textarea {padding-left: 1rem;
padding-right: 1rem;
height: 2.5rem;
min-width: 6rem;
border: 1px solid hsla(214.29,31.82%,91.37%,100%);
border-radius: 4px;
font-size: 13px;
line-height: 20px;
--u_lh: 20px;
outline: none;}
input:focus,textarea:focus {border-color: hsla(217.22,91.22%,59.80%,100%);
box-shadow: rgb(49, 130, 206) 0px 0px 0px 1px;}
input::placeholder,textarea::placeholder {font-size: 14px;
line-height: 22px;
--u_lh: 22px;}

input.typing:focus,textarea.typing:focus {border: 2px solid var(--brand-dark);
box-shadow: none;}
textarea {width: 100%;
height: 8rem;
padding-left: 0.75rem;
padding-right: 0.75rem;
padding-top: 0.5rem;
padding-bottom: 0.5rem;}`);
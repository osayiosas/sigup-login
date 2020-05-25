import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'import': 'url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap')',
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'background': 'linear-gradient(#eeeff0,#d8dbdd)',
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'overflow': 'hidden',
    'fontFamily': ''Noto Sans TC', sans-serif'
  },
  'center': {
    'margin': [{ 'unit': 'px', 'value': 70 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 70 }, { 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': 'px', 'value': 540 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '' }, { 'unit': 'string', 'value': '#9e9894' }],
    'borderRadius': '5px',
    'position': 'relative',
    'background': '#72706e'
  },
  'center btns': {
    'display': 'flex',
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 30 }]
  },
  'btns a': {
    'textDecoration': 'none',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 75 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 75 }],
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'color': 'white',
    'fontFamily': 'arial',
    'background': '#aaa8a7',
    'borderRadius': '2px'
  },
  'aa2': {
    'background': '#dfdad7'
  },
  'center header': {
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 40 }],
    'color': 'white',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }]
  },
  'form input': {
    'height': [{ 'unit': 'px', 'value': 45 }],
    'width': [{ 'unit': 'px', 'value': 200 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'background': 'none',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '' }, { 'unit': 'string', 'value': '#e8914a' }],
    'borderRadius': '2px',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'marginLeft': [{ 'unit': 'px', 'value': 35 }],
    'outline': 'none',
    'color': 'white'
  },
  '::placeholder': {
    'color': '#e3eaee'
  },
  'form inputlstname': {
    'marginLeft': [{ 'unit': 'px', 'value': 20 }]
  },
  'form inputemail': {
    'width': [{ 'unit': 'px', 'value': 445 }],
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'form input[type="submit"]': {
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 35 }],
    'width': [{ 'unit': 'px', 'value': 465 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'fontSize': [{ 'unit': 'px', 'value': 23 }],
    'cursor': 'pointer',
    'color': 'white',
    'background': '#e8914a',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#2573a7' }]
  },
  'form input[type="submit"]:hover': {
    'background': '#5d6148',
    'transition': '.5s'
  },
  'center header1': {
    'paddingBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'center login-form': {
    'display': 'none'
  },
  'center signup_error': {
    'userSelect': 'none',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': -20 }, { 'unit': 'px', 'value': 35 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 35 }],
    'color': '#ff9999',
    'background': 'rgba(255,0,0,.3)',
    'borderRadius': '3px',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#b30000' }],
    'display': 'none'
  }
});

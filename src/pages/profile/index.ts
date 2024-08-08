import Handlebars from "handlebars";
import './profile.scss';

export {default as ProfilePage} from './profile.hbs?raw';

Handlebars.registerHelper('profileInfo', () => {
  return [
    {
      id:1,
      param: 'Почта',
      label: 'katekate@ya.ru',
    },
    {
      id:2,
      param: 'Логин',
      label: 'katekate',
    },
    {
      id:3,
      param: 'Имя',
      label: 'Катя',
    },
    {
      id:4,
      param: 'Фамилия',
      label: 'Лим',
    },
    {
      id:5,
      param: 'Имя в чате',
      label: 'Катя',
    },
    {
      id:6,
      param: 'Телефон',
      label: '+7 978 999 99 99',
    },
  ]
})
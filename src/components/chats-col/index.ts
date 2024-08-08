import Handlebars from "handlebars";
import './chats-col.scss';

export {default as ChatsCol} from './chats-col.hbs?raw';

Handlebars.registerHelper('users', () => {
  return [
    {
      id:1,
      name: 'рабочий чат',
      message: 'Коллеги, всем привет, обратите внимание',
      image: '../../../dist/ava1.jpg',
    },
    {
      id:2,
      name: 'поход',
      message: 'выходим в 5',
      image: '../../../dist/ava1.jpg',
    }, {
      id:3,
      name: 'Коля',
      message: '....',
      image: '../../../dist/ava2.jpg',
    }, {
      id:4,
      name: 'Наташа',
      message: '....',
      image: '../../../dist/ava2.jpg',
      active: true,
    }, {
      id:5,
      name: 'тренировки',
      message: 'кто сегодня будет?',
      image: '../../../dist/ava1.jpg',
    }, {
      id:6,
      name: 'Сергей',
      message: '....',
      image: '../../../dist/ava1.jpg',
    }, {
      id:7,
      name: 'Лера',
      message: '....',
      image: '../../../dist/ava1.jpg',
    }, {
      id:8,
      name: 'Оксана Юрьевна',
      message: '....',
      image: '../../../dist/ava2.jpg',
    }, {
      id:9,
      name: 'Денис',
      message: '....',
      image: '../../../dist/ava1.jpg',
    }, {
      id:10,
      name: 'др Маши',
      message: '....',
      image: '../../../dist/ava1.jpg',
    },
  ]
})
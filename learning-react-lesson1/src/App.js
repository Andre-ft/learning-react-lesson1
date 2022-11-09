import React from 'react';
import paintings from './paintings.json';
import Painting from './components/Painting';

export default function App() {
  const element = React.createElement(
    'div',
    { a: 5, b: 10, key: 'aac' },
    'Hello world',
    'Hello vasya',
    'Hello Petya',
  );
  // console.log(element);

  const jsxElement = <div key="aad">Hello jsx Element</div>;

  const secondElement = React.createElement('span', {
    key: 'aaa',
    children: 'Hi ',
  });
  const thirdElement = React.createElement('span', {
    key: 'aab',
    children: 'my world!',
  });

  const nextJsxElement = (
    <div key="aae">
      <h1>Next jsx element</h1>
      {secondElement}
      {thirdElement}
    </div>
  );

  const data = {
    id: 'id-1',
    url: 'https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg',
    title: 'Feathers. Art abstract',
    price: 500,
    author: {
      tag: 'ractapopulous',
      url: 'https://pixabay.com/users/ractapopulous-24766/',
    },
    quantity: 10,
  };

  const onePainting = (
    <div key="aaf">
      <img src={data.url} alt={data.title} width="480" />
      <h2>{data.title}</h2>
      <p>
        Автор: <a href={data.author.url}>{data.author.tag}</a>
      </p>
      <p>Цена: {data.price} кредитов</p>
      <p>
        Доступность: {data.quantity < 10 ? 'заканчивается' : 'есть в наличии'}
      </p>
      <button type="button">Добавить в корзину</button>
    </div>
  );

  return [
    element,
    secondElement,
    thirdElement,
    jsxElement,
    nextJsxElement,
    onePainting,
    <Painting key="aag" a="5" b={{ c: 1 }} data={data} />,
  ];
}

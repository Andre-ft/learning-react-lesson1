// import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './defaultImage.jpg';

console.log(defaultImage);

function Painting({
  url = defaultImage,
  title,
  author = 'не известно',
  price,
  quantity,
}) {
  // const {
  //   url = defaultImage,
  //   title,
  //   author = 'не известно',
  //   price,
  //   quantity,
  // } = data;
  // console.log('props = ', Painting.props);
  // const isOnline = true;
  // console.log(url, author, quantity, price);
  // console.log(a, b);
  return (
    <div>
      {/* {!isOnline && 'NOT onLine'}
      {isOnline && <div>online is on line</div>}
      {isOnline ? 'ONLINE' : 'O NO, NOT ONLINE'} */}
      <img src={url ?? defaultImage} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={author.url}>{author.tag}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
      <button type="button">Добавить в корзину</button>
      <br />
      <br />
    </div>
  );
}

Painting.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

// Painting.propTypes = {
//   data: PropTypes.shape({
//     url: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     author: PropTypes.object.isRequired,
//     price: PropTypes.number.isRequired,
//     quantity: PropTypes.number.isRequired,
//   }),
// };

export default Painting;

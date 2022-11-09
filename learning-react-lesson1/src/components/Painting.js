export default function Painting({ a, b, data }) {
  const { url, title, author = 'не известно', price, quantity } = data;
  console.log(a, b);
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={author.url}>{author.tag}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

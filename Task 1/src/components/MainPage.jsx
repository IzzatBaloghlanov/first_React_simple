import style from './MainPage.module.css';
import Card from './Card';

const Main = () => {
  return (
    <main className={style.main}>
      <h2>Main Component</h2>
      <Card />
    </main>
  );
};

export default Main;

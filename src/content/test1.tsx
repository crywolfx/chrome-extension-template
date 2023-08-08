import style from './test1.module.less';

export const config = {
  component: true,
  shadow: true,
}

const App = () => {
  return <div className={style.test}>123</div>
}

export default App
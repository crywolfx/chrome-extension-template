import style from './test1.module.less';

export const config = {
  component: true,
  shadow: true,
}

const App = () => {
  return <div className={style.test}>dasdasdasdas</div>
}

export default App
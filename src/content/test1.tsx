import style from './test1.module.less';

export const config = {
  component: true,
  shadow: true,
}

const App = () => {
  return <div className={style.test}>2023年08月03日21:26:56</div>
}

export default App
import style from './test2.module.less';

export const config = {
  component: true,
  shadow: true,
}


const App = () => {
  return <div className={style.test}>test2</div>
}

export default App
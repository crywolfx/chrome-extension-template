import style from './test2.module.less';

export const config = {
  component: true,
  shadow: true,
}


const App = () => {
  return <div className={style.test}>www</div>
}

export default App
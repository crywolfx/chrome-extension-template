import style from './test1.module.less';

export const config = {
  component: true,
  shadow: true,
}

const App = () => {
  return <div className={style.test}>content-script</div>
}

export default App
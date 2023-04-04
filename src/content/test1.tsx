import style from './test1.module.less';

export const config = {
  component: true,
  shadow: true,
}

console.log(process.env)

const App = () => {
  return <div className={style.test}>dadasdasdsa</div>
}

export default App
import { useEffect } from 'react';
import style from './test1.module.less';
import proxyRequestInstance from 'src/common/request/proxy';

export const config = {
  component: true,
  shadow: true,
}

const App = () => {
  useEffect(() => {
    console.log("请求");
    proxyRequestInstance({
      url: 'https://ksop.staging.kuaishou.com/rest/open/management/business/admin',
    }).then((res) => {
      console.log(res);
    }).catch((e) => {
      console.log(e);
    });
  }, [])
  return <div className={style.test}>dd123112321</div>
}

export default App
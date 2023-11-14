import { useEffect, useState } from 'react';
import { store } from '@es/chrome-extension-sso';
import sso from './lib/sso';
import style from './test1.module.less';

export const config = {
  component: true,
  shadow: true,
};

const App = () => {
  const [userInfo, setUserInfo] = useState<any>();
  const [token, setToken] = useState<any>();

  useEffect(() => {
    store.addWatcher((data) => {
      store.get('token').then((res) => {
        setToken(res);
        console.log("set");
      });
      store.get('userInfo').then((res) => {
        setUserInfo(res);
      });
    });
  }, []);
  return (
    <div className={style.test}>
      <div>用户信息：{JSON.stringify(userInfo)}</div>
      <div>token：{token}</div>
      <button
        onClick={() => {
          sso.goLoginPage();
        }}
      >
        跳转登录页
      </button>
      <button
        onClick={() => {
          store.clear();
        }}
      >
        清除所有信息
      </button>
    </div>
  );
};

export default App;

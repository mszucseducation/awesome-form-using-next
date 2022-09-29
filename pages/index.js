import { Button, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import LoginForm from '../components/LoginForm';

export default function Home() {
  const [loginState, setLoginState] = useState("before");
  const r = useRouter();

  const Login = async () => {
    setLoginState("during");
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoginState("after");
    await new Promise(resolve => setTimeout(resolve, 2000));

    r.push("/dashboard");
  }

  return (
    <div>
      <LoginForm loginState={loginState} 
      onLoginClick={()=>Login()}
      />
    </div>
  )
}

import React,{useState} from 'react';
import { Form, Input } from 'antd';

const LoginForm = () => {
    const [id, setId] = useState('');
    
  return (
    <Form>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required/>
      </div>
    </Form>
  );
};

export default LoginForm;

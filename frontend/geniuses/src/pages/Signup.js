import React from 'react';
import TextButton from '../components/TextButton';
import api, { axiosApi } from '../_api/api';
function InputText(props) {
  return (
    <div className="grid grid-cols-3 w-96">
      <label htmlFor={props.id} className="text-left">
        {props.labelText}
      </label>
      <input
        required={props.required}ㅊ
        type={props.type}
        id={props.id}
        name={props.id}
        placeholder={props.placeHolder}
        className="col-span-2 rounded-md border-2 p-1 h-10 border-black dark:text-black"
      />
    </div>
  );
}
export default function Signup() {
  const handlerSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const jsonSignup = {
      nickname: formData.get('nickname'),
      loginId: formData.get('loginId'),
      password: formData.get('password'),
      passwordCheck: formData.get('passwordCheck'),
      introduce: formData.get('introduce'),
    };
    axiosApi.signup(jsonSignup);
  };
  return (
    <div>
      <div className="font-bold text-2xl">회원가입</div>
      <br />
      <form method="post" onSubmit={handlerSubmit}>
        <InputText required={true} labelText="*닉네임" type="text" id="nickname" placeHolder="nickname" />
        <br />
        <InputText required={true} labelText="*ID(e-mail)" type="text" id="loginId" placeHolder="example@google.com" />
        <br />
        <InputText required={true} labelText="*비밀번호" type="password" id="password" placeHolder="password" />
        <br />
        <InputText required={true} labelText="*비밀번호 확인" type="password" id="passwordCheck" placeHolder="password" />
        <br />
        <InputText required={false} labelText="소개" type="text" id="introduce" placeHolder="소개" />
        <br />
        <TextButton type="submit" text="회원가입 완료" />
      </form>
    </div>
  );
}

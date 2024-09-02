import React from "react";
import { InputForm } from "../../components";
import { Button } from "../../components/Button";
const Login = () =>{
    return(
        <div className="bg-white w-[600px] p-[30px] pb-[100px] roundded-md shadow-sm">
          <h3 className="font-semibold text-2xl mb-3">Đăng nhập</h3>
          <div className="w-full flex flex-col gap-5">
          <InputForm label={"Số điện thoại"}/>
          <InputForm label={"Mật Khẩu"}/>
          </div>
          <div className="mt-5">
          <Button
            text={"Đăng nhập"}
            bgColor={"bg-secondary1"}
            textColor={"text-white"}
            fullWidth
          />
          </div>
          <div className="mt7 flex items-center justify-between">
            <small className="text-[blue] hover:text-[red] cursor-pointer">Bạn quên mật khẩu</small>
            <small className="text-[blue] hover:text-[red] cursor-pointer">Tạo tài khoản mới</small>
          </div>
        </div>
    )
}
export default Login;
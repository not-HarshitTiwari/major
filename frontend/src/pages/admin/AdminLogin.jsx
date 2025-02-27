import React from "react";
import { useForm } from "react-hook-form";
import {Input,Button} from "../../components";
import { useNavigate} from 'react-router';

function AdminLogin() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const login = (data) => {
    navigate("/admin/panel",{replace : true});
  };

  return (
    <div className="flex bg-[#242424] h-screen justify-center items-center">
      <div className="flex flex-col p-6 bg-secondary-light rounded-4xl items-center justify-center w-auto h-auto">
        <h1 className="text-4xl mb-8">Admin Login</h1>
        <form onSubmit={handleSubmit(login)} className="flex flex-col items-center">
          <Input
            label="Username : "
            type="text"
            placeholder="Enter admin username"
            className="mb-3 w-xs bg-primary-light"
            autoComplete="off"
            {...register("username", {
              required: true,
              minLength: 5,
              maxLength: 12,
            })}
          />
          <Input
            label="Password : "
            type="password"
            placeholder="Enter admin password"
            className="mb-6 w-xs bg-primary-light"
            autoComplete="off"
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 20,
              validate: {
                matchPattern: (val) =>
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
                    val
                  ) ||
                  "Password must contain at least 8 characters, including uppercase letters, lowercase letters, numbers and special characters.",
              },
            })}
          />
          <Button value="Login" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;

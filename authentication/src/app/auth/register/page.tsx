"use client";
import React, { FormEvent, useState } from "react";
import { registerUser, updateUser, UserData } from "../../../firebase/auth";
import TextField from "../../components/TextField";
import Btn from "../../components/Btn";
import Link from "next/link";
import { UserInfo } from "firebase/auth";
import { useRouter } from "next/navigation";

function RegisterPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlerSumit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        return;
      }

      const data: UserData = {
        email,
        password,
      };

      const user = await registerUser(data);

      await updateUser(user, { displayName: username } as UserInfo);

      router.push("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-1/4">
      <h1 className="text-xl my-3">Registrese</h1>
      <form
        className="flex
            flex-col 
            items-center 
            bg-white/30 
            backdrop-blur-md 
            shadow-lg 
            shadow-white 
            py-9
            my-5
            rounded-md"
        onSubmit={(e) => handlerSumit(e)}
      >
        <TextField
          id="username"
          placeholder="Username"
          value={username}
          onChange={(value) => setUsername(value)}
        />
        <TextField
          id="email"
          type="email"
          placeholder="Correo Electronico"
          value={email}
          onChange={(value) => setEmail(value)}
        />
        <TextField
          id="password"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(value) => setPassword(value)}
        />
        <TextField
          id="cofirm-password"
          type="password"
          placeholder="Confirmar contraseña"
          value={confirmPassword}
          onChange={(value) => setConfirmPassword(value)}
        />
        <Btn type="submit" label="Registrarse" />
      </form>
      <Link href={"/auth/login"} className="underline decoration-1">
        Ya tienes cuenta ?
      </Link>
    </div>
  );
}

export default RegisterPage;

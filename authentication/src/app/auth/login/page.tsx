'use client';
import React, { FormEvent, useState } from 'react';
import { loginUser } from '../../../firebase/auth';
import TextField from '../../components/TextField';
import Btn from '../../components/Btn';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = {
        email,
        password,
      };
      const user = await loginUser(data);

      if (user == null) {
        console.log('new error');
        return;
      }

      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-1/4">
      <h1 className="text-xl my-3">Iniciar Sesión</h1>
      <form
        className="flex flex-col items-center border border-white py-9 my-5"
        onSubmit={handlerSubmit}
      >
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
        <Btn type="submit" label="Iniciar Sesion" />
      </form>
      <Link href={'/auth/register'} className="underline decoration-1">
        No tienes cuenta?
      </Link>
    </div>
  );
}

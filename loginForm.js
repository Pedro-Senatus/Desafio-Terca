// LoginForm.js
import React from 'react';
import styles from './globals.css'; // Importando os estilos do módulo
const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de envio do formulário, como enviar dados para um servidor ou manipular localmente
  };

  return (
    <>
    <section id="imagem-pc">
    <img src="https://s3-alpha-sig.figma.com/img/5f3a/f703/4087795e8b61a1155d8e286718174bbf?Expires=1710720000&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=QLB4rpbN2oJfIw71o~jKMBJeMHfOCQCkxmrX2NyxpivQWcLLUVpe4Skzsv6jZ3f-BnBoa76msBkwKxAIXOfAcsUAlNV-r2qyG2FUNn2Ehn5VsRhxGs-wgxAdwyk~dMDR~jCWYcwS3MurJS63Lc-9iTLHBMuA4AZtJ8Xz5DuSMUlTLEUEtwaSJYZIUPpXeND7qbulzAeNkcKcuXldPoQ-1eiEf99tcBD8MN0xUVNA8NUGxHyuGDabyOsFW4nbH7SPA8G9FjE9F5X8KLgmVuLGPVSq81FINPVctQPdUSQuXYKU14IegqBIGVgbTAyS~xbD9R34Lrxsqh9p2R2jnUvYKg__" alt="Imagem PC" />
    </section>
    <form action="" id="formulario" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" /><br />
        <label htmlFor="senha">Senha</label>
        <input type="password" name="password" id="senha" /><br />
        <input type="submit" id="botao" value="Enviar" />
    </form>
        
    </>
  );
};

export default LoginForm;

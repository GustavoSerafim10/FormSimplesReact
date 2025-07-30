import "./MyForm.css";

import { use, useState } from "react";

const MyForm = ({userName, userEmail}) => {
    // 3 - Gerenciamento de dados
    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(userEmail);

    const [bio, setBio] = useState("");

    const [role, setRole] = useState("");

    const handleName = (e) =>{
        setName(e.target.value)
    };

    // 5- Envio de form
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name, email, bio, role);

        //validação
        //envio

        //7 - limpar o form
        setEmail("");
        setName("");
        setBio("");
        setRole("");

    };

    console.log(name, email);

  return (
    <div>
        {/* 1 - criação de form */}
        {/* 5 - Envio de formulário */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome:" onChange={handleName}
                // 6 - controlled inpur
                value={name || ""}
                />
            </div>
            {/* 2 - Label Envolvendo input */}
            <label>
                <span>E-mail:</span>
            {/*  4- simplificando a manipulação */}
                <input type="text" name="email" placeholder="Digite o seu e-mail:" onChange={(e) => setEmail(e.target.value)} 
             // 6 - controlled inpur
                value={email || ""}
                />
            </label>
            {/* 8 - Textarea */}
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/* 9 - select */}
            <label>
                <span>Função do sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>

            <input type="submit" value="Enviar" />
        </form>
    </div>
  );
};

export default MyForm
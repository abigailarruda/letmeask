import { FormEvent, useState } from "react";

import { Link, useHistory } from "react-router-dom";

import { database } from "../services/firebase";

import useAuth from "../hooks/useAuth";

import Button from "../components/Button";

import illustrationImage from "../assets/images/illustration.svg";
import logoImage from "../assets/images/logo.svg";

import "../assets/styles/auth.scss";

export default function NewRoom() {
  const { user } = useAuth();

  const [newRoom, setNewRoom] = useState("");

  const history = useHistory();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === "") {
      return;
    }

    const roomRef = database.ref("rooms");

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImage}
          alt="Ilustração simbolizando perguntas e respostas"
        />

        <strong>Toda pergunta tem uma resposta.</strong>

        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImage} alt="Let Me Ask" />

          <h2>Criar uma nova sala</h2>

          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              onChange={(event) => {
                setNewRoom(event.target.value);
              }}
              value={newRoom}
              placeholder="Nome da sala"
            />

            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}

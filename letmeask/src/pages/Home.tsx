import { useHistory } from "react-router-dom";

import Button from "../components/Button";

import { useAuth } from "../hooks/useAuth";

import illustrationImage from "../assets/images/illustration.svg";
import logoImage from "../assets/images/logo.svg";
import googleIcon from "../assets/images/google-icon.svg";

import "../assets/styles/auth.scss";

export default function Home() {
  const { user, signInWithGoogle } = useAuth();

  const history = useHistory();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/rooms/new");
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

          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIcon} alt="Google" />
            Crie sua sala com o Google
          </button>

          <div className="separator">ou entre em uma sala</div>

          <form>
            <input type="text" placeholder="Digite o código da sala" />

            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}

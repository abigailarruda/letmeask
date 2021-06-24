import { Link, useHistory, useParams } from "react-router-dom";

import { database } from "../services/firebase";

import useRoom from "../hooks/useRoom";

import Button from "../components/Button";
import RoomCode from "../components/RoomCode";
import Question from "../components/Question";

import logoImage from "../assets/images/logo.svg";
import deleteImage from "../assets/images/delete.svg";

import "../assets/styles/room.scss";

type RoomParams = {
  id: string;
};

export default function AdminRoom() {
  const params = useParams<RoomParams>();

  const roomId = params.id;

  const { questions, title } = useRoom(roomId);

  const history = useHistory();

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que você deseja excluir essa pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push("/");
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <Link to="/">
            <img src={logoImage} alt="Let Me Ask" />
          </Link>

          <div>
            <RoomCode code={roomId} />

            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>

          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              >
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImage} alt="Remover pergunta" />
                </button>
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
}

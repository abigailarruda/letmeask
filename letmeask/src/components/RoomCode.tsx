import copyImage from "../assets/images/copy.svg";

import "../assets/styles/room-code.scss";

type RoomCodeProps = {
  code: string;
};

export default function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImage} alt="Copiar código da sala'" />
      </div>
      <span>Sala {props.code}</span>
    </button>
  );
}
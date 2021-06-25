import { ReactNode } from "react";

import cx from "classnames";

import "../assets/styles/question.scss";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHightlighted?: boolean;
};

export default function Question({
  content,
  author,
  isAnswered = false,
  isHightlighted = false,
  children,
}: QuestionProps) {
  return (
    <div
      className={cx(
        "question",
        { answered: isAnswered },
        { highlighted: isHightlighted && !isAnswered }
      )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div className="buttons">{children}</div>
      </footer>
    </div>
  );
}

import { css } from "@emotion/react";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

type Props = {
  user: {
    name: string;
    image: string;
    email: string;
    phone: string;
    company: {
      name: string;
      email: string;
    };
  };
};

const EDl = css`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  text-align: left;
  margin-bottom: 8px;

  dt {
    width: 20%;
    padding-bottom: 16px;
  }

  dd {
    width: 80%;
    padding-bottom: 16px;
    overflow-wrap: break-word;
  }
`;

export const UserCard = (props: Props) => {
  const { user } = props;

  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <dl css={EDl}>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>Web</dt>
        <dd>{user.company.email}</dd>
      </dl>
    </Card>
  );
};

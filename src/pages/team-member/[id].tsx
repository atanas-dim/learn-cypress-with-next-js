import { useRouter } from "next/router";
import React from "react";

type Loopspeeder = {
  forename: string;
  surname: string;
  color?: string;
};

export const LOOPSPEEDERS: { [key: number]: Loopspeeder } = {
  0: {
    forename: "Matt",
    surname: "Frawley",
  },
  1: {
    forename: "James",
    surname: "Lester",
    color: "rgb(0, 255, 255)",
  },
  2: {
    forename: "Atanas",
    surname: "Dimitrov",
  },
};

const TeamMember = () => {
  const { query } = useRouter();
  const id = query.id as string;

  const teamMember = LOOPSPEEDERS[+id];

  return (
    <div id="content">
      <h1 style={{ color: teamMember?.color }}>
        {teamMember ? teamMember.forename : "Not found"}
      </h1>
    </div>
  );
};

export default TeamMember;

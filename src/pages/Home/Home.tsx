import React from "react";

import "./Home.sass";

import { Container, FormCep } from "../../components";

export const HomePage: React.FC = (): React.JSX.Element => {
  return (
    <div className="App">
      <img src="LOGO-CLICKCEP-HOR-WHITE.svg"></img>
      <Container>
        <FormCep />
      </Container>
    </div>
  );
};

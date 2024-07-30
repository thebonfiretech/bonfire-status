import React, { useState, useEffect } from "react";

import { Container, Header, Message, Box } from "./styles";

import image from "../../../public/images/logo.svg";
import api from "../../services/api";

import BoxItem from "../../components/boxItem";

const Status = () => {
  const [statusBox, setStatusBox] = useState([]);

  const getStatus = async () => {
    const response = await api.get("/ping/get");
    setStatusBox(response.data);
  };

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <Container>
      <Header>
        <img src={image} />
        <h1>Bonfire</h1>
      </Header>

      <Message>
        <p>Todos os sistemas operacionais</p>
      </Message>

      <Box>
        {statusBox.map((statusItem, index) => {
          return <BoxItem key={index} title={statusItem.name}/>;
        })}
      </Box>
    </Container>
  );
};

export default Status;

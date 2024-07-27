import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Container, StatusContainer, StatusLine, StatusInfo } from "./styles";

const BoxItem = ({ title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getStatus();
  }, []);

  const getStatus = async () => {
    try {
      const response = await api.get("/ping/get");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching status:", error);
    }
  };

  const FormatData = (dataString) => {
    const dataObj = new Date(dataString);
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'UTC'
    };
    return dataObj.toLocaleString('pt-BR', options);
  };

  const getLinesToShow = () => {
    const Width = window.innerWidth;
    if (Width <= 768) {
      return 30;
    } else if (Width <= 1024) {
      return 60;
    } else {
      return 90;
    }
  };

  const linesToShow = getLinesToShow();

  return (
    <Container>
      <article>
        <h1>{title}</h1>
        <h3>Operando</h3>
      </article>

      {data.map((item, index) => (
        <StatusContainer key={index}>
          {item.historic.slice(-linesToShow).map((historicItem, historicIndex) => (
            <React.Fragment key={historicIndex}>
              <StatusLine
                status={historicItem.status}
                isSuccess={historicItem.isSuccess}
                data={historicItem}
              />
              <StatusInfo>
                <h1>{FormatData(historicItem?.date)}</h1>
                <p>Status da API: {historicItem?.status}</p>
                <p>Tempo de Resposta: {historicItem?.responseTime}ms</p>
              </StatusInfo>
            </React.Fragment>
          ))}
        </StatusContainer>
      ))}
    </Container>
  );
};

export default BoxItem;

import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Container, StatusContainer, StatusLine, StatusInfo } from "./styles";

const BoxItem = ({ title }) => {
  const [data, setData] = useState([]);

  const getStatus = async () => {
    try {
      const response = await api.get("/ping/get");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching status:", error);
    }
  };

  useEffect(() => {
    getStatus();
  }, []);

  const FormatData = (dataString) => {
    const dataObj = new Date(dataString);
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      timeZone: 'UTC'
    };

    return dataObj.toLocaleString('pt-BR', options);
  };

  const getLinesToShow = () => {
    const Width = window.innerWidth;
    if (Width <= 768) {
      return 25;
    } else if (Width <= 1024) {
      return 50;
    } else {
      return 60;
    }
  };

  const linesToShow = getLinesToShow();

  const filterHistoric = (historic) => {
    let filteredHistoric = {};

    historic.forEach((item) => {
      const date = item.date.split("T")[0];
      if (!filteredHistoric[date]) {
        filteredHistoric[date] = { isSuccess: 0, isError: 0 };
      };

      const old = filteredHistoric[date];
      filteredHistoric[date] = {
        isSuccess: old.isSuccess + (item.isSuccess ? 1 : 0),
        isError: old.isError + (item.isSuccess ? 0 : 1)
      };
    });

    return Object.keys(filteredHistoric).map(date => ({
      date,
      ...filteredHistoric[date],
      percentage: (filteredHistoric[date].isSuccess / (filteredHistoric[date].isSuccess + filteredHistoric[date].isError)) * 100
    }));
  };

  return (
    <Container>
      <article>
        <h1>{title}</h1>
        <h3>Operando</h3>
      </article>

      {data.map((item, index) => (
        <StatusContainer key={index}>
          {filterHistoric(item.historic).slice(0, linesToShow).map((historicItem, historicIndex) => (
            <React.Fragment key={historicIndex}>
              <StatusLine
                status={historicItem.status}
                isSuccess={historicItem.isSuccess}
                data={historicItem}
              />
              <StatusInfo>
                <h1>{FormatData(historicItem.date)}</h1>
                <p>Porcentagem de update: {historicItem.percentage}</p>
              </StatusInfo>
            </React.Fragment>
          ))}
        </StatusContainer>
      ))}
    </Container>
  );
};

export default BoxItem;

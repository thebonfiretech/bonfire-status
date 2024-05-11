import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { Container, StatusContainer, StatusLine, StatusInfo } from "./styles";

const BoxItem = ({ title }) => {
  const [data, setData] = useState([]);

  
  const getStatus = async () => {
    const response = await api.get("/ping/get");
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getStatus();
  }, []);

  const FormatData = (dataString) => {
    const dataObj = new Date(dataString);
    return dataObj.toLocaleDateString();
  };

  return (
    <Container>
      <section>
        <h1>{title}</h1>
        <h3>Operando</h3>
      </section>

      {data.map((item, index) => {
        return (
          <>
          
          <StatusContainer key={index}>
            {item.historic.slice(item.historic.length - 72, item.historic.length).map((historicItem, historicIndex) => (
              <section key={historicIndex}>
                
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
              </section>
            ))}
          </StatusContainer>
           
          </>
        );
      })}
      
      <section>
        <h4>90 dias atrás</h4>
        <h4>100% em atividade</h4>
        <h4>Hoje</h4>
      </section>
    </Container>
  );
};

export default BoxItem;

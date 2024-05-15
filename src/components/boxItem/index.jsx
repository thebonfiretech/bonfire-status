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

  return (
    <Container>
      <section>
        <h1>{title}</h1>
        <h3>Operando</h3>
      </section>

      {data.map((item, index) => {
        console.log(item)
        return (
          <>
          
          <StatusContainer key={index}>
            {item.historic.slice(item.historic.length - 60, item.historic.length).map((historicItem, historicIndex) => (
              <>
                
                <StatusLine
                  key={historicIndex}
                  status={historicItem.status}
                  isSuccess={historicItem.isSuccess}
                  data={historicItem}
                />
                

                <StatusInfo>
                  <h1>{FormatData(historicItem?.date)}</h1>
                  <p>Status da API: {historicItem?.status}</p>
                  <p>Tempo de Resposta: {historicItem?.responseTime}ms</p>
                  
                </StatusInfo>
              </>
            ))}
          </StatusContainer>
           
          </>
        );
      })}
      
      <section>

      </section>
    </Container>
  );
};

export default BoxItem;

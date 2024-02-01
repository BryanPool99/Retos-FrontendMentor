import React, { useEffect, useState } from "react";
import {
  ContainerHeader,
  ContainerInfo,
  StyledHr,
  Title,
} from "../../assets/styles/HeaderStyles";
import Input from "./Input";
import Info from "./Info";
import { fetchData, ApiResponse } from "../../service/api";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  PlaceholderParagraph,
  PlaceholderLine,
  Placeholder,
} from "semantic-ui-react";

const Header: React.FC = () => {
  const [apiData, setApiData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleSearch = (ipAddress: string) => {
    const apiKey = "at_f384duuhoE1XQl6jJrwfQi9VqOhIM";
    setLoading(true); // Indicar que la carga está en progreso
    fetchData(apiKey, ipAddress)
      .then((data) => {
        console.log(data);

        setApiData(data);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setApiData(null);
        setError("Error fetching data. Please try again.");
      })
      .finally(() => {
        setLoading(false); // Indicar que la carga ha terminado (ya sea con éxito o con error)
      });
  };
  useEffect(() => {
    // Solo si tienes datos de ubicación
    if (apiData?.location) {
      const map = L.map("map").setView(
        [apiData.location.lat, apiData.location.lng],
        13
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      L.marker([apiData.location.lat, apiData.location.lng])
        .addTo(map)
        .bindPopup("Ubicación obtenida de la IP")
        .openPopup();
    }
  }, [apiData]);
  // Muestra el esqueleto mientras loading es true
  if (loading) {
    return (
      <ContainerHeader>
        <Title>IP Address Tracker</Title>
        <Input onSearch={handleSearch} />
        <ContainerInfo>
          <Info
            title="IP Address"
            description={
              <Placeholder>
                <PlaceholderParagraph>
                  <PlaceholderLine />
                </PlaceholderParagraph>
              </Placeholder>
            }
          />
          <Info
            title="Location"
            description={
              <Placeholder>
                <PlaceholderParagraph>
                  <PlaceholderLine />
                </PlaceholderParagraph>
              </Placeholder>
            }
          />
          <Info
            title="Timezone"
            description={
              <Placeholder>
                <PlaceholderParagraph>
                  <PlaceholderLine />
                </PlaceholderParagraph>
              </Placeholder>
            }
          />
          <Info
            title="ISP"
            description={
              <Placeholder>
                <PlaceholderParagraph>
                  <PlaceholderLine />
                </PlaceholderParagraph>
              </Placeholder>
            }
          />
        </ContainerInfo>
      </ContainerHeader>
    );
  }

  // Muestra la interfaz normal cuando no está cargando
  return (
    <ContainerHeader>
      <Title>IP Address Tracker</Title>
      <Input onSearch={handleSearch} />
      <ContainerInfo>
        <Info title="IP Address" description={apiData?.ip || "N/A"} />
        <StyledHr />
        <Info
          title="Location"
          description={
            `${apiData?.location.city}, ${apiData?.location.country}\n${apiData?.location.postalCode}` ||
            "N/A"
          }
        />
        <StyledHr />
        <Info
          title="Timezone"
          description={`UTC ${apiData?.location.timezone || "N/A"}`}
        />
        <StyledHr />
        <Info title="ISP" description={apiData?.isp || "N/A"} />
      </ContainerInfo>
      {error && <p>{error}</p>}
    </ContainerHeader>
  );
};
export default Header;

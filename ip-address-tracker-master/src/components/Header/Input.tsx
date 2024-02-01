import React, { useState } from "react";
import iconArrow from "../../assets/images/icon-arrow.svg";
import { BoxInput, Btn, ContainerInput } from "../../assets/styles/InputStyles";
import Swal from "sweetalert2";
interface InputProps {
  onSearch: (ipAddress: string) => void;
}

const Input: React.FC<InputProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = async () => {
    // Validar si la IP ingresada es válida
    const ipRegex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
    if (!ipRegex.test(inputValue)) {
      // Mostrar alerta con SweetAlert2 si la IP no es válida
      Swal.fire({
        icon: "error",
        title: "Invalid IP Address",
        text: "Please enter a valid IP address.",
      });
      return;
    }

    try {
      // Mostrar SweetAlert con un mensaje de carga mientras se espera la respuesta
      Swal.fire({
        title: "Loading information...",
        allowOutsideClick: false, // Evita que el usuario cierre la alerta haciendo clic fuera de ella
        didOpen: () => {
          Swal.showLoading();
        },
      });

      // Llamar a la función de búsqueda en el componente padre
      await onSearch(inputValue);

      // Cerrar la alerta después de obtener la respuesta
      Swal.close();
    } catch (error) {
      // Manejar cualquier error que pueda ocurrir durante la búsqueda
      console.error("Error fetching data:", error);
      // Cerrar la alerta en caso de error
      Swal.close();
    }
  };

  return (
    <ContainerInput>
      <BoxInput
        type="text"
        placeholder="Search for any IP address or domain"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Btn onClick={handleSearch}>
        <img src={iconArrow} alt="iconArrow" />
      </Btn>
    </ContainerInput>
  );
};
export default Input;

import React, { ReactNode } from "react";
import { BoxInfo, StyledDescription, StyledTitle } from "../../assets/styles/InfoStyles";
interface InfoProps {
  title: ReactNode;
  description: ReactNode;
}
const Info: React.FC<InfoProps> = ({ title, description }) => {
  return (
    <BoxInfo>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </BoxInfo>
  );
};
export default Info;

import React from "react";
import {
  PlaceholderParagraph,
  PlaceholderLine,
  Placeholder,
} from "semantic-ui-react";
import { ContainerInfo } from "../../assets/styles/HeaderStyles";
import Info from "./Info";
const InfoSkeleton: React.FC = () => {
  return (
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
  );
};
export default InfoSkeleton;

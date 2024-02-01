import React from "react";
import { PlaceholderImage, Placeholder, Segment } from "semantic-ui-react";
const MapSkeleton: React.FC = () => {
  return (
    <Segment inverted className="placeholderContainer">
      <Placeholder inverted className="placeholderMap">
        <PlaceholderImage />
      </Placeholder>
    </Segment>
  );
};
export default MapSkeleton;

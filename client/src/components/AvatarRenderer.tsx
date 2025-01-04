import { svg } from "../pages/Protected/AvatarCreator";

const AvatarRenderer = () => {
  return <div dangerouslySetInnerHTML={{ __html: svg }} style={{ width: "100px", height: "100px" }} />;
};

export default AvatarRenderer;

import { Box, Percent, Svg } from "./styles/Note.style";

const Note = ({ percent }) => {
  return (
    <Box>
      <Percent percent={percent}>
        <Svg percent={percent}>
          <circle cx="20" cy="20" r="20"></circle>
          <circle cx="20" cy="20" r="20"></circle>
        </Svg>
        <div>
          <strong>
            {`${percent}`}
            <span>%</span>
          </strong>
        </div>
      </Percent>
    </Box>
  );
};

export default Note;

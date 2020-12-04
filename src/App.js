import styled from "styled-components";
import CircleDemo from "./components/Star";

const Flex = styled.div`
  display: flex;
  padding: 5rem;
  align-items: center;
  justify-content; center;
`;

function App() {
  return (
    <Flex>
      <CircleDemo />
    </Flex>
  );
}

export default App;

import styled from "styled-components";
import { Btnsave, useAuthStore } from "../../index";
export function HomeTemplate() {

  return (
    <Container>
      <header className="header">
        <h1>Welcome to Home Template</h1>
      </header>
      <section className="area1">
        <h2>Area 1</h2>
      </section>
      <section className="area2">
        <h2>Area 2</h2>
      </section>
      <section className="area3">
        <h2>Area 3</h2>
      </section>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  padding: 20px;
  grid-template:
    "header" 100px
    "area1" 100px
    "area2" 100px
    "area3" auto;
    
  .header {
    grid-area: header;
    background-color: rgba(103, 93, 241, 0.14);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .area1 {
    grid-area: area1;
    background-color: rgba(103, 93, 241, 0.14);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .area2 {
    grid-area: area2;
    background-color: rgba(31, 22, 163, 0.14);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .area3 {
    grid-area: area3;
    background-color: rgba(103, 93, 241, 0.14);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

import styled from "styled-components"
import Colors from "./Colors"

const StyledCard = styled.div`
  width: 100%;
  background-color: ${Colors.lightGray};
  display: flex;
  align-items: center;
  padding: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 300px;
  }

  .img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 125px;
    height: 125px;
    padding: 5px;
    margin: 5px;
    border: 2px solid black;
    border-radius: 20px;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  };  
  
  .info {
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 5px;
    align-items: center;
    justify-content: center;
    

    input {
      color: black;
      font-size: 25px;
      width: 40px;
      margin: 10px;
    }
  }
`

export default function CartCard({ imgSource, price }) {
  return (
    <StyledCard>
      <div className="img">
        <img src={imgSource} alt="imagem" />
      </div>
      <div className="info">
        <form action="#">
          <input type="number" name="quantity" id="" disabled/>
          <label htmlFor="">units</label>
        </form>
        <p>R$ {price}</p>
      </div>
    </StyledCard>
  )
}

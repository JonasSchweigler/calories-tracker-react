import styled from "styled-components";

const NutritionStatsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap-reverse;

  .stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 2rem 0;

    p {
      font-size: 1.5rem;
      font-weight: 600;
    }

    h3 {
      font-size: 0.8rem;
      font-weight: 400;
      color: #a0a0a0;
    }
  }

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const NutritionStats = () => {
  return (
    <NutritionStatsWrapper>
      <div className='stats'>
        <div>
          <p>300</p>
          <h3>Calories</h3>
        </div>
        <div>
          <p>20g</p>
          <h3>Protein</h3>
        </div>
        <div>
          <p>20g</p>
          <h3>Carbs</h3>
        </div>
        <div>
          <p>20g</p>
          <h3>Fat</h3>
        </div>
      </div>
      <img src='https://via.placeholder.com/150' alt='meal' />
    </NutritionStatsWrapper>
  );
};

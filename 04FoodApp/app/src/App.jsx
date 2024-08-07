import styled from 'styled-components'
import { useEffect, useState } from 'react'
import SearchResult from './components/SearchResult';
import "./App.css"

export const BASE_URL = "http://localhost:9000"; //we are exporting it since we need to use it in other components as well that is inside search result since we need to get data from this url
function App() {

  const [data, setData] = useState([])
  const [filtereddata, setFilteredData] = useState([])
  const [filteredBtn, setFilteredBtn] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  // const fetchData = fetch(BASE_URL)
  //   .then((res) => res.json())
  //   .then((obj) => setData());
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setData(json);
        setFilteredData(json)
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchData();
  }, []);

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredBtn("all")
      setFilteredData(data)
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    )
    setFilteredData(filter)
    setFilteredBtn(type)
  }
  const searchfood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);
    if (searchValue === "") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    setFilteredData(filter)

  }

  const filterBtns = [
    {
      name: "All",
      type: "all"
    },
    {
      name: "Breakfast",
      type: "breakfast"
    },
    {
      name: "Lunch",
      type: "lunch"
    },
    {
      name: "Dinner",
      type: "dinner"
    }
  ];
  // fetchData(); SInce these function will be claled multiple times therefore there will be multiple re-renders therefore we use useEffect
  if (error) {
    return <div>{error}</div>
  }
  if (loading)
    return <div>Loading...</div>

  return (
    <>
      <Container>
        <TopContainer>
          <div className='logo'>
            <img src="./images/Foody Zone.svg" alt="" />
          </div>
          <div className="search">
            <input
              onChange={searchfood}
              placeholder='Search Food...'
              type="text" />
          </div>
        </TopContainer>

        <FilterContainer>
        {filterBtns.map((value) => (
            <Button
              isSelected={filteredBtn === value.type}
              key={value.name}
              onClick={() => filterFood(value.type)}
            >
              {value.name}
            </Button>
          ))}

          {/* <Button onClick={() => filterFood("breakfast")}>Breakfast</Button>
          <Button onClick={() => filterFood("lunch")}>Lunch</Button>
          <Button onClick={() => filterFood("dinner")}>Dinner</Button> */}
          {/* Instead of writing ths multiple times we neeed to use map with respect to filter */}
        </FilterContainer>


      </Container>
      <SearchResult data={filtereddata} />
    </>
  )
}

export default App
export const Container = styled.div`
  /* background-color:#4a4747; */
  max-width: 1200px;
  margin: 0 auto;

`
const TopContainer = styled.section`
  height: 140px;
  display: flex;
  justify-content: space-between;
  padding:16px;
  align-items: center;

  .search input {
    height: 40px;
    font-size: 16px;
    padding: 4px;
    background-color: transparent;
    color: white;
    border: none;
    border-bottom: 1px solid red;
    outline: none;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }

    &:focus {
      border-bottom-color: yellow;
    }

   
  }
  @media screen and (max-width:600px) {
      flex-direction: column;
      height: 120px;
    }
  
`

const FilterContainer = styled.section`
  display:flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`

export const Button = styled.button`
  background-color: ${({ isSelected }) => (isSelected ? "#ec1919" : "#ff4343")};
  outline: .25px solid ${({ isSelected }) => (isSelected ? "#cbc6c6d5" : "#ff4343")};
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover{
    background-color: #f62121;
  }
`

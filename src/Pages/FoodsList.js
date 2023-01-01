import Food from '../Data.js/Food';
import Card from "./Cards"

const FoodsList = () => {
  return (
    <>
      <div className='container-fluid py-5'>
        <h1 className='m-5'>OUR SPECIALS</h1>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='row food-container'>
              {
                Food.map((val, ind) => {
                  return <Card key={ind} val={val} img={val.img} title={val.title} price={val.price} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FoodsList;
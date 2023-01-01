
import "../styles/Home.css"
import FoodsList from "./FoodsList"

const Home = () => {
    return(
        <>
            <div className="img-sec">
                <div className="black">
                    <section>
                        <h1>THE <br/>BEST FOOD <br/>EXPERIENCE <br/>EVER</h1>
                    </section>
                </div>
            </div>
            <FoodsList />
         </>    
    );
}

export default Home;
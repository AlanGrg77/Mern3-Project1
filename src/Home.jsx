import Card from "./Card";
import './Home.css'

const Home = () =>{
    return (
        <>
        <div className="home">
            <Card title={'Card1'} description = {'This is card1 description'} image={'https://via.placeholder.com/300x200'} />
            <Card title={'Card2'} description = {'This is card2 description'} image={'https://via.placeholder.com/300x200'} />
            <Card title={'Card3'} description = {'This is card3 description'} image={'https://via.placeholder.com/300x200'} />
        </div>
        </>
    )
}

export default Home;

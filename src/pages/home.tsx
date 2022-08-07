
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";

export function Home(){
    return <Layout>
    <>
    <Link to={'offers'}><img className="home-img" src="https://nabataty.com/store/wp-content/uploads/2022/07/Twitter-1.jpg" alt="" /> </Link>
    <div className="home-cards">
    
  <Link to={'/indoorplant'} className='noLine'><div className="home-card"> <img className="home-card-img" src="https://nabataty.com/store/wp-content/uploads/2021/06/gift-1-5-1.png" alt="" />
    <p>النباتات الداخلية </p>
  </div></Link>
   
  <Link to={'/outdoorplant'} className='noLine'> <div className="home-card">
    <img className="home-card-img" src="https://nabataty.com/store/wp-content/uploads/2021/06/gift-1-2-1.png" alt="" />
    <p>النباتات الخارجية </p>
  </div></Link>

  <Link to={'/pots'} className='noLine'> <div className="home-card">
    <img className="home-card-img" src="https://nabataty.com/store/wp-content/uploads/2021/06/gift-1-1-1.png" alt="" />
    <p> ادوات واكسسوارات </p>
  </div></Link>

  <Link to={'/agricultural'} className='noLine'><div className="home-card">
    <img className="home-card-img" src="https://nabataty.com/store/wp-content/uploads/2021/06/gift-1-3-1.png" alt="" />
    <p> تربة واسمدة </p>
  </div></Link>

 
 
  
    </div>

    </>
    </Layout>
}
import img1 from './images/carousel1.webp';
import img2 from './images/carousel2.webp';
import img3 from './images/carousel3.webp';
import img4 from './images/carousel4.webp'
const Slides = () => {
  return (
         <div>
           <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
           </ol>
      <div className="carousel-inner">
         <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="..."></img>
          </div>
        </div>
         <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
         </button>
         <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
         </button>
       </div>
      
      </div>
   

  )
}
export default Slides
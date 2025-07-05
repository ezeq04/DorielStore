import './Background.css';
import 'bootstrap'
const img = [
    '/assets/dorielhero.jpg',
    '/assets/dorielhero2.jpg',
]

const Background = () => {
    return (
        <div id="backgroundCarr" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2000">
            <div className="carousel-inner">
                {img.map((src, index) => (
                    <div key={index}
                        className={`carousel-item ${index === 0 ? 'active' : ''} `}  >

                        <img src={src} className="d-block w-100 bg-img" alt={`Slide ${index + 1}`}></img>
                    </div>
                ))}

            </div>
        </div>
    );
};


export default Background;
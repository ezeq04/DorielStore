import './Principal.css';
import Background from '../Background/Background';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import 'bootstrap';


function Principal() {



    return (
        <div className="principal">
            <Background />
            <div className="content ">
                <ItemListContainer />
            </div>
        </div>
    );
};

export default Principal;
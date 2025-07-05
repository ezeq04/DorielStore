import { TailChase } from 'ldrs/react'
import 'ldrs/react/TailChase.css'
import './Loader.css';

function Loader() {
  return (
    <div className="cargando">
      <TailChase
        size="40"
        speed="1.75"
        color="white"
      />
    </div>
  );
};

export default Loader;
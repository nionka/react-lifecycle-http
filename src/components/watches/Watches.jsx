import AddClock from '../addClock/AddClock';
import Clocks from '../clocks/Clocks';
import { useState } from "react";

function Watches() {
    const [ clocks, setClocks ] = useState([]);

    const handleAdd = clock => {
        setClocks(prevClocks => [...prevClocks, clock]);
    }

    const onDelete = id => setClocks(clocks.filter(clock => clock.id !== id))

    return (
        <div>
            <AddClock onAdd={handleAdd} />
            <Clocks clocks={clocks} onDelete={onDelete} />
        </div>
    )
}

export default Watches
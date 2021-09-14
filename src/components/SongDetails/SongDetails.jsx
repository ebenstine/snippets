import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

function SongDetails(){
    const history = useHistory();
    const details = useSelector((store) => store.details);

    const handleBack = () => {
        console.log('back to songs list');
        history.goBack();
    }
    //button to go back, map through details with id
    return (
        <div>
            <Button onClick={handleBack}>Back to List</Button>

            <section className="details">
            {details?.map((detail) => {
                return (
                    <div key={detail.id}>
                    <h4>{detail.title}</h4>
                    <img src={detail.poster} alt={detail.title} />
                    <p>{detail.description}</p>
                    <h4>Genres</h4>
                    <p>{detail.genre}</p>

                    </div>
                )
            })}

            </section>
        </div>
    )
}














export default SongDetails;
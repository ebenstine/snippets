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













}
export default SongDetails;
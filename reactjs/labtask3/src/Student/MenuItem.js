import {Link} from 'react-router-dom';
const MenuItem =({url,title})=>{
    return (
        <Link to={url}>{title}</Link>
    )   
}
export default MenuItem;
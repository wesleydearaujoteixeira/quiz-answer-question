import '../styles/App.css';
import '../styles/responsive.css';


type Props = {
    text: string,
    img: string
}

export function LoadInfo({text, img}: Props) {
    return (  
        <div className='container_Info'>
            <img src={img} className='Image_info' alt="" />
            <p> {text} </p>
        </div>

    );
}

import {Div, Img} from '../Style'

function CardVideo(props) {
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <Div className='box-pagina-principal' onClick={reproduzVideo}>
      <Img src={props.image1} alt={props.textoAlternativo} />
      <h4>{props.titulo}</h4>
    </Div>
  );
}

export default CardVideo;

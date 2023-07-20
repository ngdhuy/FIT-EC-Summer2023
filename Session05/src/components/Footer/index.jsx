import Clock from "../Clock";

const Footer = props => {
  return(
    <footer>
      <h1>{props.message}</h1>
      <Clock />
    </footer>
  );
}

export default Footer;
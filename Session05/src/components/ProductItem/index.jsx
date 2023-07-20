export default function ProductItem(props) {
  const obj = props.obj;

  return (
    <div>{`${obj.id}. ${obj.name} - ${obj.price}`}</div>
  );
}
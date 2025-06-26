import { useSelector } from 'react-redux';
import { selectCartTotalPrice, selectCartTotalQuantity } from '../Redux/cartSelectors';

const MyCart = () => {
  const totalItems = useSelector(selectCartTotalQuantity);
  const totalPrice = useSelector(selectCartTotalPrice);

  return (
    <div>
      <h4>Total Items: {totalItems}</h4>
      <h4>Total Price: Rs.{totalPrice}</h4>
    </div>
  );
};

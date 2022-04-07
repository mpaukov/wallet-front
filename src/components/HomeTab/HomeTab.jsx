import HomeTabItems from './HomeTabItems';
import s from './HomeTab.module.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTransactionsQuery, setTransactions } from 'redux/index';
import { selectTransactions } from 'redux/selectors';

function HomeTab({ items }) {
  const dispatch = useDispatch();
  const { data } = useGetTransactionsQuery();
  const transactions = useSelector(selectTransactions);

  useEffect(() => {
    if (!data) return;
    else dispatch(setTransactions([...data.transactions]));
  }, [data, dispatch]);

  console.log(transactions);

  return (
    <div className={s.homeTab__section}>
      <ul className={s.homeTab}>
        <li className={s.homeTab__hidden}>
          <ul className={s.homeTab__title}>
            <li className={s.homeTab__titleCell}>Date</li>
            <li className={`${s.homeTab__titleCell} ${s.homeTabItems__titleCellCenter}`}>Type</li>
            <li className={`${s.homeTab__titleCell} ${s.homeTabItems__titleCellWidth}`}>
              Category
            </li>
            <li className={`${s.homeTab__titleCell} ${s.homeTabItems__titleCellWidth}`}>Comment</li>
            <li className={`${s.homeTab__titleCell} ${s.homeTabItems__titleCellEnd}`}>Sum</li>
            <li className={`${s.homeTab__titleCell} ${s.homeTabItems__titleCellEnd}`}>Balance</li>
          </ul>
        </li>
        {items.map(item => (
          <li
            className={
              item.type === '+'
                ? `${s.homeTab__items}  ${s.income}`
                : `${s.homeTab__items}  ${s.expense}`
            }
            key={item.id}
          >
            <HomeTabItems
              date={item.date}
              type={item.type}
              category={item.category}
              comment={item.comment}
              sum={item.sum}
              balance={item.balance}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeTab;

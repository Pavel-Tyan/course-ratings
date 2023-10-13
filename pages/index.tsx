import { P, Rating, Tag } from '@/components';
import { Button } from '@/components/Button/Button';
import { Htag } from '@/components/Htag/Htag';
import { useState, useEffect } from 'react';

export default function Home() {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>Заголовок</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <P size='l'>Большой</P>
      <P>Средний</P>
      <P size='s'>Маленький</P>
      <Tag size='s'>Low</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag size='s' color='primary'>Low</Tag>
      <Rating rating={rating}  isEditable setRating={setRating} />
    </>
  );
}


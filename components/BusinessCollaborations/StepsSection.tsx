import React, { useEffect, useState } from 'react';
import ViewMore from '../UtilComponents/ViewMore';

type Step = {
  name: string;
  desc: string;
};

type StpesSectionProps = {
  steps: Step[];
  id: string;
};

type StepCardProps = {
  step: Step;
  number: number;
};

function StepsSection({ steps, id }: StpesSectionProps) {
  const StepCard = ({ step, number }: StepCardProps) => {
    const { name, desc } = step;
    return (
      <div className="flex flex-col p-8 space-y-4 bg-mid/10 rounded-md dark:bg-mid">
        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-brand-500 dark:text-gray-900">
          {number}
        </div>
        <p className="text-2xl font-semibold">
          <b>{name}:</b>
        </p>
        <p className="dark:text-slate-300 mx-auto xl:mx-0 lg:w-3/4 space-y-3">
          {desc}
        </p>
      </div>
    );
  };

  const [loadMore, setLoadMore] = useState(1);
  const [reset, setReset] = useState(1);
  const [height, setHeight] = useState(600);

  useEffect(() => {
    const cardsOnScreenView = window?.innerWidth >= 640 ? 3 : 2;
    const calcHeight = window?.innerWidth >= 640 ? 1000 : 1300;
    const calcReset = steps?.length / cardsOnScreenView;
    setReset(calcReset);
    setHeight(calcHeight);
  }, []);

  const handleLoading = () => {
    loadMore >= reset ? setLoadMore(1) : setLoadMore(loadMore + 1);
  };

  return (
    <section
      id={id}
      style={{ height: height * loadMore }}
      className="p-6 py-16 overflow-hidden relative dark:bg-dark dark:text-gray-100"
    >
      <div className="container mx-auto">
        <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase text-brand-500">
          How it works
        </span>
        <h2 className="text-5xl font-bold text-center dark:text-gray-50">
          Steps For Event
        </h2>
        <div className="grid gap-6 my-16 sm:grid-cols-2 lg:grid-cols-3">
          {steps &&
            steps?.map((step, idx) => {
              return <StepCard number={idx + 1} step={step} key={idx} />;
            })}
        </div>
      </div>
      <ViewMore action={handleLoading} reset={loadMore >= reset} />
    </section>
  );
}

export default StepsSection;

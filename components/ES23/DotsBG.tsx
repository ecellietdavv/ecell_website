import React from 'react';

type Props = {};

const DotsBG = (props: Props) => {
  return (
    <div className="dotBg opacity-5 z-0 w-screen overflow-hidden">
      {[...Array(144).keys()].map((val) => {
        return (
          <div key={val} className="square">
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        );
      })}
    </div>
  );
};

export default DotsBG;

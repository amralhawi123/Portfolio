import React from "react";
import "./Count.css";

const LoadingComponent = () => {
  return (
    <>
      <div className="wait-count">
        <div class="container-count">
          <div class="coast">
            <div class="wave-rel-wrap">
              <div class="wave"></div>
            </div>
          </div>
          <div class="coast delay">
            <div class="wave-rel-wrap">
              <div class="wave delay"></div>
            </div>
          </div>
          <div class="text text-w">w</div>
          <div class="text text-a">a</div>
          <div class="text text-v">i</div>
          <div class="text text-e">t</div>
        </div>
      </div>
    </>
  );
};

export default LoadingComponent;

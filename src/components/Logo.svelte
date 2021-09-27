<style lang="scss">
svg {
  display: block;
  font: 24px/1 Arial;
  text-align: center;
  margin: 0 auto;
}

text {
  text-anchor: middle;
}

#kevin {
  letter-spacing: 0.5em;
  font-size: 2em;
}

#counter {
  letter-spacing: 0.25em;
  font-family: Georgia;
}

hr {
  border: none;
  border-top: 1px solid black;
  text-align: center;
  overflow: visible;
  // min-width: 750px;
  width: 75vw;

  &:after {
    content: '∫∫';
    display: inline-block;
    background-color: white;
    border: 3px solid white;
    transform: translateY(-58%);
  }
}
</style>

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="200">
  <path d="M 10,150 A 145 75 180 0 1 290,150" fill="transparent" id="top" />
<!--   <path d="M 10,150 A 145 75 180 0 0 290,150 Z" fill="transparent" id="bottom" /> -->
  <path d="M 10,165 H 290" id="bottom" />
  <text id="kevin">
    <textPath xlink:href="#top" startOffset="50%">
      KEVIN
    </textPath>
  </text>
  <text id="counter">
    <textPath xlink:href="#bottom" startOffset="50%">
      at the counter
    </textPath>
  </text>
</svg>
<hr>
// Code goes here

let style = `
  position: absolute;
  top: -999px;
  left: 0px;
  right: auto;
  bottom: auto;
  border: 0px;
  box-sizing: content-box;
  word-wrap: break-word;
  overflow: hidden;
  height: 0px !important;
  min-height: 0px !important;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0px;
  text-transform: none;
  word-spacing: 0px;
  text-indent: 0px;
  line-height: 20px;
  width: 191px;
`;

function styleToObject(str) {
    let arraySplit =str.split('\n'); //.map(s => s.trim());
    //console.log(arraySplit);

    let returnObj ={};
    for (let i=0;i<arraySplit.length;i++){
        let arrayTrimSplit = arraySplit[i].trim().split(':');
        
        if (arrayTrimSplit.length==1){
            continue;
        }

        returnObj[arrayTrimSplit['0']]=arrayTrimSplit['1'];
    }
    //console.log(returnObj);
 return returnObj;
}

console.log(styleToObject(style));
// 1.3 how to transfer this "[4,[[5],[6,[7],8],9,10]]" to [4,5,6,7,8,9,10]

function flattenList(str) {
  const numericRegex = /[\d+]*/gm;
  const flatList = []
  let m;

  while ((m = numericRegex.exec(str)) !== null) {
    if (m.index === numericRegex.lastIndex) {
      numericRegex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        if(match){
            flatList.push(match);
        }
    });
  }
}

flattenList("[4,[[5],[6,[7],8],9,10]]")
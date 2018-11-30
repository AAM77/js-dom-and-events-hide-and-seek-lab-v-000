function getFirstSelector(selector) {
  return document.querySelector(`${selector}`)
}


function nestedTarget() {
  return document.querySelector(`#nested .target`)
}


function deepestChild() {
  let firstNode = document.querySelector('#grand-node')
  let secondNode = firstNode.children[0]

  while(secondNode) {
    firstNode = secondNode;
    secondNode = firstNode.children[0]
  }

  return firstNode
}


function increaseRankBy(n) {
  let rankedListings = document.querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < rankedListings.length; i++) {
    rankedListings[i].innerHTML = parseInt(rankedListings[i].innerHTML) + n;
  }
}

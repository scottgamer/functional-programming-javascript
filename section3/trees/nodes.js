const nodeList = [5, 2, 4];

const node = {
  value: 5,
  left: {
    value: 2,
    left: null,
    right: {
      value: 4,
      left: null,
      right: null,
    },
  },
  right: null,
};

const reducer = (treeNode, element) => {
  if (treeNode === null) {
    return { value: element, left: null, right: null };
  }
  if (element < treeNode.value) {
    treeNode.left = reducer(treeNode.left, element);
  } else {
    treeNode.right = reducer(treeNode.right, element);
  }
  return treeNode;
};

const tree = nodeList.reduce(reducer, null);

console.log(tree);

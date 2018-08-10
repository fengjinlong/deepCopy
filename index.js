const deepcopyfe = (obj) => {
  // 创建一个新对象
  let result = {}
  let keys = Object.keys(obj),
      key = null,
      temp = null;

  for (let i = 0; i < keys.length; i++) {
      key = keys[i];    
      temp = obj[key];
      if (temp && typeof temp === 'object') {
          result[key] = deepCopy(temp);
      } else {
          result[key] = temp;
      }
  }
  return result;
}
export default deepcopyfe

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
  // Use map to create an array of formatted list items
  const failuresList = arr.map(item => `<li class="text-warning">${item}</li>`);
  
  return failuresList;
}

/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const failuresList = makeList(result.failure);
console.log(failuresList);

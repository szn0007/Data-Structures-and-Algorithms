// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// --- Examples
//   anagrams('heart', 'earthhh') --> True
//   anagrams('heart', '  earth') --> True
//   anagrams('Heart!', 'EARTH') --> True
//   anagrams('lol', 'lolc') --> False

// const anagrams = (stringA, stringB) => {
//   const sanitizedStringA = stringA.toLowerCase().replace(/[\W_]+/g, '')
//   const sanitizedStringB = stringB.toLowerCase().replace(/[\W_]+/g, '')

//   if (sanitizedStringA.length !== sanitizedStringB.length) {
//     return false
//   }

//   let objA = {}

//   for (let i = 0; i < sanitizedStringA.length; i++) {
//     let charA = sanitizedStringA[i]
//     !objA[charA] ? objA[charA] = 1 : objA[charA] ++
//   }
//   // console.log(objA)

//   for (let i = 0; i < sanitizedStringB.length; i++) {
//     let charB = sanitizedStringB[i]

//     if (!objA[charB]) {
//       return false
//     }
//   }

//   return true
// }

// Time Complexity => O(n+m)
// Space Complexity => 0(1)


const anagrams = (stringA, stringB) => {
  let sanitizedStringA = stringA.toLowerCase().replace(/[\W_]+/g, '')
  let sanitizedStringB = stringB.toLowerCase().replace(/[\W_]+/g, '')

  if (sanitizedStringA.length !== sanitizedStringB.length) {
    return false
  }
  arrA = sanitizedStringA.split('').sort().join('')
  arrB = sanitizedStringB.split('').sort().join('')

  // if (arrA !== arrB) {
  //   return false
  // }
  // return true

  return arrA === arrB
}

// Time Complexity => O(n * Log n)
// Space Complexity => 0(N)

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("Anagrams", () => {
  it("works if case sensitivity and non word characters NOT taken into account", () => {
    assert.equal(anagrams("earth", "heart"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
  it("is case insensitive. 'HEART' and 'earth' should return true", () => {
    assert.equal(anagrams("HEART", "earth"), true);
    assert.equal(anagrams("heart", "EARTH"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
  it("only matches word characters. 'heart!'' and '' earth' should return true", () => {
    assert.equal(anagrams("heart!", " earth"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
});

mocha.run();

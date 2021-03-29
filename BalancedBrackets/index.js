const BalancedBrackets = (input) => {
  let arr = input.split('\n')
  // console.log(arr)

  const stackAnalysis = (stack, char) => {
    let top = stack[stack.length - 1]
    switch (char){
      case '(':
      case '{':
      case '[':
        stack.push(char)
        break
      case ')':
        if (top === '(') {
          stack.pop()
        } else {
          stack.push(char)
        }
        break
      case '}':
        if (top === '{') {
          stack.pop()
        } else {
          stack.push(char)
        }
        break
      case ']':
        if (top === '[') {
          stack.pop()
        } else {
          stack.push(char)
        }
        break
    }
    return stack
  }

  //Loop through each input item
  arr.forEach(x => {
    let stack = []

    //Loop through each character of each input item
    for (let i = 0; i < x.length; i++) {
      stack = stackAnalysis(stack, x[i])
    }

    if (stack.length === 0) {
      console.log('YES')
    } else {
      console.log('NO')
    }
  });
}

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

mocha.setup('bdd');
const { assert } = chai;
console.log = sinon.spy();

describe('BalancedBrackets()', () => {
	it('returns YES.', () => {
    BalancedBrackets('{{[[(())]]}}');
    assert.equal(console.log.getCall(0).args[0], 'YES');
	});
	it('returns No', () => {
		BalancedBrackets('{[(])}');
    assert.equal(console.log.getCall(1).args[0], 'NO');
	});
});

mocha.run();

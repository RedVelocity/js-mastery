function camelize(str) {
  // (?:^\w|[A-Z]|\b\w|-+)
  return str.replace(/(?:\b\w|-+)/g, (match, index) => {
    if (match === '-') return '';
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

function parse(input) {
  const output = { bin: null, commands: [], flags: {} };
  const inputArray = input.split(' ');
  let readFlags = false;
  inputArray.every((word, index) => {
    if (index === 0) output.bin = word;
    else if (word.startsWith('-')) {
      const flag = word.replace(/^-+/, '');
      const [flagKey, flagValue] = flag.split('=');
      const camelizedFlagKey = camelize(flagKey);
      readFlags = true;
      output.flags = {
        ...output.flags,
        [camelizedFlagKey]: flagValue || 'true',
      };
    } else if (readFlags) return false;
    else output.commands.push(word);
    return true;
  });
  return output;
}

const input =
  'npm install regex -watch --save-dev=right -dev-server-node=false ignore my life --fml';
const output = parse(input);
console.log('input:', input);
console.log('output:', output);

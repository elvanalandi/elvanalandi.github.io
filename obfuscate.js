const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');

const obfuscateFile = async () => {
  const inputFilePath = './constants/index.ts'; // Adjust path as per your project
  const outputFilePath = './constants/index.ts'; // Output path

  try {
    const code = fs.readFileSync(inputFilePath, 'utf-8');

    const obfuscatedCode = JavaScriptObfuscator.obfuscate(code, {
      // Options for obfuscation (optional, adjust as per your needs)
      compact: true,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 0.75,
      deadCodeInjection: true,
      deadCodeInjectionThreshold: 0.4,
      debugProtection: false,
      debugProtectionInterval: false,
      disableConsoleOutput: true,
      identifierNamesGenerator: 'hexadecimal',
      log: false,
      renameGlobals: false,
      rotateStringArray: true,
      selfDefending: true,
      stringArray: true,
      stringArrayEncoding: 'base64',
      stringArrayThreshold: 0.8,
      unicodeEscapeSequence: false
    }).getObfuscatedCode();

    fs.writeFileSync(outputFilePath, obfuscatedCode, 'utf-8');
    console.log(`Obfuscation successful. Obfuscated file saved to ${outputFilePath}`);
  } catch (err) {
    console.error('Obfuscation error:', err);
  }
};

obfuscateFile();

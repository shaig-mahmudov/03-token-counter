function cleanText(text) {
  return text.trim();
}

console.log(cleanText("  Hello world  "));

function splitIntoWords(text) {
  return text.split(" ");
}

console.log(splitIntoWords("The quick brown fox"));

function removeEmptyWords(words) {
  return words.filter(function(word) {
    return word !== "";
  });
}

const messy = splitIntoWords("Hello   world");
console.log(messy);
console.log(removeEmptyWords(messy));

function estimateTokens(words) {
  return Math.ceil(words.length * 0.75);
}

const words = ["The", "quick", "brown", "fox"];
console.log(estimateTokens(words));

function countTokens(text) {
  const cleaned = cleanText(text);
  const words = splitIntoWords(cleaned);
  const filtered = removeEmptyWords(words);
  return estimateTokens(filtered);
}

console.log(countTokens("Hello"));
console.log(countTokens("Hello, world!"));
console.log(countTokens("The quick brown fox jumps over the lazy dog"));
console.log(countTokens("  I am learning JavaScript   today  "));

function estimateCost(tokenCount, pricePerMillionTokens) {
  return (tokenCount / 1000000) * pricePerMillionTokens;
}

function characterCount(text) {
  return cleanText(text).length;
}

const emailWordCount = 500;
const emailTokenCount = Math.ceil(emailWordCount * 0.75);

console.log(estimateCost(emailTokenCount, 0.15));
console.log(estimateCost(emailTokenCount, 3));
console.log(characterCount("  Count these characters  "));
console.log(countTokens("Hola, estoy aprendiendo JavaScript hoy"));

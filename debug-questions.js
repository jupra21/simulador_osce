// Debug script to check what's happening with the questions
import { questionsBasic1 } from './src/data/questions-basic-1.js';
import { questionsIntermediate } from './src/data/questions-intermediate.js';

console.log("========= DEBUGGING QUESTIONS ===========");

// Check Basic 1 questions
console.log(`Basic 1 Questions: ${questionsBasic1.length}`);
if (questionsBasic1.length > 0) {
  console.log(`First question ID: ${questionsBasic1[0].id}`);
  console.log(`First question text: ${questionsBasic1[0].question.substring(0, 50)}...`);
}

// Check Intermediate questions
console.log(`\nIntermediate Questions: ${questionsIntermediate.length}`);
if (questionsIntermediate.length > 0) {
  console.log(`First question ID: ${questionsIntermediate[0].id}`);
  console.log(`First question text: ${questionsIntermediate[0].question.substring(0, 50)}...`);
}

// Compare first 3 questions to see if they're the same
console.log("\n===== COMPARISON =====");
for (let i = 0; i < 3 && i < Math.min(questionsBasic1.length, questionsIntermediate.length); i++) {
  const basic1Q = questionsBasic1[i];
  const intermediateQ = questionsIntermediate[i];
  
  console.log(`Question ${i+1}:`);
  console.log(`Basic 1 ID: ${basic1Q.id}, Intermediate ID: ${intermediateQ.id}`);
  console.log(`Same ID: ${basic1Q.id === intermediateQ.id}`);
  console.log(`Same question: ${basic1Q.question === intermediateQ.question}`);
}

// Check if arrays are exactly the same by reference
console.log("\nAre question arrays the same reference?", questionsBasic1 === questionsIntermediate);

// Check if questions-intermediate is accidentally importing from questions.ts
console.log("\nChecking module structure:");
try {
  console.log("questionsIntermediate module type:", typeof questionsIntermediate);
  console.log("Is array?", Array.isArray(questionsIntermediate));
} catch (error) {
  console.error("Error checking questionsIntermediate:", error);
}

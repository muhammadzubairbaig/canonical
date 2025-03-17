exports.calculate = function (expression) {
  if (!expression || !expression.trim()) return 0; // Return 0 for empty or invalid input

  let tokens = expression.split(/\s+/); // Tokenize the input by whitespace
  let index = 0; // Track current position in the token list

  // Operator map for dynamic computation (easily extendable)
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (b === 0 ? null : a / b) // Handle division by zero gracefully
  };

  /**
   * Recursively evaluates the prefix expression.
   * @returns {number|null} - Computed result or null if the expression is invalid.
   */
  function evaluate() {
    if (index >= tokens.length) return null; // Invalid expression (not enough operands)

    let token = tokens[index++]; // Get current token and move index forward

    // If token is a number, return it as a float
    if (!isNaN(token)) return parseFloat(token);

    // If token is not a valid operator, return null
    if (!(token in operators)) return null;

    // Recursively get operands
    let operand1 = evaluate();
    let operand2 = evaluate();

    // If any operand is invalid, return null (invalid expression)
    if (operand1 === null || operand2 === null) return null;

    // Perform operation and return result
    return operators[token](operand1, operand2);
  }

  try {
    let result = evaluate();
    
    // Ensure full expression is consumed; otherwise, return 0 (invalid case)
    return result === null || index !== tokens.length ? 0 : result;
  } catch (error) {
    return 0; // Return 0 in case of unexpected errors
  }
};

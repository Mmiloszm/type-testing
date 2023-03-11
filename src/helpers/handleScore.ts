export const handleScore = (
  currentTextParts: string[],
  inputTextParts: string[],
  currentScore: number
) => {
  for (let i = 0; i < currentTextParts.length; i++) {
    if (currentTextParts[i] === inputTextParts[i]) {
      currentScore = currentScore + 1;
    }
  }
  return currentScore;
};

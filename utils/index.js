export function normalizeZodError(zodErrorObject) {
  return zodErrorObject.error.issues.reduce((acc, issue) => {
    const field = issue.path[0];
    if (!acc[field]) {
      acc[field] = [];
    }
    acc[field].push(issue.message);
    return acc;
  }, {});
}

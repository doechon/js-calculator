export default {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [2, "always", ["feat", "fix", "refactor", "build", "chore"]],
        // НОВОЕ ПРАВИЛО: feat и fix должны иметь номер тикета
        "subject-ticket-format": [2, "always", /^(feat|fix): #\d+ .+$|^(refactor|build|chore): .+$/],
    },
}

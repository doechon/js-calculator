#!/usr/bin/env node
import { execSync } from "child_process"

console.log("🚀 Мердж релизной ветки в main...")

try {
    // 1. Получаем текущую ветку (просто для информации)
    const currentBranch = execSync("git branch --show-current").toString().trim()
    console.log(`📁 Текущая ветка: ${currentBranch}`)

    // 2. Мерджим в main
    console.log("🔀 Переключаемся на main и мерджим...")
    execSync("git checkout main", { stdio: "inherit" })
    execSync(`git merge ${currentBranch} --no-ff -m "Release ${currentBranch}"`, { stdio: "inherit" })

    // 3. Пушим всё (git сам скажет если уже запушено)
    console.log("📤 Пушим изменения...")
    execSync("git push origin main", { stdio: "inherit" })
    execSync("git push --tags", { stdio: "inherit" })

    console.log(`✅ Релиз из ветки ${currentBranch} завершён!`)
} catch (error) {
    console.error("❌ Ошибка при мердже:", error.message)
    process.exit(1)
}

import { execSync } from "child_process";

async function runPerformanceTests() {
  // eslint-disable-next-line no-console
  console.log("🚀 Running performance tests...");
  try {
    execSync("lhci autorun", { stdio: "inherit" });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Lighthouse CI failed:", error);
  }
  try {
    execSync(process.platform === "win32" ? "set ANALYZE=true&& npm run build" : "ANALYZE=true npm run build", { stdio: "inherit" });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Bundle analysis failed:", error);
  }
  // eslint-disable-next-line no-console
  console.log("✅ Performance tests completed");
}

runPerformanceTests();



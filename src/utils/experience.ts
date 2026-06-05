/**
 * Dynamically calculates the years of experience based on the current year.
 * Denise has 15 years of experience in 2026, which means she started in 2011.
 */
export function getYearsOfExperience(): number {
  const startYear = 2011;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
}

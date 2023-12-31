export function isDateValid(date: string): boolean {
	const today = new Date().toLocaleDateString();
	const currentYear = Number(today.substring(6, 10));
	const currentMonth = Number(today.substring(3, 5));
	const currentDay = Number(today.substring(0, 2));
	const year = Number(date.substring(6, 10));
	const month = Number(date.substring(3, 5));
	const day = Number(date.substring(0, 2));

	if (year > currentYear) return false;
	if (year === currentYear && month > currentMonth) return false;
	if (year === currentYear && currentMonth === month && day > currentDay) return false;

	if (currentYear - year < 18) return false;
	if (currentYear - year === 18 && month > currentMonth) return false;
	if (currentYear - year === 18 && month === currentMonth && day >= currentDay) return false;

	return true;
}

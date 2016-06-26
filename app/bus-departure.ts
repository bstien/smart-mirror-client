export class BusDeparture {
	line: {
		number: number;
		name: string;
	};

	arrival: {
		expected: string;
		aimed: string;
	};

	departure: {
		expected: string;
		aimed: string;
	};

	platform: number;

	origin: {
		id: number;
		name: string;
	};

	destination: {
		id: number;
		name: string;
	};
}
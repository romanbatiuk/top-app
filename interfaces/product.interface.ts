export interface ProductCharacteristic {
	name: string;
	value: string;
}

export interface ReviewModel {
	_id: string;
	name: string;
	title: string;
	description: string;
	rating: number;
	createdAt: Date;
}

export interface ProductModel {
	_id: string;
	image: string;
	title: string;
	link: string;
	price: number;
	oldPrice: number;
	credit: number;
	description: string;
	advantages: string;
	disAdvantages: string;
	categories: string[];
	tags: string[];
	initialRating: number;
	characteristics: ProductCharacteristic[];
	reviews: ReviewModel[];
	reviewCount: number;
	reviewAvg: number;
	createdAt: Date;
	updatedAt: Date;
}

export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products
}

export interface TopPageAdvantage {
	_id: string;
	title: string;
	description: string;
}

export interface HtData {
	_id: string;
	count: number;
	juniorSalary: number;
	middleSalary: number;
	seniorSalary: number;
	updatedAt: Date;
}

export interface TopPageModel {
	_id: string;
	firstCategory: TopLevelCategory;
	secondCategory: string;
	alias: string;
	title: string;
	category: string;
	hh: HtData;
	advantages: TopPageAdvantage[];
	metaTitle: string;
	metaDescription: string;
	seoText: string;
	tagsTitle: string;
	tags: string[];
	createdAt: Date;
	updatedAt: Date;
}

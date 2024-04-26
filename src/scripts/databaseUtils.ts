import { db, Product, or, eq, asc, desc } from 'astro:db';

export async function retrieveCategories() {
	return db.selectDistinct({ category: Product.category }).from(Product);
}

export function getProductSortKey(column: string, order: string) {
	const orderMapping = {
		"asc": (col) => asc(col),
		"desc": (col) => desc(col),
	}

	if (orderMapping[order] !== undefined) {
		return () => orderMapping[order](Product[column]);
	}
	return () => "";
}

// TODO: specify type.
export async function queryProducts(sortKeyMapping, order, filters) {
	const cannotRetrieveKey = (
		order === "" ||
		sortKeyMapping[order] === undefined ||
		sortKeyMapping[order].sortKey === undefined
	);
	const sortKey = (cannotRetrieveKey) ? '' : sortKeyMapping[order].sortKey();

	if (filters.length <= 0 || filters[0] === "") {
		return db.select().from(Product).orderBy(sortKey);
	}

	const filterKeys = filters.map((filter) => eq(Product.category, filter));

	return db.select().from(Product).where(or(...filterKeys)).orderBy(sortKey);
}

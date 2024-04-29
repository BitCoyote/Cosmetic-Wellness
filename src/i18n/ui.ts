export const languages = {
	en: 'English',
	vi: 'Tiếng Việt',
};

export const wordOrder = {
	en: 'adjective-noun',
	vi: 'noun-adjective',
}

export const defaultLang = 'vi';
export const currentYear = new Date().getFullYear();

export const ui = {
	en: {
		'nav.home': 'Home',
		'nav.shop': 'Shop',
		'nav.blog': 'Blog',
		'nav.about': 'About',
		'nav.contact': 'Contact',

		'faqs.title': 'Frequently Asked Questions',

		'footer.copyright': `Copyright © ${currentYear} QuynhBio. All rights reserved.`,
		'footer.sitemap': 'Site Map',
		'footer.privacy': 'Privacy Policy',
		'footer.terms': 'Terms of Service',

		'home.hero.title.firstHalf': 'Become more',
		'home.hero.title.beautiful': 'beautiful',
		'home.hero.title.preBreak': ' ',
		'home.hero.title.secondHalf': 'with Quỳnh Bio',
		'home.hero.subtitle': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat.',
		'home.hero.shop-now': 'Shop Now',
		'home.hero.contact-us': 'Contact Us',
		'home.featured-products': 'Featured Products',

		'shop.banner.title': 'Product Catalogue',
		'shop.banner.subtitle': 'Welcome to our Product Catalogue - Where Every Beauty Dream Finds Its Perfect Match',
		'shop.filterForm.title': 'Filter',
		'shop.filterForm.sortBy': 'Sort By',
		'shop.filterForm.filterBy': 'Filter By',
		'shop.filterForm.priceAsc': 'Price: Low to High',
		'shop.filterForm.priceDesc': 'Price: High to Low',
		'shop.filterForm.viewResults': 'Show Results',
		'shop.filterButton': 'Filters & Sort by',
		'shop.productGrid.title': 'Products',

		'contact.title': 'Get in Touch',
		'contact.subtitle': 'Have a problem? Feel free to contact us.',
		'contact.methods': 'Contact Methods',
		'contact.phone': 'Phone',
		'contact.messenger': 'Facebook Messenger',
		'contact.officeAddress': 'Office Address',
		'contact.toggleMapTheme': 'Toggle Map Theme',
		'contact.toggleMapThemeHint': 'This is helpful when viewing the map in satellite mode',

		'404.subtitle': 'The page that you requested could not be found',
		'404.go-home': 'Go home',
		'404.contact-us': 'Contact us',
	},

	vi: {
		'currency': 'VND',

		'nav.home': 'Trang Chủ',
		'nav.shop': 'Sản Phẩm',
		'nav.blog': 'Tin Tức',
		'nav.about': 'Giới Thiệu',
		'nav.contact': 'Liên Hệ',

		'faqs.title': 'Câu Hỏi Thường Gặp',

		'footer.copyright': `Bản quyền © ${currentYear} QuynhBio. Mọi quyền được bảo lưu.`,
		'footer.sitemap': 'Sơ đồ Website',
		'footer.privacy': 'Quyền riêng tư',
		'footer.terms': 'Điều khoản sử dụng',

		'home.hero.title.firstHalf': 'Trở nên',
		'home.hero.title.beautiful': 'xinh đẹp',
		'home.hero.title.preBreak': 'hơn',
		'home.hero.title.secondHalf': 'với Quỳnh Bio',
		'home.hero.subtitle': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat.',
		'home.hero.shop-now': 'Mua Hàng Ngay',
		'home.hero.contact-us': 'Liên hệ với chúng tôi',
		'home.featured-products': 'Sản Phẩm Nổi Bật',

		'shop.banner.title': 'Danh Mục Sản Phẩm',
		'shop.banner.subtitle': 'Quynhbio Shop kính chào quý khách. Chúc quý khách có một trải nghiệm mua sắm thuận tiện và như ý.',
		'shop.filterForm.title': 'Bộ Lọc',
		'shop.filterForm.sortBy': 'Thứ tự sản phẩm',
		'shop.filterForm.filterBy': 'Lọc theo mặt hàng',
		'shop.filterForm.nameAsc': 'A-Z',
		'shop.filterForm.nameDesc': 'Z-A',
		'shop.filterForm.priceAsc': 'Giá: tăng dần',
		'shop.filterForm.priceDesc': 'Giá: giảm dần',
		'shop.filterForm.viewResults': 'Hiện kết quả',
		'shop.filterButton': 'Sắp Xếp & Lọc Sản Phẩm',
		'shop.productGrid.title': 'Sản Phẩm',

		'contact.title': 'Thông Tin Liên Lạc',
		'contact.subtitle': 'Bạn có vấn đề hoặc câu hỏi gì sao? Hãy liên hệ với chúng tôi.',
		'contact.methods': 'Phương Thức Liên Lạc',
		'contact.phone': 'Điện Thoại',
		'contact.messenger': 'Messenger',
		'contact.officeAddress': 'Địa Chỉ Văn Phòng',
		'contact.toggleMapTheme': 'Chuyển Màu Sắc Bản Đồ',
		'contact.toggleMapThemeHint': 'Ấn nút này nếu bạn xem bản đồ ở chế độ vệ tinh',

		'404.subtitle': 'Nội dung bạn đang cố truy cập không tồn tại trên website',
		'404.go-home': 'Quay trở lại trang chủ',
		'404.contact-us': 'Liên hệ với chúng tôi',
	},
} as const;

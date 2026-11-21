SET SESSION FOREIGN_KEY_CHECKS=0;

/* Drop Indexes */

DROP INDEX uq_materials_01 ON materials;
DROP INDEX idx_products_01 ON products;
DROP INDEX uq_products_01 ON products;
DROP INDEX idx_product_categories_01 ON product_categories;
DROP INDEX idx_repair_parts_01 ON repair_parts;
DROP INDEX idx_specification_detail_individuals_01 ON specification_detail_individuals;
DROP INDEX idx_specification_detail_individuals_02 ON specification_detail_individuals;
DROP INDEX idx_specification_detail_individuals_03 ON specification_detail_individuals;
DROP INDEX idx_specification_detail_individuals_04 ON specification_detail_individuals;



/* Drop Tables */

DROP TABLE IF EXISTS product_color_pictures;
DROP TABLE IF EXISTS colors;
DROP TABLE IF EXISTS product_settings;
DROP TABLE IF EXISTS color_groups;
DROP TABLE IF EXISTS discount_rate_items;
DROP TABLE IF EXISTS products_materials;
DROP TABLE IF EXISTS products_product_feature_tags;
DROP TABLE IF EXISTS products_product_html_parts;
DROP TABLE IF EXISTS products_repair_part_groups;
DROP TABLE IF EXISTS products_tags;
DROP TABLE IF EXISTS product_option_contents_pictures;
DROP TABLE IF EXISTS product_option_contents;
DROP TABLE IF EXISTS product_options;
DROP TABLE IF EXISTS product_pictures;
DROP TABLE IF EXISTS product_size_pictures;
DROP TABLE IF EXISTS related_products;
DROP TABLE IF EXISTS semi_order_html_contents;
DROP TABLE IF EXISTS specification_detail_individuals;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS discount_rates;
DROP TABLE IF EXISTS materials;
DROP TABLE IF EXISTS notices;
DROP TABLE IF EXISTS repair_part_groups_repair_parts;
DROP TABLE IF EXISTS repair_parts;
DROP TABLE IF EXISTS pictures;
DROP TABLE IF EXISTS plate_thicknesses;
DROP TABLE IF EXISTS product_categories;
DROP TABLE IF EXISTS product_feature_tags;
DROP TABLE IF EXISTS repair_part_groups;
DROP TABLE IF EXISTS product_html_parts;
DROP TABLE IF EXISTS product_html_part_types;
DROP TABLE IF EXISTS sizes;
DROP TABLE IF EXISTS size_groups;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS taxes;




/* Create Tables */

CREATE TABLE colors
(
	color_id bigint unsigned NOT NULL AUTO_INCREMENT,
	color_group_id bigint unsigned NOT NULL,
	color_name varchar(32),
	-- 論理削除用
	-- 日付が入っている場合は論理削除
	deleted_at datetime COMMENT '論理削除用
日付が入っている場合は論理削除',
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	PRIMARY KEY (color_id)
);


CREATE TABLE color_groups
(
	color_group_id bigint unsigned NOT NULL AUTO_INCREMENT,
	color_group_name varchar(64),
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	PRIMARY KEY (color_group_id)
);


CREATE TABLE discount_rates
(
	discount_rate_id bigint unsigned NOT NULL AUTO_INCREMENT,
	discount_rate_title varchar(255),
	-- 論理削除用
	-- 日付が入っている場合は論理削除
	deleted_at datetime COMMENT '論理削除用
日付が入っている場合は論理削除',
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	PRIMARY KEY (discount_rate_id)
);


CREATE TABLE discount_rate_items
(
	discount_rate_item_id bigint unsigned NOT NULL AUTO_INCREMENT,
	discount_rate_id bigint unsigned NOT NULL,
	number_of_lower_limit bigint unsigned,
	number_of_upper_limit bigint unsigned,
	discount_rate bigint unsigned,
	-- 論理削除用
	-- 日付が入っている場合は論理削除
	deleted_at datetime COMMENT '論理削除用
日付が入っている場合は論理削除',
	created_at datetime DEFAULT now(),
	updated_at datetime DEFAULT now(),
	PRIMARY KEY (discount_rate_item_id)
);


CREATE TABLE materials
(
	material_id bigint unsigned NOT NULL AUTO_INCREMENT,
	-- 素材コード
	material_code varchar(255) NOT NULL COMMENT '素材コード',
	material_name varchar(255) NOT NULL,
	-- メーカー名
	maker_name varchar(255) COMMENT 'メーカー名',
	cost_price bigint,
	unit_price bigint,
	square_meter_unit_price bigint,
	color_id bigint unsigned,
	width_size bigint,
	height_size bigint,
	plate_thickness_id bigint unsigned,
	history text,
	-- 0:在庫有り
	-- 1:欠品
	-- 
	stock_status tinyint COMMENT '0:在庫有り
1:欠品
',
	-- 論理削除用
	-- 日付が入っている場合は論理削除
	deleted_at datetime COMMENT '論理削除用
日付が入っている場合は論理削除',
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	PRIMARY KEY (material_id)
);


CREATE TABLE notices
(
	notice_id bigint unsigned NOT NULL AUTO_INCREMENT,
	notice text,
	-- 1:表示
	-- 0:非表示
	is_display bit(1) COMMENT '1:表示
0:非表示',
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	PRIMARY KEY (notice_id)
);


CREATE TABLE pictures
(
	picture_id bigint unsigned NOT NULL AUTO_INCREMENT,
	-- 保存先のディレクトリ
	directory varchar(255) COMMENT '保存先のディレクトリ',
	picture_path varchar(255) NOT NULL,
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	PRIMARY KEY (picture_id)
);


CREATE TABLE plate_thicknesses
(
	plate_thickness_id bigint unsigned NOT NULL AUTO_INCREMENT,
	-- 板の厚さ
	plate_thickness decimal(5,1) COMMENT '板の厚さ',
	-- 論理削除用
	-- 日付が入っている場合は論理削除
	deleted_at datetime COMMENT '論理削除用
日付が入っている場合は論理削除',
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	PRIMARY KEY (plate_thickness_id)
);


CREATE TABLE products
(
	-- 商品ID
	product_id bigint unsigned NOT NULL AUTO_INCREMENT COMMENT '商品ID',
	-- 商品コード
	product_code varchar(32) COMMENT '商品コード',
	-- 商品種別のcode
	-- 標準商品:standard
	-- セミオーダー:custom
	product_type_code varchar(255) NOT NULL COMMENT '商品種別のcode
標準商品:standard
セミオーダー:custom',
	-- 商品名
	product_name varchar(255) NOT NULL COMMENT '商品名',
	product_name_displayed_cart varchar(255),
	-- 商品カテゴリーのID
	product_category_id bigint unsigned NOT NULL COMMENT '商品カテゴリーのID',
	-- 1:表示
	-- 0:非表示
	is_display bit(1) NOT NULL COMMENT '1:表示
0:非表示',
	-- メーカー名
	maker_name varchar(255) COMMENT 'メーカー名',
	-- 商品概要
	product_summary text COMMENT '商品概要',
	-- サムネイル画像のID
	picture_id bigint unsigned COMMENT 'サムネイル画像のID',
	-- 定価
	price bigint COMMENT '定価',
	discount_rate_id bigint unsigned,
	-- 発送予定がまとめられたCSVファイルの1行目の連番をセットする
	delivery_schedule_id bigint COMMENT '発送予定がまとめられたCSVファイルの1行目の連番をセットする',
	delivery_supplementations text,
	-- 0:タグから表示
	-- 1:自由選択
	related_product_option bit(1) COMMENT '0:タグから表示
1:自由選択',
	customer_feedback_pc_word varchar(255),
	number_of_customer_feedback_pc_word bigint unsigned,
	customer_feedback_sp_word varchar(255),
	number_of_customer_feedback_sp_word bigint unsigned,
	-- 1:有効
	-- 0:無効
	is_sold_out_notice_valid bit(1) COMMENT '1:有効
0:無効',
	sold_out_notice varchar(32),
	history text,
	memo varchar(255),
	-- 論理削除用
	-- 日付が入っている場合は論理削除
	deleted_at datetime COMMENT '論理削除用
日付が入っている場合は論理削除',
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	PRIMARY KEY (product_id)
);


CREATE TABLE products_materials
(
	-- 商品ID
	product_id bigint unsigned NOT NULL COMMENT '商品ID',
	material_id bigint unsigned NOT NULL,
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	CONSTRAINT uq_products_materials_01 UNIQUE (product_id, material_id)
);


CREATE TABLE products_product_feature_tags
(
	-- 商品ID
	product_id bigint unsigned NOT NULL COMMENT '商品ID',
	product_feature_tag_id bigint unsigned NOT NULL,
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	CONSTRAINT uq_products_product_feature_tags_01 UNIQUE (product_id, product_feature_tag_id)
);


CREATE TABLE products_product_html_parts
(
	-- 商品ID
	product_id bigint unsigned NOT NULL COMMENT '商品ID',
	product_html_part_id bigint unsigned NOT NULL,
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW()
);


CREATE TABLE products_repair_part_groups
(
	-- 商品ID
	product_id bigint unsigned NOT NULL COMMENT '商品ID',
	repair_part_groups_id bigint unsigned NOT NULL,
	size_id bigint unsigned,
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	CONSTRAINT uq_products_repair_part_groups_01 UNIQUE (product_id, repair_part_groups_id)
);


CREATE TABLE products_tags
(
	-- 
	-- 
	tag_id bigint unsigned NOT NULL COMMENT '
',
	-- 商品ID
	product_id bigint unsigned NOT NULL COMMENT '商品ID',
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	CONSTRAINT uq_products_tags_01 UNIQUE (tag_id, product_id)
);


CREATE TABLE product_categories
(
	-- 商品カテゴリーのID
	product_category_id bigint unsigned NOT NULL AUTO_INCREMENT COMMENT '商品カテゴリーのID',
	parent_category_id bigint unsigned,
	-- 商品カテゴリーの名称
	product_category_name varchar(255) COMMENT '商品カテゴリーの名称',
	display_order bigint,
	link_url text,
	-- サムネイル画像へのパス
	thumbnail_path varchar(255) COMMENT 'サムネイル画像へのパス',
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	PRIMARY KEY (product_category_id)
);


CREATE TABLE product_color_pictures
(
	-- 商品ID
	product_id bigint unsigned NOT NULL COMMENT '商品ID',
	picture_id bigint unsigned NOT NULL,
	color_id bigint unsigned NOT NULL,
	description varchar(255),
	display_order bigint,
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	CONSTRAINT uq_product_color_pictures_01 UNIQUE (product_id, picture_id, color_id, display_order)
);


CREATE TABLE product_feature_tags
(
	product_feature_tag_id bigint unsigned NOT NULL AUTO_INCREMENT,
	product_feature_tag_name varchar(64) NOT NULL,
	-- HTMLで構成
	product_feature_tag_content text NOT NULL COMMENT 'HTMLで構成',
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	PRIMARY KEY (product_feature_tag_id)
);


CREATE TABLE product_html_parts
(
	product_html_part_id bigint unsigned NOT NULL AUTO_INCREMENT,
	product_html_part_type_id bigint unsigned NOT NULL,
	part_title varchar(255),
	-- 商品の
	-- 出荷目安の補足
	-- 商品情報選択項目
	-- 特徴
	-- 活用事例
	-- 商品仕様
	-- 注意事項
	-- メーカー欠品情報
	-- 配送に関する注意事項
	-- 出荷目安について
	-- 欠品のお知らせ
	-- 補修部品
	-- をHTMLで記述
	html_part text COMMENT '商品の
出荷目安の補足
商品情報選択項目
特徴
活用事例
商品仕様
注意事項
メーカー欠品情報
配送に関する注意事項
出荷目安について
欠品のお知らせ
補修部品
をHTMLで記述',
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	PRIMARY KEY (product_html_part_id)
);


CREATE TABLE product_html_part_types
(
	product_html_part_type_id bigint unsigned NOT NULL AUTO_INCREMENT,
	-- 1:商品情報選択項目 追加設定
	-- 2:商品特徴
	-- 3:活用事例
	-- 4:商品仕様
	-- 5:注意事項
	-- 6:メーカー欠品情報
	-- 7:配送に関する注意事項
	-- 8:出荷目安について
	-- 9:補修部品
	-- 10:headタグ追加HTML
	type_id bigint NOT NULL COMMENT '1:商品情報選択項目 追加設定
2:商品特徴
3:活用事例
4:商品仕様
5:注意事項
6:メーカー欠品情報
7:配送に関する注意事項
8:出荷目安について
9:補修部品
10:headタグ追加HTML',
	product_html_part_type_name varchar(255),
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	PRIMARY KEY (product_html_part_type_id),
	UNIQUE (type_id)
);


CREATE TABLE product_options
(
	product_option_id bigint unsigned NOT NULL AUTO_INCREMENT,
	-- 商品ID
	product_id bigint unsigned NOT NULL COMMENT '商品ID',
	-- オプション名
	option_name varchar(255) NOT NULL COMMENT 'オプション名',
	-- nameタグへセットする名称を設定
	html_tag_name varchar(255) NOT NULL COMMENT 'nameタグへセットする名称を設定',
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	PRIMARY KEY (product_option_id)
);


CREATE TABLE product_option_contents
(
	product_option_content_id bigint unsigned NOT NULL AUTO_INCREMENT,
	product_option_id bigint unsigned NOT NULL,
	-- タグのvalueへセットする値
	value varchar(255) COMMENT 'タグのvalueへセットする値',
	display_name varchar(255),
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	PRIMARY KEY (product_option_content_id)
);


CREATE TABLE product_option_contents_pictures
(
	-- 商品ID
	product_id bigint unsigned COMMENT '商品ID',
	product_option_content_id bigint unsigned NOT NULL,
	picture_id bigint unsigned NOT NULL,
	description varchar(255),
	display_order bigint,
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	CONSTRAINT uq_product_option_contents_pictures_01 UNIQUE (product_id, product_option_content_id, picture_id, display_order)
);


CREATE TABLE product_pictures
(
	-- 商品ID
	product_id bigint unsigned NOT NULL COMMENT '商品ID',
	picture_id bigint unsigned NOT NULL,
	description varchar(255),
	display_order bigint,
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	CONSTRAINT uq_product_pictures_01 UNIQUE (product_id, picture_id, display_order)
);


CREATE TABLE product_settings
(
	product_setting_id bigint unsigned NOT NULL AUTO_INCREMENT,
	-- 商品ID
	product_id bigint unsigned NOT NULL COMMENT '商品ID',
	-- 0:未設定（商品）
	-- 1:カラー別
	-- 2:サイズ別
	-- 3:オプション別
	picture_priority tinyint COMMENT '0:未設定（商品）
1:カラー別
2:サイズ別
3:オプション別',
	-- 1:有効
	-- 0:無効
	is_color_valid bit(1) COMMENT '1:有効
0:無効',
	color_display_name varchar(255),
	color_group_id bigint unsigned,
	-- 1:有効
	-- 0:無効
	is_size_valid bit(1) COMMENT '1:有効
0:無効',
	size_group_id bigint unsigned,
	-- 1:規格サイズ(数値)
	-- 2:規格サイズ(文字列)
	-- 3:自由入力
	specify_size tinyint unsigned COMMENT '1:規格サイズ(数値)
2:規格サイズ(文字列)
3:自由入力',
	specification_size_numerical_display varchar(255),
	specification_size_numerical_wh_limit bigint unsigned,
	specification_size_string_display varchar(255),
	free_input_width_display varchar(255),
	free_input_width_html_tag_id varchar(255),
	free_input_height_display varchar(255),
	free_input_height_html_tag_id varchar(255),
	-- 1:有効
	-- 0:無効
	is_free_input_depth_valid bit(1) COMMENT '1:有効
0:無効',
	free_input_depth_display varchar(255),
	free_input_depth_html_tag_id varchar(255),
	free_input_wdh_limit bigint unsigned,
	-- 1:有効
	-- 0:無効
	is_plate_thickness_valid bit(1) COMMENT '1:有効
0:無効',
	-- 
	-- 
	plate_thickness_display varchar(255) COMMENT '
',
	-- 1:有効
	-- 0:無効
	is_product_option_valid bit(1) COMMENT '1:有効
0:無効',
	-- 1:有効
	-- 0:無効
	is_destination_valid bit(1) COMMENT '1:有効
0:無効',
	-- 1:有効
	-- 0:無効
	is_quantity_valid bit(1) COMMENT '1:有効
0:無効',
	-- 1:有効
	-- 0:無効
	is_stock_valid bit(1) COMMENT '1:有効
0:無効',
	stock_html_tag_id varchar(255),
	-- 1:有効
	-- 0:無効
	is_delivery_charge_valid bit(1) COMMENT '1:有効
0:無効',
	-- 1:有効
	-- 0:無効
	is_large_delivery_valid bit(1) COMMENT '1:有効
0:無効',
	-- 1:有効
	-- 0:無効
	is_fax_order_valid bit(1) COMMENT '1:有効
0:無効',
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	PRIMARY KEY (product_setting_id)
);


CREATE TABLE product_size_pictures
(
	-- 商品ID
	product_id bigint unsigned NOT NULL COMMENT '商品ID',
	picture_id bigint unsigned NOT NULL,
	size_id bigint unsigned NOT NULL,
	description varchar(255),
	display_order bigint,
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	CONSTRAINT uq_product_size_pictures_01 UNIQUE (product_id, picture_id, size_id)
);


-- 商品テーブルの関連商品オプションが1の場合に作成される
CREATE TABLE related_products
(
	-- 関連する商品ID
	related_product_id bigint unsigned NOT NULL COMMENT '関連する商品ID',
	-- 商品ID
	product_id bigint unsigned NOT NULL COMMENT '商品ID',
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	PRIMARY KEY (related_product_id, product_id),
	CONSTRAINT uq_related_products_01 UNIQUE (related_product_id, product_id)
) COMMENT = '商品テーブルの関連商品オプションが1の場合に作成される';


CREATE TABLE repair_parts
(
	repair_parts_id bigint unsigned NOT NULL AUTO_INCREMENT,
	-- 商品コード
	product_code varchar(32) NOT NULL COMMENT '商品コード',
	-- 商品名
	product_name varchar(255) NOT NULL COMMENT '商品名',
	product_name_displayed_cart varchar(255),
	-- 商品概要
	product_summary text COMMENT '商品概要',
	thumbnail_picture_id bigint unsigned,
	-- 定価
	price bigint COMMENT '定価',
	-- 発送予定がまとめられたCSVファイルの1行目の連番をセットする
	delivery_schedule_id bigint COMMENT '発送予定がまとめられたCSVファイルの1行目の連番をセットする',
	-- 論理削除用
	-- 日付が入っている場合は論理削除
	deleted_at datetime COMMENT '論理削除用
日付が入っている場合は論理削除',
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	PRIMARY KEY (repair_parts_id)
);


CREATE TABLE repair_part_groups
(
	repair_part_groups_id bigint unsigned NOT NULL AUTO_INCREMENT,
	repair_part_group_name varchar(64),
	product_html_part_id bigint unsigned NOT NULL,
	created_at datetime,
	updated_at datetime,
	PRIMARY KEY (repair_part_groups_id)
);


CREATE TABLE repair_part_groups_repair_parts
(
	repair_part_groups_id bigint unsigned NOT NULL,
	repair_parts_id bigint unsigned NOT NULL,
	created_at datetime,
	updated_at datetime,
	CONSTRAINT uq_repair_part_groups_repair_parts_01 UNIQUE (repair_part_groups_id, repair_parts_id)
);


CREATE TABLE semi_order_html_contents
(
	semi_order_html_content_id bigint unsigned NOT NULL AUTO_INCREMENT,
	-- 商品テーブル主キー
	product_id bigint unsigned NOT NULL COMMENT '商品テーブル主キー',
	-- セミオーダーページのHTMLを記述
	html mediumtext NOT NULL COMMENT 'セミオーダーページのHTMLを記述',
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	PRIMARY KEY (semi_order_html_content_id),
	UNIQUE (product_id)
);


CREATE TABLE sizes
(
	size_id bigint unsigned NOT NULL AUTO_INCREMENT,
	size_group_id bigint unsigned NOT NULL,
	-- 1:数値
	-- 2:文字列
	size_type tinyint(1) unsigned NOT NULL COMMENT '1:数値
2:文字列',
	-- 数値種別の場合
	-- 横×縦
	-- の形式で設定
	-- 
	-- 文字列の場合はそのまま設定
	size varchar(64) COMMENT '数値種別の場合
横×縦
の形式で設定

文字列の場合はそのまま設定',
	width_size bigint,
	height_size bigint,
	-- 論理削除用
	-- 日付が入っている場合は論理削除
	deleted_at datetime COMMENT '論理削除用
日付が入っている場合は論理削除',
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	PRIMARY KEY (size_id)
);


CREATE TABLE size_groups
(
	size_group_id bigint unsigned NOT NULL AUTO_INCREMENT,
	size_group_name varchar(64),
	created_at datetime DEFAULT now(),
	updated_at datetime DEFAULT now(),
	PRIMARY KEY (size_group_id)
);


CREATE TABLE specification_detail_individuals
(
	specification_detail_individual_id bigint NOT NULL AUTO_INCREMENT,
	-- 商品ID
	product_id bigint unsigned NOT NULL COMMENT '商品ID',
	-- 1:表示
	-- 0:非表示
	is_default_display bit(1) COMMENT '1:表示
0:非表示',
	color_id bigint unsigned,
	size_id bigint unsigned,
	plate_thickness_id bigint unsigned,
	product_option_content_id bigint unsigned,
	-- 商品コード
	product_code varchar(32) NOT NULL COMMENT '商品コード',
	-- 定価
	price bigint COMMENT '定価',
	product_name_displayed_cart varchar(255),
	-- 発送予定がまとめられたCSVファイルの1行目の連番をセットする
	delivery_schedule_id bigint COMMENT '発送予定がまとめられたCSVファイルの1行目の連番をセットする',
	-- 1:有効
	-- 0:無効
	is_destination_valid bit(1) COMMENT '1:有効
0:無効',
	-- 1:有効
	-- 0:無効
	is_delivery_charge_valid bit(1) COMMENT '1:有効
0:無効',
	-- 1:有効
	-- 0:無効
	is_large_delivery_valid bit(1) COMMENT '1:有効
0:無効',
	memo varchar(255),
	-- 論理削除用
	-- 日付が入っている場合は論理削除
	deleted_at datetime COMMENT '論理削除用
日付が入っている場合は論理削除',
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	PRIMARY KEY (specification_detail_individual_id)
);


CREATE TABLE tags
(
	-- 
	-- 
	tag_id bigint unsigned NOT NULL AUTO_INCREMENT COMMENT '
',
	tag_name varchar(255) NOT NULL,
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	PRIMARY KEY (tag_id)
);


CREATE TABLE taxes
(
	tax_id bigint unsigned NOT NULL AUTO_INCREMENT,
	tax bigint NOT NULL,
	tax_change_date datetime NOT NULL,
	created_at datetime DEFAULT NOW(),
	updated_at datetime DEFAULT NOW(),
	PRIMARY KEY (tax_id)
);



/* Create Foreign Keys */

ALTER TABLE product_color_pictures
	ADD FOREIGN KEY (color_id)
	REFERENCES colors (color_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE colors
	ADD FOREIGN KEY (color_group_id)
	REFERENCES color_groups (color_group_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE product_settings
	ADD FOREIGN KEY (color_group_id)
	REFERENCES color_groups (color_group_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE discount_rate_items
	ADD FOREIGN KEY (discount_rate_id)
	REFERENCES discount_rates (discount_rate_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE products
	ADD FOREIGN KEY (discount_rate_id)
	REFERENCES discount_rates (discount_rate_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE products_materials
	ADD FOREIGN KEY (material_id)
	REFERENCES materials (material_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE product_color_pictures
	ADD FOREIGN KEY (picture_id)
	REFERENCES pictures (picture_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE product_option_contents_pictures
	ADD FOREIGN KEY (picture_id)
	REFERENCES pictures (picture_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE product_pictures
	ADD FOREIGN KEY (picture_id)
	REFERENCES pictures (picture_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE product_size_pictures
	ADD FOREIGN KEY (picture_id)
	REFERENCES pictures (picture_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE repair_parts
	ADD FOREIGN KEY (thumbnail_picture_id)
	REFERENCES pictures (picture_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE products_materials
	ADD FOREIGN KEY (product_id)
	REFERENCES products (product_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE products_product_feature_tags
	ADD FOREIGN KEY (product_id)
	REFERENCES products (product_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE products_product_html_parts
	ADD FOREIGN KEY (product_id)
	REFERENCES products (product_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE products_repair_part_groups
	ADD FOREIGN KEY (product_id)
	REFERENCES products (product_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE products_tags
	ADD FOREIGN KEY (product_id)
	REFERENCES products (product_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE product_color_pictures
	ADD FOREIGN KEY (product_id)
	REFERENCES products (product_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE product_options
	ADD FOREIGN KEY (product_id)
	REFERENCES products (product_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE product_option_contents_pictures
	ADD FOREIGN KEY (product_id)
	REFERENCES products (product_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE product_pictures
	ADD FOREIGN KEY (product_id)
	REFERENCES products (product_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE product_settings
	ADD FOREIGN KEY (product_id)
	REFERENCES products (product_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE product_size_pictures
	ADD FOREIGN KEY (product_id)
	REFERENCES products (product_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE related_products
	ADD FOREIGN KEY (product_id)
	REFERENCES products (product_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE semi_order_html_contents
	ADD FOREIGN KEY (product_id)
	REFERENCES products (product_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE specification_detail_individuals
	ADD FOREIGN KEY (product_id)
	REFERENCES products (product_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE products
	ADD FOREIGN KEY (product_category_id)
	REFERENCES product_categories (product_category_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE products_product_feature_tags
	ADD FOREIGN KEY (product_feature_tag_id)
	REFERENCES product_feature_tags (product_feature_tag_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE products_product_html_parts
	ADD FOREIGN KEY (product_html_part_id)
	REFERENCES product_html_parts (product_html_part_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE repair_part_groups
	ADD FOREIGN KEY (product_html_part_id)
	REFERENCES product_html_parts (product_html_part_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE product_html_parts
	ADD FOREIGN KEY (product_html_part_type_id)
	REFERENCES product_html_part_types (product_html_part_type_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE product_option_contents
	ADD FOREIGN KEY (product_option_id)
	REFERENCES product_options (product_option_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE product_option_contents_pictures
	ADD FOREIGN KEY (product_option_content_id)
	REFERENCES product_option_contents (product_option_content_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE repair_part_groups_repair_parts
	ADD FOREIGN KEY (repair_parts_id)
	REFERENCES repair_parts (repair_parts_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE products_repair_part_groups
	ADD FOREIGN KEY (repair_part_groups_id)
	REFERENCES repair_part_groups (repair_part_groups_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE repair_part_groups_repair_parts
	ADD FOREIGN KEY (repair_part_groups_id)
	REFERENCES repair_part_groups (repair_part_groups_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE products_repair_part_groups
	ADD FOREIGN KEY (size_id)
	REFERENCES sizes (size_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE product_size_pictures
	ADD FOREIGN KEY (size_id)
	REFERENCES sizes (size_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE product_settings
	ADD FOREIGN KEY (size_group_id)
	REFERENCES size_groups (size_group_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE sizes
	ADD FOREIGN KEY (size_group_id)
	REFERENCES size_groups (size_group_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE products_tags
	ADD FOREIGN KEY (tag_id)
	REFERENCES tags (tag_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;



/* Create Indexes */

CREATE INDEX uq_materials_01 ON materials (material_name ASC, material_code ASC, color_id ASC, plate_thickness_id ASC);
CREATE INDEX idx_products_01 ON products (product_code ASC);
CREATE INDEX uq_products_01 ON products (product_name ASC, product_code ASC, product_category_id ASC, product_type_code ASC);
CREATE INDEX idx_product_categories_01 ON product_categories (parent_category_id ASC);
CREATE INDEX idx_repair_parts_01 ON repair_parts (product_code ASC, product_name ASC);
CREATE INDEX idx_specification_detail_individuals_01 ON specification_detail_individuals (product_id ASC);
CREATE INDEX idx_specification_detail_individuals_02 ON specification_detail_individuals (color_id ASC);
CREATE INDEX idx_specification_detail_individuals_03 ON specification_detail_individuals (size_id ASC);
CREATE INDEX idx_specification_detail_individuals_04 ON specification_detail_individuals (plate_thickness_id ASC);




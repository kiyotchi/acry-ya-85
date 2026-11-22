# テストベースライン（Laravel 5.8 = 58 と Laravel 6.20 = 85）

- 実行日: 2026-11-22
- DB: 管理=`acryya_system_test`（migrate:fresh --seed 済み）、フロント=`acryya_system_front_test`（dump2026.sql 投入）
- 管理 58 / 85 とも: Tests 70 / Assertions 77 / Errors 13 / Failures 19 / Skipped 10 / Risky 4（テストごとの結果も完全一致）
- フロント 58 / 85 とも: Tests 2 / OK

## 管理（85）テストごとの結果
```
 ✔ Basic test
 ✔ Find all
 ✔ Find all of part
 ✔ Find by product html part type id
 ✔ Find list
 ✔ Find list all
 ✔ Filter add information
 ✔ Filter feature
 ✔ Find html part type list
 ✔ Register product html part
 ✔ Update product html part
 ✔ Delete product html part
 ✔ Example
 ✔ Get color image
 ✔ Get size image
 ✔ Get option image
 ✘ Register color image
 ✘ Register size image
 ✘ Register option image
 ✔ Find all
 ✘ Find all paging
 ✘ Register
 ✘ Update
 ✘ Delete
 ↩ Find list
 ↩ Find list non para
 ✘ Find
 ✘ Register
 ↩ Generate deliveries
 ↩ Delete
 ✘ Find html part
 ↩ Custom register
 ✘ Find all
 ✔ Find
 ✔ Update
 ✔ Update delete
 ✘ Find
 ✘ Find by product id
 ✔ Find by product id not found
 ↩ Update
 ↩ Update new register
 ↩ Update all
 ✘ Get color data
 ✘ Get size data
 ✘ Get option data
 ✘ Get color list
 ✔ Get size list
 ✔ Get plate thickness list
 ✔ Get option list
 ✘ Basic test
 ✘ Example
 ✘ Search
 ✘ Search of dir
 ✘ Search of dir like
 ✘ Store
 ✘ Store non dir
 ✘ Store failed
 ↩ Store capacity over
 ✘ Store duplicate
 ✘ Store overwrite
 ✘ Store overwrite unknown resource
 ✘ Delete
 ✘ Delete unknown id
 ✘ Delete bad request
 ↩ Delete
 ✘ Product image update
 ✘ Register color image
 ✘ Register size image
 ✘ Register option image
 ✘ Find all paging
 ✘ Register
 ✘ Update
 ✘ Delete
 ↩ Find list
 ↩ Find list non para
 ✘ Find
 ✘ Register
 ↩ Generate deliveries
 ↩ Delete
 ✘ Find html part
 ↩ Custom register
 ✘ Find all
 ✘ Find
 ✘ Find by product id
 ↩ Update
 ↩ Update new register
 ↩ Update all
 ✘ Get color data
 ✘ Get size data
 ✘ Get option data
 ✘ Get color list
 ✘ Basic test
 ✘ Example
 ✘ Search
 ✘ Search of dir
 ✘ Search of dir like
 ✘ Store
 ✘ Store non dir
 ✘ Store failed
 ↩ Store capacity over
 ✘ Store duplicate
 ✘ Store overwrite
 ✘ Store overwrite unknown resource
 ✘ Delete
 ✘ Delete unknown id
 ✘ Delete bad request
 ↩ Delete
```

#!/usr/bin/env python3
"""给鲁迅《野草》6篇博文插入配图。
- 按唯一子串定位锚点段落，在该段落后插入：空行 + ![中文描述](/images/文件名) + 空行
- front matter 与原有格式不动；全文统一写回 CRLF 换行
- 若某图片文件不存在则跳过该处插入并告警
用法: python3 insert-yecao-images.py
"""
import os

POSTS = os.path.expanduser("~/workspace/blog-check/source/_posts")
IMGS = os.path.expanduser("~/workspace/blog-check/source/images")

# 每篇：[(锚点唯一子串, 图片文件, 中文图片描述), ...]
PLAN = {
    "2026-qiuye.md": [
        ("整个后园就是两拨人：一拨是枣树",
         "qiuye-night-tree.jpg", "夜空下的树剪影——“奇怪而高的天空”"),
        ("过着寄人篱下的日子",
         "luxun-1930.jpg", "鲁迅1930年肖像"),
        ("咱们大多数人都是小粉红花",
         "qiuye-flower.jpg", "冷夜里的小粉红花"),
    ],
    "2026-ying-de-gaobie.md": [
        ("两个人格住在一个身体里",
         "ying-shadow.jpg", "投射在墙上的人影"),
        ("更接近真实",
         "luxun-1930.jpg", "鲁迅1930年肖像"),
    ],
    "2026-qiuqi-zhe.md": [
        ("讽刺的不是乞丐",
         "qiuqi-beggar-1921.jpg", "1921年的中国乞丐（老照片）"),
        ("穷不丢人，装才丢人",
         "qiuqi-rickshaw-1921.jpg", "1921年街头的人力车夫（老照片）"),
    ],
    "2026-fuchou.md": [
        ("真正的主角，根本不是那两个拿刀的人",
         "fuchou-wilderness.jpg", "一望无际的旷野"),
        ("他把它当病来治",
         "fuchou-crowd-1941.jpg", "1941年重庆围观“集体婚礼”的人群（老照片）"),
    ],
    "2026-xiwang.md": [
        ("1925年1月，鲁迅写下《希望》",
         "luxun-1930.jpg", "鲁迅1930年肖像"),
        ("这句话的重点根本不是“希望”，是“走”",
         "xiwang-road.jpg", "荒野中的小路——“走的人多了，也便成了路”"),
    ],
    "2026-sihuo.md": [
        ("鲁迅的梦，从来不只是梦",
         "sihuo-embers.jpg", "火堆余烬——冻灭的“死火”"),
        ("这本身，就是一次“捧火”",
         "sihuo-ashes.jpg", "火灭后的灰烬"),
    ],
}

total = 0
for fname, items in PLAN.items():
    path = os.path.join(POSTS, fname)
    with open(path, "rb") as f:
        raw = f.read()
    text = raw.decode("utf-8")
    lines = text.splitlines()  # 通吃 LF/CRLF
    n = 0
    for anchor, img, caption in items:
        if not os.path.isfile(os.path.join(IMGS, img)):
            print(f"SKIP {fname}: 图片缺失 {img}（锚点“{anchor[:12]}…”）")
            continue
        idx = next((i for i, ln in enumerate(lines) if anchor in ln), None)
        if idx is None:
            print(f"SKIP {fname}: 锚点未找到 “{anchor}”")
            continue
        if any(img in ln for ln in lines[max(0, idx-1):idx+3]):
            print(f"SKIP {fname}: {img} 疑似已插入")
            continue
        img_line = f"![{caption}](/images/{img})"
        lines[idx+1:idx+1] = ["", img_line, ""]
        n += 1
    with open(path, "wb") as f:
        f.write("\r\n".join(lines).encode("utf-8"))
    # 校验仍是 CRLF
    with open(path, "rb") as f:
        check = f.read()
    crlf_ok = check.count(b"\r\n") > 0 and b"\n" not in check.replace(b"\r\n", b"")
    print(f"{fname}: 插入 {n} 张，CRLF={'OK' if crlf_ok else 'CHECK'}")
    total += n
print(f"共插入 {total} 张")

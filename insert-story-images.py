#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""故事新编8篇博文插入配图。
前置：先跑 download-story-images.sh 把图片下载到 source/images/。
用法：python3 insert-story-images.py
- 按段落锚点在相关段落后插入 `![中文描述](/images/文件名)` 独立成行
- 文件保持 UTF-8 无 BOM、CRLF 换行；front matter 不动
- 幂等：已插入过的图片不会重复插入
"""
import os

BASE = os.path.dirname(os.path.abspath(__file__))
POSTS = os.path.join(BASE, "source", "_posts")

# 每篇：[(段落锚点(必须在该段落内唯一出现), 图片文件名, 中文图注), ...]
PLAN = {
    "2026-butian.md": [
        ("它们是被随手挥洒出来的", "nuwa-butian.jpg", "女娲画像"),
        ("最后，她力竭，倒在地上，死了。", "nuwa-butian-story.webp", "女娲补天图"),
    ],
    "2026-benyue.md": [
        ("后羿射下九个太阳，一战成名", "houyi-painting.jpg", "后羿射日画像"),
        ("一个人飞上月亮", "change-flying-moon.png", "嫦娥奔月图"),
        ("肚子比弓还圆", "houyi-change-art.webp", "后羿与嫦娥古画"),
    ],
    "2026-zhujian.md": [
        ("楚王直接把铸剑师杀了", "goujian-sword.jpg", "越王勾践剑（春秋青铜剑文物）"),
        ("黑衣人突然拔剑", "bronze-sword.jpeg", "古代青铜剑文物"),
    ],
    "2026-feigong.md": [
        ("黑瘦、吃苦、较真，还带点滑稽", "mozi-portrait.jpeg", "墨子画像"),
        ("九套攻法，九套守法，招招被破", "mozi-baike.jpg", "墨子像"),
    ],
    "2026-caiwei.md": [
        ("孤竹国俩公子，老大伯夷、老三叔齐", "boyi-shuqi.jpg", "伯夷叔齐画像"),
        ("薇越采越少，肚子越来越瘪", "boyi-shuqi-2.jpeg", "伯夷叔齐采薇图"),
        ("咽气之前，先把脸面擦干净", "boyi-shuqi-3.jpeg", "伯夷叔齐像"),
    ],
    "2026-chuguan.md": [
        ("牵上青牛，西出函谷关", "laozi-qingniu.jpg", "老子骑青牛出关图"),
        ("写了上下篇，五千多字", "laozi-art.jpg", "老子画像"),
    ],
    "2026-lishui.md": [
        ("拿着锸（铲子）在泥水里泡着", "dayu-flood.jpg", "大禹治水图"),
        ('围了一大圈"鸟头先生"', "dayu-art.jpg", "大禹治水"),
    ],
    "2026-qisi.md": [
        ("骷髅说，拉倒吧，死了多清净", "zhuangzi-portrait.jpeg", "庄子画像"),
        ("真把骷髅给救活了", "zhuangzi-skull.jpg", "庄子与骷髅"),
    ],
}


def insert_after_paragraph(text, anchor, imgline):
    if imgline in text:
        return text, "skip-exists"
    count = text.count(anchor)
    if count != 1:
        return text, f"skip-anchor-count={count}"
    idx = text.find(anchor)
    para_end = text.find("\n\n", idx)
    if para_end == -1:
        return text.rstrip("\n") + "\n\n" + imgline + "\n", "ok-append"
    return text[:para_end] + "\n\n" + imgline + text[para_end:], "ok"


def main():
    for fname, items in PLAN.items():
        path = os.path.join(POSTS, fname)
        raw = open(path, "rb").read().decode("utf-8")
        text = raw.replace("\r\n", "\n").replace("\r", "\n")
        for anchor, imgfile, caption in items:
            imgline = f"![{caption}](/images/{imgfile})"
            text, status = insert_after_paragraph(text, anchor, imgline)
            print(f"{fname} | {imgfile} | {status}")
        open(path, "wb").write(text.replace("\n", "\r\n").encode("utf-8"))
    print("DONE")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""给朝花夕拾10篇博文在相关段落之后插入图片行，保持 CRLF 换行。"""
import sys, os

POSTS_DIR = "/home/hatch/workspace/blog-check/source/_posts"
IMGS_DIR = "/home/hatch/workspace/blog-check/source/images"

# (文件名, 锚点文本(段落内唯一子串), 图片markdown行, 图片文件名用于校验存在)
JOBS = [
    ("2026-gou-mao-shu.md",
     "这哪是在写猫，分明是在给后文埋钩子。",
     "![猫对着主人撒娇卖萌的媚态](/images/gou-mao-shu-cat.jpg)",
     "gou-mao-shu-cat.jpg"),
    ("2026-gou-mao-shu.md",
     "猫是幌子，人是靶子。",
     "![鲁迅](/images/luxun-portrait.jpg)",
     "luxun-portrait.jpg"),

    ("2026-achang-yu-shanhaijing.md",
     "你看，缺点一条不落，全是实锤。",
     "![晚清时期的普通劳动妇女，阿长就是这样没文化却真心待人的女工](/images/achang-qing-woman.jpg)",
     "achang-qing-woman.jpg"),
    ("2026-achang-yu-shanhaijing.md",
     "从那一刻起，他对阿长所有的轻视，碎了一地。",
     "![绘图本《山海经》书影](/images/shanhaijing-book.jpg)",
     "shanhaijing-book.jpg"),

    ("2026-ershisi-xiaotu.md",
     "搁今天这叫什么？故意杀人罪，直接判了，还孝子呢。",
     "![二十四孝图之郭巨埋儿](/images/ershisi-guoju.jpg)",
     "ershisi-guoju.jpg"),
    ("2026-ershisi-xiaotu.md",
     "你是先感动还是先报警？",
     "![二十四孝图之卧冰求鲤](/images/ershisi-wobing.jpg)",
     "ershisi-wobing.jpg"),

    ("2026-wuchanghui.md",
     "穿上新衣服，就等大人一声令下出门。",
     "![绍兴迎神赛会旧影，一年一度的五猖会热闹非凡](/images/wuchanghui-parade.jpg)",
     "wuchanghui-parade.jpg"),
    ("2026-wuchanghui.md",
     "但爱的方式错了，错得让孩子记一辈子。",
     "![绍兴鲁迅故居，鲁迅童年生活的地方](/images/wuchanghui-shaoxing.jpg)",
     "wuchanghui-shaoxing.jpg"),

    ("2026-wuchang.md",
     "按理说，这该是个让人害怕的角色。",
     "![白无常形象：高帽长衣，手摇铁索](/images/wuchang-baiwuchang.jpg)",
     "wuchang-baiwuchang.jpg"),
    ("2026-wuchang.md",
     "传说里的无常，是个讲人情、懂体谅的鬼。",
     "![绍兴迎神赛会旧影](/images/wuchang-festival.jpg)",
     "wuchang-festival.jpg"),

    ("2026-baicaoyuan-sanwei.md",
     "鸟一来，猛地一拉绳子——成了！",
     "![绍兴百草园实景](/images/baicaoyuan-garden.jpg)",
     "baicaoyuan-garden.jpg"),
    ("2026-baicaoyuan-sanwei.md",
     "对他\"很敬重\"。",
     "![三味书屋旧影](/images/sanwei-study.jpg)",
     "sanwei-study.jpg"),

    ("2026-fuqin-de-bing.md",
     "说白了，病死只占一半原因，另一半，是被\"名医\"活活折腾死的",
     "![清末绍兴老街](/images/fuqin-shaoxing.jpg)",
     "fuqin-shaoxing.jpg"),
    ("2026-fuqin-de-bing.md",
     "你品品，这是在开药还是在讲相声？",
     "![清末中药铺旧影](/images/fuqin-yaopu.jpg)",
     "fuqin-yaopu.jpg"),

    ("2026-suoji.md",
     "多少人到了三十岁，耳边还回响着这句话，干什么都先自我怀疑一下。",
     "![江南水师学堂旧址，鲁迅曾在此求学](/images/suoji-naval-school.jpg)",
     "suoji-naval-school.jpg"),
    ("2026-suoji.md",
     "离那些\"好人\"远一点，你才能活得像个人。",
     "![民国时期的南京街景](/images/suoji-nanjing.jpg)",
     "suoji-nanjing.jpg"),

    ("2026-tengye-xiansheng.md",
     "一个中国人，往一堆日本学生中间一坐，你想想那个画面，压力能不大吗？",
     "![仙台医学专门学校旧影，鲁迅曾在此学医](/images/sendai-medical.jpg)",
     "sendai-medical.jpg"),
    ("2026-tengye-xiansheng.md",
     "这不是完成教学任务，这是把你当人看。",
     "![藤野严九郎先生](/images/fujino-photo.jpg)",
     "fujino-photo.jpg"),

    ("2026-fan-ainong.md",
     "工作上被排挤，生活中没朋友，日子越过越憋屈。",
     "![范爱农](/images/fan-ainong-photo.jpg)",
     "fan-ainong-photo.jpg"),
    ("2026-fan-ainong.md",
     "\"会做人比会做事重要\"这条千年老规矩。",
     "![辛亥革命时期旧影](/images/xinhai-revolution.jpg)",
     "xinhai-revolution.jpg"),
]

def insert_after_paragraph(text, anchor, img_line):
    idx = text.find(anchor)
    if idx == -1:
        return None
    para_end = text.find("\n\n", idx)
    if para_end == -1:
        para_end = len(text)
    else:
        para_end += 2
    return text[:para_end] + img_line + "\n" + text[para_end:]

def main():
    only = sys.argv[1:]
    counts = {}
    for fname, anchor, img, imgfile in JOBS:
        if only and fname not in only:
            continue
        if not os.path.exists(f"{IMGS_DIR}/{imgfile}"):
            print(f"SKIP(图片未下载) {fname}: {imgfile}")
            continue
        path = f"{POSTS_DIR}/{fname}"
        with open(path, "rb") as f:
            raw = f.read()
        text = raw.decode("utf-8").replace("\r\n", "\n")
        if img in text:
            print(f"SKIP(已存在) {fname}: {imgfile}")
            continue
        new = insert_after_paragraph(text, anchor, img)
        if new is None:
            print(f"FAIL(锚点未找到) {fname}: {anchor[:30]}")
            continue
        with open(path, "wb") as f:
            f.write(new.replace("\n", "\r\n").encode("utf-8"))
        counts[fname] = counts.get(fname, 0) + 1
        print(f"OK {fname} <- {imgfile}")
    print("每篇插入数:", counts)

if __name__ == "__main__":
    main()

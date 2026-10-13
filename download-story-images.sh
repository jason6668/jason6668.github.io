#!/bin/bash
# 故事新编8篇博文配图下载脚本
# 在出网正常的环境执行：bash download-story-images.sh
# 图片落到 ~/workspace/blog-check/source/images/，下载完用 file 校验
IMGDIR=/home/hatch/workspace/blog-check/source/images
cd "$IMGDIR" || exit 1
UA='Mozilla/5.0 (Windows NT 10.0; Win64; x64)'

dl() { # url outfile
  echo "== $2"
  if curl -fsSL --connect-timeout 15 --max-time 90 -A "$UA" -o "$2" "$1"; then
    echo "   $(file -b "$2" | cut -c1-60)  $(stat -c%s "$2") bytes"
  else
    echo "   FAILED: $1"; rm -f "$2"
  fi
}

# 补天-女娲（搜索词：女娲 画像石 补天）
dl 'https://image.uczzd.cn/18326036027516685663.jpg?id=0' nuwa-butian.jpg
dl 'https://images.ctfassets.net/pl05rcmbdryr/2orvRBlmN015uEvyW7ZCEh/513309af3f95212c22ce30b6deb0c41f/image_1773990947474.webp?w=1200' nuwa-butian-story.webp
dl 'https://dayu-img.uc.cn/columbus/img/oc/1002/db6458432df05eb846c49b3531691ac2.webp' nuwa-mending.webp

# 奔月-嫦娥后羿（搜索词：嫦娥奔月 古代绘画 / 后羿射日 画像石）
dl 'https://q4.itc.cn/q_70/images01/20251003/a3d4fe8b708e406a84453b54d877b792.png' change-flying-moon.png
dl 'https://img.shetu66.com/2025/06/25/175081917410814452.png?x-oss-process=image/resize,h_900/format,webp' houyi-change-art.webp
dl 'https://img1.artron.net/auction/2009/art5999/d/art59994436.jpg' houyi-painting.jpg

# 铸剑-越王勾践剑（搜索词：越王勾践剑 博物馆）
dl 'https://image.uczzd.cn/14241842860156513160.jpg?id=0' goujian-sword.jpg
dl 'https://pic.rmb.bdstatic.com/bjh/news/485a7dfb998b354ce9034e301a627822.jpeg' bronze-sword.jpeg
dl 'https://n.sinaimg.cn/sinakd20250406s/263/w640h423/20250406/9afb-184ea44cb14444bdc3b368f966987ceb.jpg' goujian-sword-sina.jpg

# 非攻-墨子（搜索词：墨子圣像 古代）
dl 'https://pic.allhistory.com/T1OtDCB4AT1RCvBVdK.jpeg?ch=1175&cw=1567&cx=285&cy=348&q=50&w=500&h=500' mozi-portrait.jpeg
dl 'https://3e97756f-e20a-4497-8bc2-57f45e005c8a.baidu.scalaris-eci.com/bkimg.cdn.bcebos.com/smart/64380cd7912397dda14403f6fdd4a5b7d0a20df429b-bkimg-process,v_1,rw_189,rh_280,maxl_560?x-bce-process=image/format,f_auto' mozi-baike.jpg
dl 'https://i1.go2yd.com/corpimage.php?docid=13Hv7A18&source=vivobrowser&type=webp&url=YD_cnt_195_01mo3NIOJuLT' mozi-art.webp

# 采薇-伯夷叔齐（搜索词：伯夷叔齐画像）
dl 'https://exp-picture.cdn.bcebos.com/05aae8a75f0f822b78e5a185c018512c8df14da6.jpg' boyi-shuqi.jpg
dl 'https://pic.rmb.bdstatic.com/bjh/news/e7daa7d702f9b1ab879386617532f1be.jpeg' boyi-shuqi-2.jpeg
dl 'https://p9.itc.cn/q_70/images03/20221007/991167aa7c2d4c65ac195bc3fe9d92bc.jpeg' boyi-shuqi-3.jpeg

# 出关-老子（搜索词：老子骑青牛 画像）
dl 'https://dayu-img.uc.cn/columbus/img/oc/1002/4a2409bc43e5997ad7e63205792464f2.jpg' laozi-qingniu.jpg
dl 'https://imgs.wantubizhi.com/img/ADDA3C5D760C6828B77B505A29D43E83E0F23CAAB864F761F66E439B230552209BB499A1D3A71A743CF5D612B26AA8BD073EAB12E21882057CF67A821B4A4582D7312FF77664C1186DEAF867B6C' laozi-art.jpg
dl 'https://i.pinimg.com/originals/2d/7e/11/2d7e1156b54cc9e0843b47e31b23efb0.jpg' laozi-painting.jpg

# 理水-大禹（搜索词：大禹治水 国画）
dl 'https://static.yangguanyue.com/images/%E5%A4%A7%E7%A6%B9%E6%B2%BB%E6%B0%B4.jpg' dayu-flood.jpg
dl 'http://img.aigexing.net/uploads/3/1253/3447184359/93719276182/36123335.jpg' dayu-art.jpg
dl 'https://rc-yjbl.com/uploads/allimg/20251230/f44150efb3fb06a7d854420173642a15.jpg' dayu-painting.jpg

# 起死-庄子（搜索词：庄子 画像 / 庄子见骷髅 图）
dl 'https://www.tcpc.org.cn/wp-content/uploads/2026/04/2026041416302563.jpeg' zhuangzi-portrait.jpeg
dl 'https://dayu-img.uc.cn/columbus/img/oc/1002/9eebfd6ec83ba32654540ce015be94ca.jpg' zhuangzi-art.jpg
dl 'https://i.ecywang.com/upload/1/img0.baidu.com/it/u=1380032973,1267360301&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1192' zhuangzi-skull.jpg

echo "DONE"

#!/bin/bash
# 《野草》6篇博文配图下载脚本（共11张，luxun-1930.jpg 被3篇复用）
# 用法: bash download-yecao-images.sh
# 要求: file 命令校验为有效图片；大小尽量 200-500KB（小图也可用）
set -u
IMG="$HOME/workspace/blog-check/source/images"
mkdir -p "$IMG"

dl() { # $1=文件名 $2=URL
  local f="$IMG/$1"
  if [ -f "$f" ] && file "$f" | grep -qiE 'image data|jpeg|png|webp'; then
    echo "SKIP $1 (已存在, $(du -h "$f" | cut -f1))"
    return 0
  fi
  if curl -fsSL --connect-timeout 15 --max-time 90 -A 'Mozilla/5.0' -o "$f" "$2" \
     && file "$f" | grep -qiE 'image data|jpeg|png|webp'; then
    echo "OK   $1 ($(du -h "$f" | cut -f1))"
  else
    echo "FAIL $1"
    rm -f "$f"
    return 1
  fi
}

# 鲁迅1930年肖像（Wikimedia Commons；秋夜/影的告别/希望 三篇复用）
dl luxun-1930.jpg 'https://upload.wikimedia.org/wikipedia/commons/4/48/LuXun1930.jpg'

# 秋夜：夜空下的树剪影（"奇怪而高的天空"）
dl qiuye-night-tree.jpg 'https://cosmo.org/wp-content/uploads/2023/05/tree-silhouetting-the-milky-way-SBI-326435518_650.jpg'
# 秋夜：冷夜里的小粉红花
dl qiuye-flower.jpg 'https://steemitimages.com/p/3jpR3paJ37V8JxyWvtbhvcm5k3roJwHBR4WTALx7XaoRovrqAvWtJxgibENLNmBKGjnojxKb5VH8QGZXo3xrAs5YB4iSjNQyV5XhqEB6uqMsqRZ7vXHqHMFjXHE3qwNbjup3Q?mode=fit&format=match&width=640'

# 影的告别：投射在墙上的人影
dl ying-shadow.jpg 'https://static.vecteezy.com/system/resources/thumbnails/051/591/028/small_2x/shadow-of-a-person-against-a-dramatic-textured-wall-with-contrasting-colors-of-blue-and-orange-light-photo.jpg'

# 求乞者：1921年的中国乞丐（法国人1921年10月在上海/苏州/北京拍摄，MONOVISIONS 图注 "Beggar"）
dl qiuqi-beggar-1921.jpg 'https://monovisions.com/wp-content/uploads/2018/09/vintage-everyday-life-of-china-1921-07.jpg'
# 求乞者：1921年街头的人力车夫（同系列图注 "Rickshaw man drinking tea"）
dl qiuqi-rickshaw-1921.jpg 'https://monovisions.com/wp-content/uploads/2018/09/vintage-everyday-life-of-china-1921-01.jpg'

# 复仇：一望无际的旷野
dl fuchou-wilderness.jpg 'https://static.vecteezy.com/system/resources/thumbnails/078/561/655/small/great-plains-prairie-prairie-farmland-stretching-to-horizon-grassland-vegetation-green-prairie-summer-photo.jpeg'
# 复仇：1941年重庆围观"集体婚礼"的人群（Harrison Forman 摄，UWM 美国地理学会图书馆藏，题名 "crowd watching 'Mass Marriage' ceremony"）
dl fuchou-crowd-1941.jpg 'https://collections.lib.uwm.edu/iiif/2/agsphoto:5346/full/730,/0/default.jpg'

# 希望：荒野中的小路（"走的人多了，也便成了路"）
dl xiwang-road.jpg 'https://www.jsilkstonephotography.com/img/s/v-10/p2378890547-3.jpg'

# 死火：火堆余烬
dl sihuo-embers.jpg 'https://static.vecteezy.com/ti/fotos-kostenlos/t1/7485002-kohlen-im-feuer-foto.jpg'
# 死火：火灭后的灰烬（"化作一缕青烟"）
dl sihuo-ashes.jpg 'https://bobmccoskrie.com/wp-content/uploads/2025/09/ASHES-1024x682.jpg'

echo '--- 完成 ---'
ls -la "$IMG" | grep -E 'luxun-1930|qiuye-night-tree|qiuye-flower|ying-shadow|qiuqi|fuchou|xiwang-road|sihuo'

#!/bin/bash
# 并行下载缺失图片：每个文件试主备URL，各2次
# 用法: bash /home/hatch/workspace/blog-check/hidden_files/img-retry/dl-parallel.sh
# 成功后把 /tmp/img-dl/*.jpg 拷到 ~/workspace/blog-check/source/images/，
# 再跑 python3 .../insert-zhaohua-images.py 完成插入
SCRIPT_DIR="$(dirname "$0")"
mkdir -p /tmp/img-dl
cd /tmp/img-dl || exit 1
dl_one() {
  local u1="$1" u2="$2" name="$3"
  [ -f "$name" ] && { echo "SKIP $name"; return 0; }
  for url in "$u1" "$u2"; do
    for try in 1 2; do
      if curl -fsSL --connect-timeout 8 --max-time 90 -A 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' -o "$name.tmp" "$url" 2>/dev/null; then
        if file "$name.tmp" | grep -qiE 'image|jpeg|png|gif|webp'; then
          mv "$name.tmp" "$name"
          echo "OK $name $(stat -c%s "$name")B <= $url"
          return 0
        fi
      fi
      sleep 1
    done
    rm -f "$name.tmp"
  done
  echo "FAIL $name"
  return 1
}
export -f dl_one
# 一次只处理缺失的文件
grep -v '^$' "$SCRIPT_DIR/img-dl-list2.txt" | while IFS='|' read -r u1 u2 name; do
  [ -f "/tmp/img-dl/$name" ] || echo "$u1|$u2|$name"
done > "$SCRIPT_DIR/img-todo.txt"
cat "$SCRIPT_DIR/img-todo.txt" | xargs -P 4 -I{} bash -c 'IFS="|" read -r a b c <<< "{}"; dl_one "$a" "$b" "$c"'
echo "=== PASS DONE ==="
ls -la /tmp/img-dl/ | grep -v '^total'
